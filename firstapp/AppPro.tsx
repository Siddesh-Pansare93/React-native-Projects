import React from 'react'
import {
    Text, 
    View, 
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro() {
    const isDarkMode = useColorScheme() === "dark"
    return (
        <View>
            <Text style={isDarkMode ? styles.lightText : styles.darkText}>
                Hii I am siddesh
            </Text>
        </View>
    )
}


const styles  = StyleSheet.create({
    lightText :  {
        color : "#fff"
    },
    darkText :  {
        color : "#000"
    }
})

export default AppPro