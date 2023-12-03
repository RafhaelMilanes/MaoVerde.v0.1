import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import "react-native-gesture-handler";

import AuthProvider from "./src/contexts/auth";
import FormProvider from "./src/contexts/form";
import CardProvider from "./src/contexts/card";
import ProjetProvider from "./src/contexts/projet";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CardProvider>
          <ProjetProvider>
            <FormProvider>
              <StatusBar style="light" />
              <Routes />
            </FormProvider>
          </ProjetProvider>
        </CardProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
