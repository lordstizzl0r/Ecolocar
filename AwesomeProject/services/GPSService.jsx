import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export default class GPSService {
   watchId = null;

  async checkLocationPermission() {
    if (Platform.OS === 'ios') {
      const permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      const checkResult = await check(permission);

      if (checkResult === RESULTS.DENIED) {
        const requestResult = await request(permission);
        return requestResult === RESULTS.GRANTED;
      }

      return checkResult === RESULTS.GRANTED;
    } else {
      return true;
    }
  }

    startWatchingLocation(onLocationUpdate) {
        if (this.watchId) {
            return;
        }

        Geolocation.getCurrentPosition(
            (position) => {
                onLocationUpdate(position);
                },
            (error) => console.log('Error getting current location:', error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );

        this.watchId = Geolocation.watchPosition(
            (position) => {
                onLocationUpdate(position);
                },
            (error) => console.log('Error watching location:', error),
            { enableHighAccuracy: true, distanceFilter: 10, interval: 5000 }
            );
    }

    stopWatchingLocation() {
        if (this.watchId) {
            Geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }
}