import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { FinancialProduct } from '../../domain';
import { styles } from './styles';
import { Button, Label, Spacer } from '../../components';
import { homeRoutes } from '../../navigation';
import { useProductDetail } from './useProductDetail';

export function ProductDetailScreen({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: any;
}) {
  const product: FinancialProduct = route.params?.product || {};

  const { deleteProduct, getProducts } = useProductDetail({ product });

  const navigateToHome = () => {
    navigation.navigate(homeRoutes.productList, {});
  };

  const navigateToEditProduct = () => {
    navigation.navigate(homeRoutes.editProduct, { product });
  };

  const onEdit = () => {
    navigateToEditProduct();
  };

  const onDelete = async () => {
    try {
      await deleteProduct();
      await getProducts();
      navigateToHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Spacer size={50} />
      <Text style={{ fontWeight: '500', fontSize: 23 }}>
        {`ID: ${product.id?.substring(0, 8) ?? ''}`}
      </Text>
      <Spacer size={5} />
      <Text style={{ fontWeight: '500', fontSize: 15, color: '#00000088' }}>
        Información extra
      </Text>
      <Spacer size={60} />
      <View style={{ width: '95%', alignSelf: 'center' }}>
        <Label label="Nombre" text={product.name} />
        <Spacer size={15} />
        <Label label="Descripción" text={product.description} />
        <Spacer size={15} />
        <Label
          label="Fecha de liberación"
          text={product.date_release.toISOString().substring(0, 10)}
        />
        <Spacer size={15} />
        <Label
          label="Fecha de liberación"
          text={product.date_release.toISOString().substring(0, 10)}
        />
        <Spacer size={15} />
        <Label
          label="Fecha de revisión"
          text={product.date_revision.toISOString().substring(0, 10)}
        />
      </View>
      <Spacer />
      <Button label="Editar" onPress={onEdit} />
      <Spacer size={10} />
      <Button color="red" label="Eliminar" onPress={onDelete} />
      <Spacer size={60} />
    </View>
  );
}

// const Label = ({ label, text }: { label: string; text: string }) => {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <Text style={{ fontWeight: '500', fontSize: 14, color: '#00000088' }}>
//         {label}
//       </Text>
//       <Spacer orientation="horizontal" />
//       <Text
//         numberOfLines={1}
//         style={{
//           fontWeight: '500',
//           fontSize: 14,
//           color: '#000000',
//           width: 150,
//           // alignSelf: 'flex-end',
//           textAlign: 'right',
//         }}>
//         {text}
//       </Text>
//     </View>
//   );
// };
