import { SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'

interface Screen4Props  {}

const Screen4: FC<Screen4Props> = (props) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen 4</Text>
      {/* <FullWidthButton buttonprops={{
        title: "go to Home",
        onPress: () => navigation.navigate("Home")
      }}/>
         <FullWidthButton buttonprops={{
        title: "go back",
        onPress: () => navigation.goBack()
      }}/> */}
    </SafeAreaView>
  )
}

export default Screen4