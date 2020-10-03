import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';

const Status = {
  feito: '#1 Seu pedido foi feito',
  aceito: '#2 Seu pedido está sendo preparado',
  enviado: '#3 Saiu para entrega',
  entregue: '#4 Pedido entregue com sucesso',
} as const;

const App: React.FC = () => {
  const [orderStatus, setOrderStatus] = useState(Status.feito);

  const handlerNotifOpen = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  ): void => {
    if (remoteMessage) {
      setOrderStatus(Status[remoteMessage.data?.newStatus]);
    }
  };

  useEffect(() => {
    // Permissão para a notificação: (1,-1)
    const requestNotifPermission = async () => {
      const authStatus = await messaging().requestPermission();
      console.log('Permissão:', authStatus);
    };
    requestNotifPermission();

    // Token do dispositivo
    messaging()
      .getToken()
      .then((token) => console.log('Token do dispositivo:', token));

    // Recebendo notificação com app aberto
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('Recebido no FOREGROUND', remoteMessage);

      if (remoteMessage.data?.newStatus) {
        setOrderStatus(Status[remoteMessage.data?.newStatus]);
      }
    });

    // Evento de click na notificação em BACKGROUND
    messaging().onNotificationOpenedApp(handlerNotifOpen);

    // Evento de click na notificação no app totalmente fechado
    messaging().getInitialNotification().then(handlerNotifOpen);

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.orderTitle}>Pedido #123456789</Text>
      <Text>Status:</Text>
      <Text style={styles.orderStatusText}>{orderStatus}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  orderStatusText: {
    fontSize: 17,
  },
});

export default App;
