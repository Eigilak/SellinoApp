import { View, Text, StyleSheet } from "react-native";
import { mainStyles } from '../styles/MainStyles.js'
import { mainColors } from '../styles/MainColorStyle.js'

function SettingsScreen() {
    return (
      <View style={[mainColors.mainBackground, styles.settingsContainer]}>
        <Text style={[mainStyles.h1 ]}>Indstillinger</Text>
      </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  settingsContainer: {
    padding: 20,
    height: '100%'
  }
});