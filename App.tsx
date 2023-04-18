import { StatusBar } from "expo-status-bar";
import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import HomeScreen from "./src/screens/home";
import OnboardingStack from "./src/navigation/OnboardingStack";
import TabStack from "./src/navigation/TabStack";
import StackSwitcher from "./src/navigation/StackSwitcher";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);

  useEffect(() => {
    // will run on every render
  });

  useEffect(() => {
    // will run only once, on mount
  }, []);

  useEffect(() => {
    // will run on count change
  }, [flag2]);

  useEffect(() => {
    // will run on count OR flag change
  }, [flag2, flag]);

  return (
    // <HomeScreen />
    <Provider store={store}>
      <StackSwitcher />
    </Provider>
  );
}

const styles = StyleSheet.create({});
