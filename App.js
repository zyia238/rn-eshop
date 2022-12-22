import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyHeaderButtons from "./components/HeaderButton.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Overview from "./screens/Overview.screen";
import Detail from "./screens/Detail.screen";
import Cart from "./screens/Cart.screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="overview">
          <Stack.Screen
            name="overview"
            component={Overview}
            options={({ navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <HeaderButtons HeaderButtonComponent={MyHeaderButtons}>
                      <Item
                        title="cart"
                        iconName="ios-cart"
                        onPress={() => navigation.navigate("cart")}
                      />
                    </HeaderButtons>
                  );
                },
              };
            }}
          />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
