import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyHeaderButtons from "./components/HeaderButton.component";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { store } from "./store/store";
import { Provider } from "react-redux";

import Overview from "./screens/Overview.screen";
import Detail from "./screens/Detail.screen";
import Cart from "./screens/Cart.screen";
import Order from "./screens/Order.screen";
import Admin from "./screens/Admin.screen";
import Edit from "./screens/Edit.screen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator initialRouteName="overview">
      <Drawer.Screen
        name="Overview"
        component={Overview}
        options={({ navigation }) => {
          return {
            headerRight: () => {
              return (
                <HeaderButtons HeaderButtonComponent={MyHeaderButtons}>
                  <Item
                    title="cart"
                    iconName="ios-cart"
                    onPress={() => navigation.navigate("Cart")}
                  />
                </HeaderButtons>
              );
            },
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          };
        }}
      />
      <Drawer.Screen
        name="Order"
        component={Order}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Ionicons
              name="md-list"
              size={size}
              color={focused ? "#7cc" : "#ccc"}
            />
          ),
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Admin"
        component={Admin}
        options={({ navigation }) => {
          return {
            headerRight: () => {
              return (
                <HeaderButtons HeaderButtonComponent={MyHeaderButtons}>
                  <Item
                    title="submit"
                    iconName="ios-add"
                    onPress={() => {
                      navigation.navigate("Edit");
                    }}
                  />
                </HeaderButtons>
              );
            },
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="user"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          };
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="d">
          <Stack.Screen
            name="FOO"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={({ navigation, route }) => {
              return {
                headerRight: () => {
                  return (
                    <HeaderButtons HeaderButtonComponent={MyHeaderButtons}>
                      <Item
                        title="submit"
                        iconName="ios-checkmark"
                        onPress={() => {
                          console.log(route);
                        }}
                      />
                    </HeaderButtons>
                  );
                },
              };
            }}
          />
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
