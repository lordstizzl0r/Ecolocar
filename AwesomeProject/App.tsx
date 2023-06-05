import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/dashboardscreen';
import Mapscreen from './screens/mapscreen';
import SettingsScreen from './screens/settingsscreen';
import HomeScreen from './screens/homescreen';
import {NavigationContainer} from '@react-navigation/native';
import GPSService from './services/GPSService';
const Tab = createBottomTabNavigator();
import React, {useEffect} from 'react';
const App = () => {
  useEffect(() => {
    const gpsService = new GPSService();

    const handleLocationUpdate = (position) => {
      console.log('New location:', position.coords);
      // Hier kannst du den Standort aktualisieren oder andere Aktionen ausführen
    };

    const startGPSService = async () => {
      const hasPermission = await gpsService.checkLocationPermission();
      if (hasPermission) {
        gpsService.startWatchingLocation(handleLocationUpdate);
      } else {
        console.log('Location permission denied.');
      }
    };

    startGPSService();

    // Aufräumen beim Entladen der Komponente
    return () => {
      gpsService.stopWatchingLocation();
    };
    }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="MapScreen" component={Mapscreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
