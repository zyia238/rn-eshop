import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyHeaderButtons from "./components/HeaderButton.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Overview from "./screens/Overview.screen";
import Detail from "./screens/Detail.screen";
import Cart from "./screens/Cart.screen";
import Order from "./screens/Order.screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="overview">
      <Drawer.Screen
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
      <Drawer.Screen name="order" component={Order}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="d">
          <Stack.Screen
            name="d"
            component={Home}
            options={{
              headerShown: false,
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
