import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as YUP from 'yup'

const App = () => {

  // FORM VALIDATION

  const passwordSchema = YUP.object().shape({
     passwordLength : YUP.number()
        .min(4 , "Password Length Should be Minimum 4  ")
        .min(16 , "Password Lenght Should be Maximum 16")
        .required("Password Lenght is required")
  })


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})