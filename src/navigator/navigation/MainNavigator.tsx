import React from "react";
import { StyleSheet, View } from "react-native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { TabBarButtonComponent } from "../../components/TabBarButtonComponent";
import { HomeScreen } from "../../screens/Home";
import { IS_IPHONE_X } from "../../utilities/styles";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => (
      <View style={styles.navigatorContainer}>
        <BottomTabBar {...props} />
      </View>
    )}
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        ...styles.navigator,
      },
      tabBarItemStyle: {
        backgroundColor: "#fff",
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="user" size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="Rocket"
      component={HomeScreen}
      options={{
        tabBarButton: (props) => (
          <TabBarButtonComponent bgColor={"#fff"} {...props} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="wechat" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="gear" size={24} color={color} />,
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 30,
  },
});
