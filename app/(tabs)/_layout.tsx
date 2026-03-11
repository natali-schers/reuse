import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function Header({ backgroundColor }: { backgroundColor: string }) {  
  return(
    <View style={[styles.header, { backgroundColor: backgroundColor }]}>
      <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
    </View> 
  );
}

export default function TabLayout() {
  const color = useThemeColor({ light: '', dark: '' }, 'tint');
  const backgroundColor = useThemeColor({ light: '', dark: '' }, 'background');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color,
        headerShown: true,
        header: () => <Header backgroundColor={color} />,
        tabBarStyle: { backgroundColor: backgroundColor },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={24} style={styles.icon} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    paddingTop: 40,
  },
  logo: {
    width: 48,
    height: 48,
  },
  icon: {
    paddingTop: 4,
  },
});