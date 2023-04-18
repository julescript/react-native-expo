import { SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

interface Screen4Props  {}

const LoginScreen: FC<Screen4Props> = (props) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <FullWidthButton buttonprops={{
        title: "SignupScreen",
        onPress: () => navigation.navigate("SignupScreen")
      }}/>
        <FullWidthButton buttonprops={{
        title: "LOGIN",
        onPress: () => {
          // api login
          // wait for a respponse
          // 200 => dispatch(login())
          dispatch(login())
        }
      }}/>
    </SafeAreaView>
  )
}

export default LoginScreen