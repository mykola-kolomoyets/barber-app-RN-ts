import { ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
};

export type Advantage = {
  title: string;
  subtitle: string;
};

export type BusinessInfoValues = {
  ownerName: string;
  DBANumber: string;
  einNumber: string;
};

export type DropDownItem = {
  id: string | number;
  name: string;
};

export type FilterItem = {
  title: string;
  subtitle: string;
  category: string;
  amount: number;
};

export type UnnamedChangeHandler = (value: string) => void;
export type NamedChangeHandler = (name: any, value: string) => void;
