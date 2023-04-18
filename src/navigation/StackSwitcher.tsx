import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import OnboardingStack from "./OnboardingStack";
import TabStack from "./TabStack";
import { useSelector } from "react-redux";

const StackSwitcher = () => {
   const authSlice = useSelector((state) => state.auth)
   return (
      <NavigationContainer>
      {authSlice.isloggedin ? <AppStack /> : <OnboardingStack />}
      </NavigationContainer>
   );
};

export default StackSwitcher;
