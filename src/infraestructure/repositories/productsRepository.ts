import { FinancialProduct } from '../../domain';

export class ProductsRepository implements ProductsRepositoryModel {
  private fetchProducts(): FinancialProduct[] {
    return finantialProductsList;
  }

  async getProducts() {
    try {
      return await this.fetchProducts();
    } catch (error) {
      console.log('|>>> error: ProductsRepository <<<|');
      throw error;
    }
  }
}

interface ProductsRepositoryModel {
  getProducts: () => Promise<FinancialProduct[]>;
}

const finantialProductsList: FinancialProduct[] = [
  {
    id: 'trj-crd-1',
    name: 'Tarjetas de Credito',
    description: 'Tarjeta de consumo bajo la modalidad de credito',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: new Date('2023-02-01700:00:00.000+00:00'),
    date_revision: new Date('2023-02-01700:00:00.000+00:00'),
  },
  {
    id: 'trj-crd-2',
    name: 'Tarjetas de Credito',
    description: 'Tarjeta de consumo bajo la modalidad de credito',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: new Date('2023-02-01700:00:00.000+00:00'),
    date_revision: new Date('2023-02-01700:00:00.000+00:00'),
  },
  {
    id: 'trj-crd-3',
    name: 'Tarjetas de Credito',
    description: 'Tarjeta de consumo bajo la modalidad de credito',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: new Date('2023-02-01700:00:00.000+00:00'),
    date_revision: new Date('2023-02-01700:00:00.000+00:00'),
  },
];
