import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/dashboardscreen';
import Mapscreen from './screens/mapscreen';
import SettingsScreen from './screens/settingsscreen';
import HomeScreen from './screens/homescreen';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import React from 'react';
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="MapScreen" component={Mapscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
