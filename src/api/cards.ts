import {
  balance,
  mastercardDetails,
  recentTransactions,
} from '../data/card.data';

export const getBalance = () => {
  return balance;
};

export const getRecentTransactions = () => {
  return recentTransactions;
};

export const getMastercardDetails = () => {
  return mastercardDetails;
};
