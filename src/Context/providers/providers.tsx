import React, {createContext, useEffect, useState} from 'react';
import {providers} from '../../data/service.providers';
import {ProvidersData} from '../../modals';

export type ProvidersContextType = {
  providersData: ProvidersData[];
  setProvidersData: React.Dispatch<React.SetStateAction<ProvidersData[]>>;
};

export const ProvidersContext = createContext<ProvidersContextType>({
  providersData: [
    {
      id: '',
      name: '',
      image: 0,
      color: '',
      connected: false,
    },
  ],
  setProvidersData: () => {},
});

type ProviderProps = {
  children: React.ReactNode;
};
export const ProvidersProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [providersData, setProvidersData] = useState<ProvidersData[]>([
    {
      id: '',
      name: '',
      image: 0,
      color: '',
      connected: false,
    },
  ]);

  useEffect(() => {
    setProvidersData(providers);
  }, []);
  const value = {providersData, setProvidersData};
  return (
    <ProvidersContext.Provider value={value}>
      {children}
    </ProvidersContext.Provider>
  );
};
