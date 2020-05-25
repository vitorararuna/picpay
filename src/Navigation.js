import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* navegador da guia inferior */
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import NotificationsScreen from './screens/Notifications';
import SettingsScreen from './screens/Settings';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator

      //rota que é aberta qssim que o aplicativo é iniciado
      initialRouteName="Home"

      //screenOptions retorna um função e dessa função vamos retornar um objeto e propriedades como a "tabBarIcon" por exemplo. Obs.: temos uma serie de parâmetros, mas desestruturei e peguei o route
      //basicamente estou percorrendo tab por tab e jogando as propriedades pra dentro desse route
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => { //focused: indica se a tela que ele estpá iterando no momento está ative
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#fff', //quando a Tab estiver ativa
        inactiveTintColor: '#929292', //quando a Tab estiver inativa
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
