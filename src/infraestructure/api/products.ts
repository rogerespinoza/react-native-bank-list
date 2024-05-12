import { client } from '../client';

const API_BASE =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

export const getProducts = async () => {
  const url = API_BASE + '/bp/products';
  return await client<ProductApi[]>({ url, method: 'GET', body: {} });
};

export const createProduct = async (_item: ProductApi) => {
  const url = API_BASE + '/bp/products';
  return await client<string>({ url, method: 'POST', body: _item });
};

export const updateProduct = async (_item: ProductApi) => {
  const url = API_BASE + '/bp/products';
  return await client<string>({ url, method: 'PUT', body: _item });
};

export const deleteProduct = async (_item: ProductApi) => {
  const url = API_BASE + '/bp/products?' + `id=${_item.id}`;
  return await client<string>({ url, method: 'DELETE' });
};

export interface ProductApi {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
}
