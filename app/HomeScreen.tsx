import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { imageSlider } from '../data/Data'; // Adjust the path according to your folder structure

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Image Slider */}
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay={true}
          autoplayTimeout={3}
          loop
        >
          {imageSlider.map((imageUrl: string, index: number) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
      {/* 
      <Link href="/AddProductScreen" style={styles.button}>
        Go to about screen
      </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  swiperContainer: {
    width: '100%',
    height: 250,
    position: 'relative', // Allow children to be positioned absolutely
  },
  wrapper: {
    height: 250, // Set height for the swiper to accommodate the image height
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250, // Set the image height to 250px
    resizeMode: 'cover', // Ensures the image covers the entire slide area
  },
  buttonText: {
    color: '#fff', // Color for the button text
    fontSize: 30, // Adjust the size of next/prev button text
    paddingHorizontal: 15, // Padding around the button text
  },
  pagination: {
    position: 'absolute',
    bottom: 10, // Position at the bottom of the swiper
    left: '50%', // Center the pagination horizontally
    transform: [{ translateX: -20 }], // Adjust to keep it centered
    flexDirection: 'row',
  },
  paginationText: {
    color: '#fff', // Color for the pagination dots
    fontSize: 20, // Adjust the dot size
    marginHorizontal: 5, // Spacing between dots
  },
});

export default HomeScreen;
