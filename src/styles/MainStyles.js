import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    h1: {
        fontSize: 22,
        fontWeight: 600,
        color: '#000000'
    },
    h2: {
        fontSize: 20,
        fontWeight: 600,
        color: '#000000'
    },

// shadow
    mainShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 6,  
        elevation: 5
      },
});

export { mainStyles };