export type IRegister = {
  walletId: string;
  referralCode?: string;
};

export type IRegisterReturn = IBEUser;

export type IGetUser = {
  walletId: string;
};

export type IGetUserReturn = IBEUser;

export type IBEUser = {
  userId: number;
  walletId: string;
  balance: number;
  fightsCount: number;
  lastDailyDrop: Date;
};

export type IGetDailyDrop = {
  walletId: string;
};

export type IGetDailyDropReturn = IBEUser;
