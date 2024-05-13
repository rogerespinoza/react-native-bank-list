import { FinancialProduct } from '../domain';

// ------ Style
export const colors = {
  white: '#FFF',
  blue1: '#E8ECF4',
  gray1: '#E0E5F0',
  yellow1: '#FFDB00',
};

// ------- Time
export const TIMESTAMP_ONE_YEAR = 31536000000;

// ------ Product
const currentDate = new Date();
export const productEmpy: FinancialProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: currentDate,
  date_revision: new Date(currentDate.getTime() + TIMESTAMP_ONE_YEAR),
};
