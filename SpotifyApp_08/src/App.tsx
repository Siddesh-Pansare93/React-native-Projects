import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React , {useState  , useEffect } from 'react'
import { AddTracks, setupPlayer } from '../musicService'

const App = () => {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const setUp = async ()=>{
      let isSetup = await setupPlayer()

      if(isSetup){
        await AddTracks()
        setIsPlayerReady(true)
      }
  }

  useEffect(() => {
   setUp()
  }, [])


  if(!isPlayerReady){
    return (  
      <ActivityIndicator/>
    )
  }
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})