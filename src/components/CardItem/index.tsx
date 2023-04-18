import { Text, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'


interface CardItemProps {
  id: string
}

const CardItem: FC<CardItemProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color: "white", fontWeight: "900"}}>CardItem {props.id}</Text>
    </View>
  )
}

export default CardItem