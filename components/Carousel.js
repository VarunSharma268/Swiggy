import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://carousels-ads.swiggy.com/images/slider/2.jpg",
        "https://carousels-ads.swiggy.com/images/slider/7.jpg",
        "https://carousels-ads.swiggy.com/images/slider/3.jpg",
        "https://carousels-ads.swiggy.com/images/slider/4.jpg"
    ];
    return (
        <View style={{}}>
            <SliderBox
               images={images}
               autoplay
               circleLoop
               dotColor="#13274F"
               inactiveDotColor="#90A4AE"
               ImageComponentStyle={{
                borderRadius:6,
                width:"95%"
               }}
            />
        </View>
    );
};

export default Carousel

const styles = StyleSheet.create({})