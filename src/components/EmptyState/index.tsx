import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'
import FullWidthButton from '../FullWidthButton'

interface EmptyStateProps  {
   title?: string,
   description?: string,
   action?: {
      title: string,
      onPress: () => void
   }
 }
 const EmptyState: FC<EmptyStateProps> = (props) => {
  return (
    <View style={styles.container}>
      {!!props.title ? <Text>{props.title}</Text> : null}
      {!!props.description ? <Text>{props.description}</Text> : null}
      {!!props.action?.title ? (
         <FullWidthButton buttonprops={{
            title: props.action.title,
            onPress: props.action.onPress
         }}/>
      ) : null}
    </View>
  )
}

export default EmptyState