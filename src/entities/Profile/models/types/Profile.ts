import { Countries, Currencies } from 'shared/const/common';

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currencies;
  country: Countries;
  city: string;
  username: string;
  avatar: string;
}
