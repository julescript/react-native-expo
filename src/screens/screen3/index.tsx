import { SafeAreaView, Text } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import FullWidthButton from "../../components/FullWidthButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

interface Screen3Props {}

const Screen3: FC<Screen3Props> = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen 3</Text>
      <FullWidthButton
        buttonprops={{
          title: "go to screen 4",
          onPress: () => navigation.navigate("Screen 4"),
        }}
      />
      <FullWidthButton
        buttonprops={{
          title: "go back",
          onPress: () => navigation.goBack(),
        }}
      />
      <FullWidthButton
        buttonprops={{
          title: "LOGOUT",
          onPress: () => {
            dispatch(logout());
          },
        }}
      />
    </SafeAreaView>
  );
};

export default Screen3;
