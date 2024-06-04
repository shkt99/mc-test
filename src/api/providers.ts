import {credentails} from '../data/service.providers';
import {ProvidersData} from '../modals';

export const connectWithProvider = (
  email: string,
  password: string,
  providerData: ProvidersData,
) => {
  const data = credentails.find(item => item.provider === providerData.name);
  if (data && data.email === email && data.password === password) {
    return true;
  }
  return false;
};
