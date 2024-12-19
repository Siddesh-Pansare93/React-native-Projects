import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {useState} from 'react'

const App = () => {

  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const generateRandomColor = ()=>{

    let randomColor = "#"

    const hexValues = "ABCDEF1234567890"

    for (let i = 0; i < 6 ; i++) {
      randomColor += hexValues[Math.floor(Math.random() * 16)]
    }

    setRandomBackground(randomColor)
  }

  return (

    <>
      <StatusBar backgroundColor="lightblue" />
      <View style={[styles.container , {backgroundColor : randomBackground}]}>
        <TouchableOpacity onPress={generateRandomColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Click Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    justifyContent : "center" , 
    alignItems: "center"
  }, 
  
  actionBtn : {
    // height : 20  ,
    // width : 40 , 
    backgroundColor : "lightgreen" , 
    padding : 8 , 
    borderRadius : 6

  }, 
  actionBtnText : {
    fontSize : 20 , 
    fontWeight : "bold"
  }
})