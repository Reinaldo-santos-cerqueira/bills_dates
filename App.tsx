export type RootStackParamList = {
  PreLogin: undefined;
  Login: undefined;
};

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/login";
import PreLogin from "./src/pre-login";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
        
          name="PreLogin"
          component = {PreLogin}
          options={{ headerShown: false }}

        />

        <Stack.Screen
        
          name="Login"
          component = {Login}
          options={{ headerShown: false }}
          
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

