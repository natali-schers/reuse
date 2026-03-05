import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

function Header() {
  const colorScheme = useColorScheme();

  return(
    <View style={{padding: 16, paddingTop: 40, backgroundColor: Colors[colorScheme ?? 'light'].background}}>
      <Image source={require('../../assets/images/icon.png')} style={{ width: 48, height: 48 }} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        header: () => <Header />
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} style={{paddingTop: 4}} />,
        }}
      />
    </Tabs>
  );
}
