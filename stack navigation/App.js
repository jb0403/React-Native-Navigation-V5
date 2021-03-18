import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 15 }}>
              <Button
                onPress={() => setCount((preVal) => preVal + 1)}
                title="Count +"
              />
            </View>
            <View style={{ marginRight: 15 }}>
              <Button
                onPress={() => setCount((preVal) => preVal - 1)}
                title="Count -"
              />
            </View>
          </View>
        );
      },
    });
  }, [navigation, setCount]);

  let data = {
    name: "Jayesh Bambhaniya",
    email: "jayesh@bambhaniya.com",
    address: "mahuva",
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text style={{ fontSize: 25 }}>{count}</Text>
      <Button
        title="Go To About Screen"
        onPress={() => navigation.push("About", data)}
      />
    </View>
  );
}
function AboutScreen({ route, navigation }) {
  // console.warn(route.params);
  let data = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>About Screen</Text>
      <Text style={{ fontSize: 25 }}>{data.name}</Text>
      <Text style={{ fontSize: 25 }}>{data.email}</Text>
      <Text style={{ fontSize: 25 }}>{data.address}</Text>

      <Button
        title="Custom About Title"
        onPress={() =>
          navigation.setOptions({
            title: "Custom About Title",
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#bbb",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "900",
            fontSize: 30,
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.name,
          })}
          name="About"
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
