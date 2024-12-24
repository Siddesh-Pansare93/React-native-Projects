import { StyleSheet, Text, View  } from 'react-native'
import React, { PropsWithChildren } from 'react';

type buttonProps = PropsWithChildren<{
  name : String , 
  flag : String
}>
const CurrencyButton = (props : buttonProps) : JSX.Element => {

  return (
    <View style = {styles.container}>
      <Text>{props.flag}</Text>
      <Text>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag : {
    fontSize : 20 , 
    color : "#FFFFFF" , 
    marginBottom : 4
  } , 
  name : {
    fontSize : 20 ,
    color : "#000000"
  }
})