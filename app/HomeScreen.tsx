import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { imageSlider, categoryList } from '../data/Data';
import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props;
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

      <View style={styles.titleContainer}>
        <Text style={styles.text}>Categories</Text>
      </View>

      <FlatList
        data={categoryList}
        key={3}
        numColumns={3}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('ShowProduct', { categoryId: item.id })
              }
            >
              <Image source={{ uri: item.icon }} style={styles.icon} />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
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

  titleContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  flatListContainer: {
    padding: 8,
  },

  button: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '7CAF58',
    borderRadius: 8,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemName: {
    color: 'black',
  },
});

export default HomeScreen;
