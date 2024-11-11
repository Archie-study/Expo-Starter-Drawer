import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const AddProductScreen = () => {
  const [productData, setProductData] = useState({
    productName: '',
    imagePath: '',
    category: null,
    description: '',
    price: null,
    instagram: '',
    facebook: '',
    phoneNumber: '',
  });

  const addImage = async () => {
    // Request for permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted) {
      // Launch the image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true, // Enables editing UI
        quality: 1,
      });

      if (!result.canceled) {
        // Crop the image using the manipulator
        const croppedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: 2000, height: 2000 } }], // Adjust size as needed
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );

        setProductData({
          ...productData,
          imagePath: croppedImage.uri, // Use cropped image URI
        });
      }
    } else {
      Alert.alert('Permission to access the photo library is required!');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => addImage()}
          >
            {/* <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://static.thenounproject.com/png/187803-200.png',
              }}
            /> */}
            {productData.imagePath ? (
              <Image
                style={{ width: 200, height: 200, borderRadius: 8 }} // Add optional border radius
                source={{ uri: productData.imagePath }}
              />
            ) : (
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: 'https://static.thenounproject.com/png/187803-200.png',
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    margin: 8,
    paddingBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  imageButton: {
    width: 200,
    height: 200,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddProductScreen;
