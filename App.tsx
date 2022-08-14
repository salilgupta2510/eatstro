import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/navigator/navigation/MainNavigator";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import { NativeBaseProvider} from 'native-base';

const queryClient = new QueryClient();

const App = () => {
  let [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/DMSans-Regular.ttf"),
    medium: require("./assets/fonts/DMSans-Medium.ttf"),
    bold: require("./assets/fonts/DMSans-Bold.ttf"),
    abel_regular: require('./assets/fonts/Abel-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
