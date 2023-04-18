import { StyleSheet } from 'react-native'

export default StyleSheet.create({
   Scrollview: {
      flex: 1,
      backgroundColor: "yellow",
      // padding: 50,
    },
    Flatlist: {
      flex: 1,
      backgroundColor: "cyan",
      // padding: 50,
    },
    container: {
      flex: 1,
      // height: "100vh",
      flexDirection: "row",
    },
    container1: {
      flex: 1,
      backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
      flex: 1,
      backgroundColor: "magenta",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 16,
      fontWeight: "900",
      textShadowColor: "#000",
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 10,
      textShadowOpacity: 0.1,
    },
    text2: {
      fontSize: 36,
      fontWeight: "900",
    },
})