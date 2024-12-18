import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (

        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>What's new JavaScript 21 - ES21</Text>
                </View>
                <View>
                    <Image
                        source={{
                            uri: "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=400"
                        }}
                        style={styles.cardImage}
                    />
                </View>

                <View style={styles.cardDescription }>
                    <Text numberOfLines={3} style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, molestiae soluta. Nobis dicta pariatur unde quia! Dignissimos, magnam autem. Nulla aspernatur libero repellendus blanditiis dolore temporibus dolorum cumque ipsum? Aspernatur.
                    </Text>
                </View>
                <View style={styles.cardFooter}>
                    <TouchableOpacity onPress={() => openWebsite("https://github.com/Siddesh-Pansare93")}>
                        <Text style={styles.socialLinks} >Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite("https://github.com/Siddesh-Pansare93")}>
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        padding: 3
    },
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "lightgrey"
    },
    card: {
        backgroundColor: "#FF4848",
        height: 360,
        margin: 10,
        padding : 5 ,
        borderRadius: 5

    },
    cardHeader : {
        height : 40 , 
        flexDirection : "row" , 
        justifyContent : "center" ,
        alignItems : "center" , 
        backgroundColor : "white" , 
        marginBottom : 5 , 
        borderRadius : 5
    },
    cardTitle: {
        fontSize  :15 , 
        fontWeight : "bold",
    },
    cardImage: {
        height: 180,
        borderRadius : 5
    },
    cardDescription: {
        color : "#111" ,
        fontSize : 13 ,  
        marginVertical : 5 , 
        padding :5 , 
        fontWeight : 400 , 
        flexShrink : 1 , 

    },
    cardFooter: {
        flexDirection : "row" , 
        // backgroundColor: "white" ,
        // padding : 8,
        justifyContent : "space-evenly"

    },
    socialLinks : {
        backgroundColor : "cyan" , 
        paddingHorizontal: 7 , 
        paddingVertical : 5 , 
        borderRadius : 6 ,
        elevation : 2 , 
        // shadowColor : "black"  
    }
})