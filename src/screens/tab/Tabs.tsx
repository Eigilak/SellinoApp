import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faSearch, faStore } from '@fortawesome/free-solid-svg-icons';
import ProfileStackScreen from './ProfileStackScreen';
import ExploreScreen from '../ExploreScreen';

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator 
            activeColor="white"
            inactiveColor="#506791"
            barStyle={{ backgroundColor: '#212c40' }}
        >
            <Tab.Screen 
                name="Forside" 
                component={ HomeStackScreen }
                options={{
                    tabBarColor: 'white',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon style={{marginTop: 3}} icon={faHome} color={ focused ? "white" : "#506791"}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Explore" 
                component={ ExploreScreen } 
                options={{
                    tabBarColor: 'white',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon style={{marginTop: 3}} icon={faSearch} color={ focused ? "white" : "#506791"}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ ProfileStackScreen } 
                options={{
                    tabBarColor: 'white',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesomeIcon style={{marginTop: 3}} icon={faStore} color={ focused ? "white" : "#506791"}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;