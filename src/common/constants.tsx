import { FinancialProduct } from '../domain';

// ------ Style
export const colors = {
  white: '#FFF',
  blue1: '#E8ECF4',
  gray1: '#E0E5F0',
};

// ------ Product
export const productEmpy: FinancialProduct = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: new Date(),
};
