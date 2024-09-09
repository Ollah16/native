import { Tabs } from 'expo-router';
import React from 'react';

import { ActivityIcon, BookmarkIcon, DiscoverIcon, HomeIcon, ProfileIcon } from '../../constants/icons';
import TabBarIcon from '../../components/navigation/TabBarIcon';

export default function TabLayout() {

  return (

    < Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#686869",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 80,
        },
      }
      }>

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<HomeIcon color={color} />}
              name='Home'
              focused={focused}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: true,
          title: 'Discover',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<DiscoverIcon color={color} />}
              name='Discover'
              focused={focused}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerShown: true,
          title: 'Activity',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<ActivityIcon color={color} />}
              name='Activity'
              focused={focused}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown: true,
          title: 'Bookmarks',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<BookmarkIcon color={color} />}
              name='Bookmark'
              focused={focused}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          title: 'Profile',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              icon={<ProfileIcon color={color} />}
              name='Profile'
              focused={focused}
              color={color} />
          ),
        }}
      />
    </Tabs >
  );
}
