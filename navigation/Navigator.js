import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Members from "../packages/layout/memberList";
import PostList from "../packages/ui/postList";
import Icon from "react-native-vector-icons/MaterialIcons";
import S from "../styles";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      tabBarLabelStyle: S.tabBarLabelStyle,
      headerStyle: S.headerStyle,
      headerTintColor: S.headerTintColor,
      headerTitleAlign: S.headerTitleAlign,
    }}
  >
    <BottomTab.Screen
      name="Members"
      component={Members}
      options={{
        title: "Colaboradores",
        tabBarIcon: () => (
          <Ionicons name="person-outline" size={24} color="black" />
        ),
        headerStyle: {
          backgroundColor: "#0320fc",
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff',
      }}
    />
    <BottomTab.Screen
      name="PostList"
      component={PostList}
      options={{
        title: "Posts",
        tabBarIcon: () => (
          <Ionicons name="book-outline" size={24} color="black" />
        ),
        headerStyle: {
          backgroundColor: "#0320fc",
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff',
      }}
    />
  </BottomTab.Navigator>
);

const TopTabNavigator = () => (
  <TopTab.Navigator
    screenOptions={{
      tabBarLabelStyle: S.tabBarLabelStyle,
    }}
  >
    <TopTab.Screen
      name="Members"
      component={Members}
      options={{
        title: "Colaboradores",
        tabBarIcon: () => (
          <Icon name="people" size={26} />
        ),
      }}
    />
    <TopTab.Screen
      name="PostList"
      component={PostList}
      options={{
        title: "Posts",
        tabBarIcon: () => (
          <Icon name="message" size={26} />
        ),
      }}
    />
  </TopTab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {Platform.OS === "web" ? <TopTabNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
