import { createStackNavigator } from "@react-navigation/stack";
import Screen4 from "../screens/screen4";
import TabStack from "./TabStack";


const AppStack = () => {
   const Stack = createStackNavigator()
  return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Tabs" component={TabStack} />
        <Stack.Screen name="Screen 4" component={Screen4} />
      </Stack.Navigator>
  );
};

export default AppStack
