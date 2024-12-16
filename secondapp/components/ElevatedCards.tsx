import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
            <View style={[styles.card]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card]}>
                <Text>Me</Text>
            </View>
            <View style={[styles.card]}>
                <Text>To</Text>
            </View>
            <View style={[styles.card]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card]}>
                <Text>More...</Text>
            </View>
            <View style={[styles.card]}>
                <Text>🙂</Text>
            </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    mainContainer : { 
        padding : 3 , 
        margin : 10
    },
    headingText :  { 
        fontSize : 24 ,  
        fontWeight : "bold" , 
        color  :"lightgrey"
    },
    container : {
        padding : 5
    } , 
    card : {
        height : 100  , 
        width : 100 , 
        backgroundColor : "#a0a0a0" ,
        flex : 1  , 
        justifyContent : "center" , 
        alignItems : "center" , 
        borderRadius : 4 , 
        margin : 3
    } ,
    cardElevated : {
        shadowColor : "red",
        shadowOffset : {
            height : 3 , 
            width : 3
        } , 
        elevation : 4
    }
})