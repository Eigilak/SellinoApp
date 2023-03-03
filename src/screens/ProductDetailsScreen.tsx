import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { mainStyles } from '../styles/MainStyles.js'
import { mainColors } from '../styles/MainColorStyle.js'
import TabBarGroup from "../components/tab/TabBarGroup";

function ProductDetailsScreen({ route, navigation }) {
  const { data } = route.params;

    return (
      <View style={[mainColors.mainBackground]}>
        <ImageBackground imageStyle={styles.imageStyle} resizeMode="cover" style={[styles.productImage, mainStyles.mainShadow]} source={{uri: data.imageUrl}}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.75)', 'transparent' ]}
            style={styles.header}
          >
          <View style={styles.profileInfoContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}></Image>
              </TouchableOpacity>
              <View style={styles.profileInfoText}>
                <Text style={styles.profileName}>Jacob Dolleris</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet</Text>
              </View>
          </View>        
          </LinearGradient>
        </ImageBackground>
        <View style={styles.productDetailsContainer}>
          {/* Product name */}
          <Text style={[mainStyles.h2 ]}>{data.name}</Text>
          <View style={styles.productInformation}>
            <View>
              <Text style={styles.infoHeadline}>Pris</Text>
              <Text style={styles.infoValue}>1700 kr.</Text>
            </View>
            <View>
              <Text style={styles.infoHeadline}>Størrelse</Text>
              <Text style={styles.infoValue}>45</Text>
            </View>
            <View>
              <Text style={styles.infoHeadline}>Stand</Text>
              <Text style={styles.infoValue}>Som ny</Text>
            </View>
          </View>
          <TabBarGroup></TabBarGroup>
          <Text style={ styles.productDescription }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores soluta laudantium? Accusantium neque explicabo blanditiis assumenda eius voluptatem aut.</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  productInformation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20
  },
  profileInfoContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoHeadline: {
    fontSize: 12
  },
  infoValue: {
    fontSize: 16
  },
  profileInfoText: {
    marginLeft: 10
  },
  profileName: {
    color: 'white',
    fontWeight: '600'
  },
  description: {
    color: 'white',
    fontSize: 12
  },
  image: {
    width: 37,
    height: 37,
    backgroundColor: 'red',
    borderRadius: 100
  },
  header: {
    width: '100%',
    height: 120,
  },
  productImage: {
    width: '100%',
    height: 350,
    position: 'relative'
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  productDetailsContainer: {
    padding: 20,
    paddingTop: 40,
    height: '100%',
    marginTop: -20
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '300'
  }
});

export default ProductDetailsScreen;