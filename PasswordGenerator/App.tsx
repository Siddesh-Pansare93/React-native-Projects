import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

// FORM VALIDATION
import * as YUP from 'yup'
import { Formik } from 'formik'


const passwordSchema = YUP.object().shape({
  passwordLength: YUP.number()
    .min(4, "Password Length Should be Minimum 4  ")
    .max(16, "Password Lenght Should be Maximum 16")
    .required("Password Lenght is required")
})




const App = () => {

  const [password, setPassword] = useState("")
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [uppercase, setUpperCase] = useState(false)
  const [lowercase, setLowerCase] = useState(true)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)



  const generatePasswordString = (passwordLength: number) => {
    let characters = ""

    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (numbers) {
      characters += '1234567890'
    }
    if (symbols) {
      characters += '!@#$%^&*()_+'
    }

    const createdPassword = createPassword(characters, passwordLength)
    setIsPassGenerated(true)
    setPassword(createdPassword)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let password = ""
    console.log(characters)
    for (let i = 0; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * characters.length)
      password += characters[char]
    }

    return password
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }


  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.heaadingText}>PASSWORD GENERATOR</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => (
              // console.log(values),
              generatePasswordString(+values.passwordLength)        // yaha pe '+' Number() vala kaam kar raha hai conversion 
            )}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleReset
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.inputLabel}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength &&
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    }
                  </View>

                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    keyboardType='numeric'
                    placeholder='Ex.8'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>Include UpperCase Letters</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={uppercase}
                      onPress={() => setUpperCase(!uppercase)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>Include LowerCase Letters</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={lowercase}
                      onPress={() => setLowerCase(!lowercase)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>Include Numbers Letters</Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.inputLabel}>Include Symbols </Text>
                  <View>
                    <BouncyCheckbox
                      useBuiltInState={false}
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                </View>

                <View style={styles.formControls}>
                  <TouchableOpacity style={styles.primaryBtn}>
                    <Text
                      onPress={() => handleSubmit()}
                      style={styles.BtnText}>
                      Generate password
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.secondaryBtn}>
                    <Text
                      onPress={
                        () => {
                          // handleReset();
                          resetPasswordState()
                        }
                      }
                      style={styles.BtnText}>
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>

              </>
            )}
          </Formik>
        </View>

        <View>
          {isPassGenerated ?
            (
            <View style={[styles.card  , styles.cardElevated]}>
              <Text style={styles.subTitle}>Result</Text>
              <Text style={styles.description}>Longpress To copy</Text>
              <Text selectable style={styles.generatedPassword}> {password}</Text>
            </View> 
          ): null}
        </View>


      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 20,
    flex: 1
  },
  formContainer: {
    margin: 8,
    padding: 8
  },
  heaadingText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15

  },
  errorText: {
    color: "red",
  },

  inputStyle: {
    padding: 5,
    width: "30%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    fontWeight: "semibold",
    color: "white"

  },
  inputColumn: {
    flexDirection: "column"
  },
  inputLabel: {
    color: "white"
  },
  formControls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
    margin: 8

  },
  primaryBtn: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 5
  },
  secondaryBtn: {
    backgroundColor: "lightgreen",
    padding: 8,
    borderRadius: 5
  },
  BtnText: {
    // color: "white"
  },

  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },

  

})