import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "../components/CustomDrawer";
import HomeScreen from "../screens/home";
import OnboardingStack from "./OnboardingStack";

export function DrawerStack() {
  const Drawer = createDrawerNavigator();

  return (
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={CustomDrawer} 
        // drawerContentOptions={{
        //   activeTintColor: '#000000',
        //   activeBackgroundColor: '#e6e6e6',
        // }}
        // drawerType='slide'
        // edgeWidth={0}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Settings" component={OnboardingStack}/>
      </Drawer.Navigator>
  );

}
