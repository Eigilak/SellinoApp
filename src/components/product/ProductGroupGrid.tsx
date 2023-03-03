import { Component, useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { products } from '../../dummy/products.json'

type ProductGroupProps = {
  headline: string;
  headlineColor: string;
};

interface Product {
  name: string;
  imageUrl: string;
  id: number;
}

const { width } = Dimensions.get('window');
const ITEM_MARGIN = 3;
const ITEM_SIZE = (width - ITEM_MARGIN * 4) / 3;

function ProductGroupGrid(props: ProductGroupProps) {
  const headline = props.headline;
  const navigation = useNavigation();
  // let productsToShow:[][] = [];
  const [productsToShow, setProductsToShow] = useState<any[]>([]);

  useEffect(() => {
    divideArrayIntoChunks(products);
  }, [products])
  
  function divideArrayIntoChunks(arr: any[]) {
    var chunkSize = 3;
    var chunks = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
  
    setProductsToShow(chunks);
  }

  return (
    
    <View style={styles.container}>
      { headline &&
        <Text style={[styles.headlineText, {color: props.headlineColor} ]}>
          { headline }
        </Text>
      }
      {productsToShow.map((row, index) => (
        <View key={index} style={index === productsToShow.length - 1 ? styles.lastRow : styles.row}>
          {row.map((column: Product) => (
            <TouchableOpacity 
              key={column.id} 
              style={styles.item} 
              onPress={() => navigation.navigate('Product', {data: column})}
            >
                <Image style={styles.image} source={{uri: column.imageUrl}} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%'
  },
  headlineText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    marginLeft: 15,
    fontWeight: '500'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lastRow: {
    flexDirection: 'row',
    marginLeft: ITEM_MARGIN / 2
  },
  item: {
    backgroundColor: 'white',
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    margin: ITEM_MARGIN / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default ProductGroupGrid;