import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { TabBg } from "../svg";
import { colors } from "../utilities/styles/colors";

type Props = BottomTabBarButtonProps & {
  bgColor?: string;
};

export const TabBarButtonComponent: React.FC<Props> = ({
  bgColor,
  ...props
}) => (
  <View style={styles.container}>
    <TabBg color={bgColor} style={styles.background} />
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon name="rocket" style={styles.buttonIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 75,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: colors.primary,
  },
  buttonIcon: {
    fontSize: 16,
    color: "#fff",
  },
});
