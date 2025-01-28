import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Pressable} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import Ionicons from '@expo/vector-icons/Ionicons';
import hotels from '../data/hotels';
import MenuItem from '../components/MenuItem';

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={{paddingTop:20, marginTop:10}} showsVerticalScrollIndicator={false}> 
        {/* Search Bar */}
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderWidth:1, margin:10,padding:4, borderColor:"#C0C0C0", borderRadius:7}}>
            <TextInput placeholder='Search for Restaurants, items or more'/>
            <AntDesign name="search1" size={24} color="#E52B50" />
        </View>

       {/* Carousel Slide */}
      <Carousel/>

       {/* Food Items Slide */}
      <FoodTypes/>
      
       {/* Quick food component */}
       <QuickFood/>
       
       {/* Filter buttons */}
       <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
       <Pressable style={{marginHorizontal:10, flexDirection:"row",alignItems:"center",borderWidth:1, borderRadius:20, borderColor:"#DODODO", padding:10, justifyContent:"center", width:100 }}>
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
       </Pressable>

       <Pressable style={{marginHorizontal:10, flexDirection:"row",alignItems:"center",borderWidth:1, borderRadius:20, borderColor:"#DODODO", padding:10, justifyContent:"center",}}>
        <Text>Sort By Rating</Text>
        
       </Pressable>

       <Pressable style={{marginHorizontal:10, flexDirection:"row",alignItems:"center",borderWidth:1, borderRadius:20, borderColor:"#DODODO", padding:10, justifyContent:"center"}}>
        <Text>Sort By Price</Text>
        
       </Pressable>
       </View>
       {data.map((item, index) =>(
        <MenuItem key={index} item={item}/>
       ))}
    </ScrollView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({})