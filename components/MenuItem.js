import { Pressable, StyleSheet, Text, View, Image, ImageBackground, } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 10 }}>
      <Pressable onPress={() => navigation.navigate("Menu", {
        id:item.id,
        name:item.name,
        image:item.image,
        rating:item.rating,
        time:item.time,
        address:item.address,
        cost_for_two:item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu,
      })} style={{ flexDirection: "row", }}>
        
        <View>
          <ImageBackground style={{ aspectRatio: 4 / 5, height: 180 }} imageStyle={{ borderRadius: 8 }} source={{ uri: item.image }}>
            <AntDesign style={{ position: "absolute", top: 10, right: 10 }} name="hearto" size={24} color="white" />
          </ImageBackground>

        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.rating}</Text>
            <Text style={{ marginLeft: 3, }}>-</Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.time}mins</Text>
          </View>
          <Text style={{ fontSize: 17, color: "gray", marginTop: 6 }}>{item.address}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#FFB6C1",
                width: 22,
                marginTop:4,
                height: 22,
                borderRadius: 11,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                ₹
              </Text>
            </View>

            <Text
              style={{
                alignItems:"center",
                marginTop: 4,
                marginLeft: 4,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
         
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{marginLeft:6, fontSize:16}}>FREE DELIVERY</Text>
          </View>
          </View>
          
      </Pressable >
      
    </View >
  );
};

export default MenuItem;

const styles = StyleSheet.create({})