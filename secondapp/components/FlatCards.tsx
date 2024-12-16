import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () : JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card , styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card , styles.cardThree]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card , styles.cardThree]}>
            <Text>Blue</Text>
        </View>
      </View>
    </View>
    
  )
}

export default FlatCards

const styles = StyleSheet.create({
    mainContainer : { 
        padding : 3 , 
        margin : 10
    },
    headingText : {
        fontSize : 24 , 
        color: "lightgrey" , 
        fontWeight : 'bold'
    } , 
    container :  {
        flex : 1  , 
        flexDirection : "row" , 
        padding  : 8
    },
    card : {
        height  : 100, 
        width : "20%" , 
        borderRadius : 6 , 
        flex : 1 ,
        justifyContent : "center" , 
        alignItems : "center" , 
        margin : 4 , 
        padding : 4
    },
    cardOne :  { 
        backgroundColor : "red"
    },
    cardTwo :  { 
        backgroundColor : "green"
    },
    cardThree :  { 
        backgroundColor : "blue"
    },
})