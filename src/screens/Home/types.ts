import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../navigator";

type HomeScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "HomeScreen"
>;

type HomeScreenRouteProp = RouteProp<MainStackParamList, "HomeScreen">;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};