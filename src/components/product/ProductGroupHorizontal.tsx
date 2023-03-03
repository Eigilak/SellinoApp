import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

type ProductGroupProps = {
  headline: string;
  headlineColor: string;
};

type Product = {
  name: string;
  price: number;
}

function ProductGroupHorizontal(props: ProductGroupProps) {
  const headline = props.headline;

  return (
    <View>
      { headline &&
          <Text style={[styles.headlineText, {color: props.headlineColor} ]}>
            { headline }
          </Text>
      }
      <ScrollView 
        horizontal={true}
        contentContainerStyle={{ paddingRight: 20 }}
        style={styles.productContainer}
      >
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/5149095/351781705_iwGD4xeT0t/P0.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b1/23599530/1393928244_61780da77cb449cba0861c4e3b742e21/P8.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://media-photos.depop.com/b0/17830639/1110520396_bc6f085a9d6442eda63e9e124da86400/P0.jpg'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <Image style={styles.image} source={{uri: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/5149095/351781705_iwGD4xeT0t/P0.jpg'}}></Image>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8
  },
  headlineText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    marginLeft: 15,
    fontWeight: '500'
  },
  productContainer: {
    paddingLeft: 15,
    paddingBottom: 15
  },
  productItem: {
    height: 150,
    width: 120,
    backgroundColor: 'white',
    marginRight: 10,
    borderRadius: 8
  }
});

export default ProductGroupHorizontal;