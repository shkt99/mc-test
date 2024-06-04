export type ProvidersData = {
  id: string;
  name: string;
  image: number;
  color: string;
  connected: boolean;
};

export type LoginData = {
  email: string;
  password: string;
};

export type BalanceData = {
  id: string;
  current: string;
  available: string;
  total: string;
  dueDays: string;
  statementBalance: string;
  minimumPayment: string;
  mcId: string;
};

export type RecentTransactionData = {
  id: string;
  name: string;
  image: number;
  date: string;
  amount: string;
  points: string;
};

export type CardControlOptionsData = {
  id: string;
  optionName: string;
  optionSelectedValue: string;
  leftIcon: number;
  rightIcon: number;
};

export type MastercardData = {
  id: string;
  mastercardNumber: string;
  name: string;
  expiryDate: string;
  CVC: string;
  image: number;
  locked: boolean;
};
