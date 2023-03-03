import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from '../styles/MainStyles.js'
import { mainColors } from '../styles/MainColorStyle.js'

function ProfileScreen() {
    return (
      <SafeAreaView style={[mainColors.mainBackground, styles.settingsContainer]}>
        <Text style={[mainStyles.h1 ]}>Profil</Text>
      </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    padding: 20,
    height: '100%'
  }
});