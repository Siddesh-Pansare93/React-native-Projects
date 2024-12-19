import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ChatList from './components/ChatList'

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          
          <FlatCards/>
          <ElevatedCards/>
          <FancyCards/>
          <ActionCard/>
          <ChatList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App