import { client } from '../client';

const API_BASE =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

export const getProducts = async () => {
  const url = API_BASE + '/bp/products';
  return await client<ProductApi[]>({ url, method: 'GET', body: {} });
};

export const createProduct = async () => {
  const url = API_BASE + '/bp/products';
  return await client<string>({ url, method: 'GET', body: {} });
};

export interface ProductApi {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}
