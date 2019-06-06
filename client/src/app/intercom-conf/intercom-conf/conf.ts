const NAMEN = 250;
const MaxName = NAMEN; // 128
const MaxOutPut = NAMEN; // 128
const MaxCode = NAMEN; // 128
const MaxTimeCycle = 18;
const MaxMasterCode = 1;
const MaxTecUserCode = 1;
const MaxExtKeys = 1;
const MaxProxyLrn = NAMEN; // 205
const MaxProxyLrn2 = NAMEN; // 205
const MaxFloorValue = 60;
const MaxMasageOn = 8;
const MaxAnswerY_N = 16; // MUST ADJUST UP/DOWN
const MaxRelayControl = 2;
const MaxEraseAll = 4; // FIX7  MUST ADJUST UP/DOWN
const MaxFASTstep = 1;
const MaxSpeechLevel = 1;
const MaxService = 12;
const MaxType = 1;
const MaxOfset = 1;
const MaxNewNo = NAMEN;
const MaxCommSpd = 1;
const MaxTel1Num = NAMEN;
const MaxTel2Num = NAMEN;
const MaxTel3Num = NAMEN;
const MaxTel4Num = NAMEN;
const MaxTel5Num = NAMEN;
const MaxTel6Num = NAMEN;
const MaxRingingNum = 1;
const MaxBusySogTone = 9;
const MaxToneCodes = 1;
const MaxConfirmTone = 1;
const MaxSetReadTime = 1;
const MaxSetReadTimer = 12;
const MaxSaveTimerSta = 1;
const MaxFamilyNo = 1;
const MaxMDMCode = 1;
const MaxRmtMasterCode = 1;
const MaxKeepName = 1; // FIX7
const MaxPrxyDirRly1 = 6; // PrxyFast
const MaxPrxyDirRly2 = 6; // PrxyFast
const MaxPrxyQtytRly1 = 6; // PrxyFast
const MaxPrxyQtytRly2 = 6; // PrxyFast
const MaxPRG_Was_Done = 1; // PRG SHOW
const MaxORG_Was_Start = 1; // ORG start
const MaxRelay1MeM = 1; // relay 1 status
const MaxRelay2MeM = 1; // relay 2 status

const CMaxName = 16;
const CMaxOutPut = 3;
const CMaxOrderNames = 1;
const CMaxCode = 10;
const CMaxTimeCycle = 2;
const CMaxMasterCode = 10;
const CMaxTecUserCode = 10;
const CMaxExtKeys = 2;
const CMaxProxyLrn = 8;
const CMaxProxyLrn2 = 8;
const CMaxFloorValue = 3;
const CMaxMasageOn = 1;
const CMaxAnswerY_N = 1;
const CMaxRelayControl = 3;
const CMaxEraseAll = 1;
const CMaxFASTstep = 1;
const CMaxSpeechLevel = 1;
const CMaxService = 6;
const CMaxType = 3;
const CMaxOfset = 4;
const CMaxNewNo = 3;
const CMaxCommSpd = 1;
const CMaxTel1Num = 15;
const CMaxTel2Num = 15;
const CMaxTel3Num = 15;
const CMaxTel4Num = 15;
const CMaxTel5Num = 15;
const CMaxTel6Num = 15;
const CMaxRingingNum = 2;
const CMaxBusySogTone = 2;
const CMaxToneCodes = 2;
const CMaxConfirmTone = 1;
const CMaxSetReadTime = 5;
const CMaxSetReadTimer = 7;
const CMaxSaveTimerSta = 1;
const CMaxFamilyNo = 1;
const CMaxMDMCode = 10;
const CMaxRmtMasterCode = 10;
const CMaxKeepName = 1; // FIX7
const CMaxPrxyDirRly1 = NAMEN; // PrxyFast
const CMaxPrxyDirRly2 = NAMEN; // PrxyFast
const CMaxPrxyQtytRly1 = 16; // PrxyFast
const CMaxPrxyQtytRly2 = 16; // PrxyFast
const CMaxPRG_Was_Done = 1; // PRG SHOW
const CMaxORG_Was_Start = 1; // ORG Start
const CMaxRelay1MeM = 1; // relay 1 status
const CMaxRelay2MeM = 1; // relay 2 status

// *********** System EEprom *****************
const Status_SAC = 1;
const Type = Status_SAC + 4;
const MDMCode = Type + 16;
const MasterCode = MDMCode + MaxMDMCode * CMaxMDMCode; // real code out of modem mape scope
const TecUserCode = MasterCode + MaxMasterCode * CMaxMasterCode;
const Code = TecUserCode + MaxTecUserCode * CMaxTecUserCode;
const Name = Code + MaxCode * CMaxCode; // 1
const OutPut = Name + MaxName * CMaxName * 2; // 7 /IMP
const TimeCycle = OutPut + MaxOutPut * CMaxOutPut; // 7
const ExtKeys = TimeCycle + MaxTimeCycle * CMaxTimeCycle; // 7
const ProxyLrn = ExtKeys + MaxExtKeys * CMaxExtKeys; // 7
const ProxyLrn2 = ProxyLrn + MaxProxyLrn * CMaxProxyLrn * 6; // 7   //IMP
const MasageOn = ProxyLrn2 + MaxProxyLrn2 * CMaxProxyLrn2 * 6; // 7 //IMP
const AnswerY_N = MasageOn + MaxMasageOn * CMaxMasageOn; // 7
const FloorValue = AnswerY_N + MaxAnswerY_N * CMaxAnswerY_N;
const RelayControl = FloorValue + MaxFloorValue * CMaxFloorValue;
const EraseAll = RelayControl + MaxRelayControl * CMaxRelayControl;
const FASTstep = EraseAll + MaxEraseAll * CMaxEraseAll;
const SpeechLevel = FASTstep + MaxFASTstep * CMaxFASTstep;
const Service = SpeechLevel + MaxSpeechLevel * CMaxSpeechLevel;
const Ofset = Service + MaxService * CMaxService;
const NewNo = Ofset + MaxOfset * CMaxOfset;
const CommSpd = NewNo + MaxNewNo * CMaxNewNo;
const Tel1Num = CommSpd + MaxCommSpd * CMaxCommSpd;
const Tel2Num = Tel1Num + MaxTel1Num * CMaxTel1Num;
const Tel3Num = Tel2Num + MaxTel2Num * CMaxTel2Num;
const Tel4Num = Tel3Num + MaxTel3Num * CMaxTel3Num;
const Tel5Num = Tel4Num + MaxTel4Num * CMaxTel4Num;
const Tel6Num = Tel5Num + MaxTel5Num * CMaxTel5Num;
const RingingNum = Tel6Num + MaxTel6Num * CMaxTel6Num;
const BusySogTone = RingingNum + MaxRingingNum * CMaxRingingNum;
const ToneCodes = BusySogTone + MaxBusySogTone * CMaxBusySogTone;
const ConfirmTone = ToneCodes + MaxToneCodes * CMaxToneCodes;
const SetReadTime = ConfirmTone + MaxConfirmTone * CMaxConfirmTone;
const SetReadTimer = SetReadTime + MaxSetReadTime * CMaxSetReadTime;
const SaveTimerSta = SetReadTimer + MaxSetReadTimer * CMaxSetReadTimer;
const FamilyNo = SaveTimerSta + MaxSaveTimerSta * CMaxSaveTimerSta;
const RmtMasterCode = FamilyNo + MaxFamilyNo * CMaxFamilyNo;
const KeepName = RmtMasterCode + MaxRmtMasterCode * CMaxRmtMasterCode; // FIX7
const PrxyDirRly1 = KeepName + MaxKeepName * CMaxKeepName;
const PrxyDirRly2 = PrxyDirRly1 + MaxPrxyDirRly1 * CMaxPrxyDirRly1;
const PrxyQtytRly1 = PrxyDirRly2 + MaxPrxyDirRly2 * CMaxPrxyDirRly2;
const PrxyQtytRly2 = PrxyQtytRly1 + MaxPrxyQtytRly1 * CMaxPrxyQtytRly1;
const PRG_Was_Done = PrxyQtytRly2 + MaxPrxyQtytRly2 * CMaxPrxyQtytRly2;
const ORG_Was_Start = PRG_Was_Done + MaxPRG_Was_Done * CMaxPRG_Was_Done;
const Relay1MeM = ORG_Was_Start + MaxORG_Was_Start * CMaxORG_Was_Start;
const Relay2MeM = Relay1MeM + MaxRelay1MeM * CMaxRelay1MeM;
export const MaxEEprom = Relay2MeM + MaxRelay2MeM * CMaxRelay2MeM;
