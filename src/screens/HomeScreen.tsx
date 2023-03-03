import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from 'react-native-linear-gradient'
import ProductGroupHorizontal from "../components/product/ProductGroupHorizontal";
import { mainColors } from '../styles/MainColorStyle.js'
import ProductGroupGrid from "../components/product/ProductGroupGrid";
import Spacing from "../components/generic/Spacing";
function HomeScreen({ navigation }) {

  return (
        <ScrollView style={[mainColors.mainBackground, styles.pageContainer]}>
            <LinearGradient
              colors={['#2a3d5e', '#166091' ]}
              style={styles.header}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <SafeAreaView>
                <View style={styles.greetingContainer}>
                  <Text style={styles.greeting}>Velkommen tilbage, Frederik!</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                  <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}></Image>
                  </TouchableOpacity>
                </View>
                <ProductGroupHorizontal 
                  headline="Nyt fra dem, du følger"
                  headlineColor="#FFFFFF"
                >
                </ProductGroupHorizontal>
              </SafeAreaView>
            </LinearGradient>
            <Spacing value={15}></Spacing>
              <ProductGroupGrid
                  headline="Set for nylig"
              >

              </ProductGroupGrid>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%'
  },
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  greetingContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 36,
    height: 36,
    backgroundColor: 'red',
    borderRadius: 100
  },
  greeting: {
    color: 'white', 
    fontSize: 18
  }
});