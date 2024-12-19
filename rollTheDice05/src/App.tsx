import { StyleSheet, Text, View ,Image , ImageSourcePropType, Pressable} from 'react-native'
import React,{PropsWithChildren ,useState} from 'react'


//Importing Dice Images 

import DiceOne from '../assests/One.png'
import DiceTwo from '../assests/Two.png'
import DiceThree from '../assests/Three.png'
import DiceFour from '../assests/Four.png'
import DiceFive from '../assests/Five.png'
import DiceSix from '../assests/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl} : DiceProps) : JSX.Element=>{

  return(
    <View>
      <Image style = {styles.diceImage} source = {imageUrl} />
    </View>
  )
}

const App = () => {

  const [diceImage ,  setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rolltheDice = ()=>{
    const randomNumber  = Math.floor(Math.random() *6 ) + 1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} /> 
      <Pressable onPress={rolltheDice}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
     
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})