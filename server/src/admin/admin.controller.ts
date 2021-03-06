import { Controller, Get, Param, Post, Body, Req, UseInterceptors } from '@nestjs/common';
import { App, User, Permission, Role } from 'shared/models/user.model';
import { UserService } from '../services/user.service';
import { cryptPassword, getRandomToken } from '../utils';
import { MailerService } from '../services/mailer.service';
import { AuthorizeInterceptor } from '../middlewares/authorize.middleware';
@Controller('rest/admin')
@UseInterceptors(AuthorizeInterceptor)
export class AdminController {
    constructor(private userService: UserService, private mailer: MailerService) {
        this.userService.userRepo.collection.countDocuments().then(async usersCount => {
            if (usersCount) {
                return;
            }
            const user = new User({
                email: 'admin@admin.com',
                phone: '0555555',
                fName: 'Admin',
                lName: '',
                roles: [{ app: App.admin, permission: Permission.user }],
            });
            user.password = await cryptPassword('123456');
            this.addUser(user).then();
        });
    }

    @Post('users/:app')
    async users(@Body() app: App): Promise<User[]> {
        return this.userService.getUsers({ 'roles.app': App.tador } as any);
    }

    @Post('addUser')
    async addUser(@Body() user: User, @Req() req?) {
        const existUser = await this.userService.userRepo.findOne({ email: user.email });
        let newRole: Role;
        if (existUser) {
            newRole = user.roles.find(r => !existUser.roles.find(rr => rr.permission === r.permission && rr.app == r.app));
            if (newRole) existUser.roles.push(newRole);
            user.roles = existUser.roles;
        }

        const result = (await this.userService.saveUser(user)) as any;
        if (req && (newRole || !existUser)) {
            const token = await getRandomToken();
            this.userService.saveUserToekn(user.email, token);
            const url = req.headers.origin +  '/tador/auth/signin/' + token;
            this.mailer.send({
                from: '"Tador system management" <server@tador.com>',
                to: user.email,
                subject: '???????????? ???????????? ??????????',
                html: `<div dir="rtl">
                            <h1>????????</h1>
                            <h2>???? ???? ???????????? ???????? ?????????? ??????????</h2>
                            <a href="${url}">
                                 ??????????
                            </a>
                       </div>`,
            });
        }
        return result;
    }
}
