import { SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'

interface Screen4Props  {}

const SignupScreen: FC<Screen4Props> = (props) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text>Signup</Text>
      <FullWidthButton buttonprops={{
        title: "Go back",
        onPress: () => navigation.goBack()
      }}/>
    </SafeAreaView>
  )
}

export default SignupScreen