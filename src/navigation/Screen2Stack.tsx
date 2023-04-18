import { createStackNavigator } from "@react-navigation/stack";
import Screen2 from "../screens/screen2";
import Screen4 from "../screens/screen4";

const Screen2Stack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen 2" component={Screen2} />
      <Stack.Screen name="Screen 4" component={Screen4} />
    </Stack.Navigator>
  );
};

export default Screen2Stack;
