import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FoodTypes = () => {
      const types = [
        {
            id:"0",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
            name:"Pizza"
        },
        {
            id:"1",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
            name:"Rolls"
        },
        {
            id:"2",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
            name:"Pasta"
        },
        {
            id:"",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
            name:"Parantha"
        },
        {
            id:"4",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png",
            name:"Tea"
        },
        {
            id:"5",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
            name:"Coffee"
        },
        {
            id:"6",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
            name:"North Indian"
        },
        {
            id:"7",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Lassi.png",
            name:"Lassi"
        },
        
      ]


  return (
    <View style={{}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:100, height:100, borderRadius:30 ,}} />
             
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})