import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackparamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DetailsProps = NativeStackScreenProps<RootStackparamList,'Details'>
const Details = ({route}:DetailsProps) => {

  const {productId} = route.params;
  const navigation = useNavigation< NativeStackNavigationProp<RootStackparamList>>()
  return (
    <View style={styles.container}>
      <Text>Details: {productId}</Text>
      <Button 
      title='go to home'
      onPress={()=>navigation.navigate('Home')}

      //goated navigation library
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})