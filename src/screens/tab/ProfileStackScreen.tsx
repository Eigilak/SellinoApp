import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../ProfileScreen';

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          headerTitle: 'Hjem',
          headerStyle: {
            backgroundColor: '#0d78bf'
          },
          headerTransparent: false,
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerShown: false
          }}      
          />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;