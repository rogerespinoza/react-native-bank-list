import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import { ErrorType } from './model';

export const validateId = async (_financialProduct: FinancialProduct) => {
  const alreadyExistID = await DataHandler.verifyProductID(_financialProduct);
  if (alreadyExistID) {
    return { state: true, label: 'El id ya esta registrado!' };
  }
  if (_financialProduct.id === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_financialProduct.id.length < 3) {
    return { state: true, label: 'Minimo 3 caracteres!' };
  }
  if (_financialProduct.id.length > 10) {
    return { state: true, label: 'Máximo 10 caracteres!' };
  }
  if (_financialProduct.id.length > 10) {
    return { state: true, label: 'El ID ya existe!' };
  }

  return { state: false, label: '' };
};

export const validateName = (_financialProduct: FinancialProduct) => {
  if (_financialProduct.name === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_financialProduct.name.length < 5) {
    return { state: true, label: 'Minimo 5 caracteres!' };
  }
  if (_financialProduct.name.length > 100) {
    return { state: true, label: 'Máximo 100 caracteres!' };
  }

  return { state: false, label: '' };
};

export const validateDescription = (_financialProduct: FinancialProduct) => {
  if (_financialProduct.description === '') {
    return { state: true, label: 'El campo es requerido!' };
  }
  if (_financialProduct.description.length < 10) {
    return { state: true, label: 'Minimo 10 caracteres!' };
  }
  if (_financialProduct.description.length > 100) {
    return { state: true, label: 'Máximo 200 caracteres!' };
  }

  return { state: false, label: '' };
};

export const validateLogo = (_financialProduct: FinancialProduct) => {
  if (_financialProduct.logo === '') {
    return { state: true, label: 'El campo es requerido!' };
  }

  return { state: false, label: '' };
};

export const getValidationResponse = async (
  _product: FinancialProduct,
  _ignoreID: boolean = false,
): Promise<ErrorType> => {
  const idError = await validateId(_product);
  return {
    id: !_ignoreID ? idError : { state: false, label: '' },
    name: validateName(_product),
    description: validateDescription(_product),
    logo: validateLogo(_product),
  };
};
