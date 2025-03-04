import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackparamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackparamList,'Home'>
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title='got to details' 
      // onPress={()=>navigation.navigate("Details",{productId:'55'})}
      onPress={()=> navigation.push('Details',{productId:'55'})}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})