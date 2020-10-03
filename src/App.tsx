import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import messaging from '@react-native-firebase/messaging';

const App: React.FC = () => {
  useEffect(() => {
    const requestNotifPermission = async () => {
      const authStatus = await messaging().requestPermission();
      console.log('Permissão:', authStatus);
    };

    requestNotifPermission();
  }, []);
  return (
    <SafeAreaView>
      <Text>Olá</Text>
    </SafeAreaView>
  );
};

export default App;
