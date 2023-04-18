import { SafeAreaView, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import FullWidthButton from '../../components/FullWidthButton'
import { useNavigation } from '@react-navigation/native'

interface Screen2Props  {}

const Screen2: FC<Screen2Props> = (props) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen 2</Text>
      <FullWidthButton buttonprops={{
        title: "go to screen 3",
        onPress: () => navigation.navigate("Screen 3")
      }}/>
       <FullWidthButton buttonprops={{
        title: "go to screen 4",
        onPress: () => navigation.navigate("Screen 4")
      }}/>
    </SafeAreaView>
  )
}

export default Screen2