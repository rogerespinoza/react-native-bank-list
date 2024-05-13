import { FinancialProduct } from '../../domain';
import { ErrorType } from './model';

export const validateId = (_id: string) => {
  if (_id === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_id.length < 3) {
    return { state: true, label: 'Minimo 3 caracteres!' };
  }
  if (_id.length > 10) {
    return { state: true, label: 'Máximo 10 caracteres!' };
  }
  if (_id.length > 10) {
    return { state: true, label: 'El ID ya existe!' };
  }

  return { state: false, label: '' };
};

export const validateName = (_name: string) => {
  if (_name === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_name.length < 5) {
    return { state: true, label: 'Minimo 5 caracteres!' };
  }
  if (_name.length > 100) {
    return { state: true, label: 'Máximo 100 caracteres!' };
  }

  return { state: false, label: '' };
};

export const validateDescription = (_description: string) => {
  if (_description === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_description.length < 10) {
    return { state: true, label: 'Minimo 10 caracteres!' };
  }
  if (_description.length > 100) {
    return { state: true, label: 'Máximo 200 caracteres!' };
  }

  return { state: false, label: '' };
};

export const validateLogo = (_logo: string) => {
  if (_logo === '') {
    return { state: true, label: 'El campo es requerido!' };
  }

  return { state: false, label: '' };
};

export const getErrors = async (
  _product: FinancialProduct,
): Promise<ErrorType> => {
  return {
    id: validateId(_product.id),
    name: validateName(_product.name),
    description: validateDescription(_product.description),
    logo: validateLogo(_product.logo),
  };
};
