import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import quickfood from '../data/quickfood'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const QuickFood = () => {
    const data = quickfood;
    return (
        <View style={{ margin: 10 }} >
            <Text style={{ fontSize: 20, fontWeight: "800" }}>Get it Quickly</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, index) => (
                    <Pressable style={{ margin: 10, }} key={index}>
                        <ImageBackground imageStyle={{ borderRadius: 6 }}
                            style={{ aspectRatio: 5 / 6, hieght: 170, width: 180 }} source={{ uri: item.image }}>
                            <Text style={{ position: "absolute", bottom: 10, left: 10, fontSize: 30, fontWeight: "900", color: "white" }}>{item.offer}OFF</Text>
                        </ImageBackground>
                        <Text style={{ marginTop: 10, fontSize: 17, fontWeight: "600" }}>{item.name}</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:3}}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.rating}</Text>
                            <Text style={{ marginLeft: 3,   }}>-</Text>
                            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}>{item.time}mins</Text>
                        </View>
                    </Pressable>

                ))}
            </ScrollView>
        </View>
    )
}

export default QuickFood

const styles = StyleSheet.create({})