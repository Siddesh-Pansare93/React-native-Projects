import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const ChatList = () => {


  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>ChatList</Text>

      <ScrollView style={styles.chatList}>
        {contacts.map((contact) => (
          <View key={contact.uid} style={styles.userCard}>
            <Image
              style={styles.userImage}
              source={{
                uri: contact.imageUrl
              }} />
            <View style={styles.userDetails}>
              <Text style={styles.username}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
  mainContainer: {
    padding :8 , 
    margin : 8
  },
  headingText: {
    fontSize : 24 , 
    fontWeight : "bold" , 
    color : "lightgrey",
    marginBottom : 6
  },
  chatList: {
    marginTop : 6
  },
  userCard : {
    backgroundColor : "white" , 
    flexDirection : "row",
    marginBottom : 6 ,
    borderTopLeftRadius : 30,
    borderBottomLeftRadius : 30,
    borderRadius : 8


  },
  userImage : {
    height : 60 , 
    width :60 , 
    borderRadius : 30
  } ,

  userDetails : {
    // backgroundColor : "red",
    justifyContent : "center",
    marginLeft : 10
  },
  username : {
    fontSize : 15
  } , 

  userStatus : {
    fontSize : 14
  }




})