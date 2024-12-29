import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { PropsWithChildren } from 'react'


type iconProps  = PropsWithChildren<{
    name: string
}>
const icon = ({name}: iconProps)  => {


    switch (name) {
        case 'circe':
            return <FontAwesome6 name="circle" size={38} color="#F7CD2E" iconStyle="solid" />
            
            break;
        case 'cross':
            return <FontAwesome6 name="cross" size={38} color="#38CC77" iconStyle="solid" />
            break;
    
        default:
            return <FontAwesome6 name="pencil" size={38} iconStyle="solid" color="#0D0D0D"/>
            break;
    }
}

export default icon
