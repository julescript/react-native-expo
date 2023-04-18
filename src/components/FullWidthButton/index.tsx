import { Button, ButtonProps, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

interface FullWidthButtonProps  {
  buttonprops: ButtonProps
}
const FullWidthButton: FC<FullWidthButtonProps> = (props) => {
  return (
    <>
        {/* <Button {...props.buttonprops}/> */}
    <TouchableOpacity  onPress={props.buttonprops.onPress} style={{backgroundColor: "#22ccff", alignItems: "center", justifyContent: "center", padding: 20, margin: 5, width: "90%", borderRadius: 5}}>
      <Text style={{color: "white", fontWeight: "900", textTransform: "uppercase"}}>{props.buttonprops.title}</Text>
    </TouchableOpacity>
    </>
  )
}

export default FullWidthButton