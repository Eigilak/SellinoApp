import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../ExploreScreen';

const ExploreStack = createNativeStackNavigator();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ 
          headerTitle: 'Hjem',
          headerStyle: {
            backgroundColor: '#0d78bf'
          },
          headerTransparent: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerShown: true
          }}      
          />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackScreen;