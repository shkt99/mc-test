import {balance, mastercardDetails, recentTransactions} from '../data/balance';

export const getBalance = () => {
  return balance;
};

export const getRecentTransactions = () => {
  return recentTransactions;
};

export const getMastercardDetails = () => {
  return mastercardDetails;
};
