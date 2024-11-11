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
import InputComponent from '@/components/InputComponent';

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

  const onInputChange = (type: string, value: string) => {
    setProductData((prevData) => ({
      ...prevData,
      [type]: value,
    }));
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

        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Product Name"
            value={productData.productName}
            onChangeText={(text) => onInputChange('productName', text)}
          />
        </View>

        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Description"
            value={productData.description}
            onChangeText={(text) => onInputChange('description', text)}
            isDescription={true}
          />
          <InputComponent
            placeholder="Price"
            value={productData.price ?? ''}
            onChangeText={(text) => onInputChange('price', text)}
            isIcon={true}
            iconName="dollar"
          />
        </View>

        <Text style={styles.sellerText}>Seller Contact</Text>

        <InputComponent
          placeholder="Whatsapp number (ex: +91 1234567890)"
          value={productData.phoneNumber}
          onChangeText={(text) => onInputChange('phoneNumber', text)}
          isIcon={true}
          iconName="whatsapp"
        />

        <InputComponent
          placeholder="Instagram username (ex: @username)"
          value={productData.instagram}
          onChangeText={(text) => onInputChange('instagram', text)}
          isIcon={true}
          iconName="instagram"
        />

        <InputComponent
          placeholder="Facebook username (ex: @username)"
          value={productData.facebook}
          onChangeText={(text) => onInputChange('facebook', text)}
          isIcon={true}
          iconName="facebook"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>SAVE</Text>
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
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sellerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  saveButton: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'mistyrose',
  },
  saveText: {
    color: 'black',
  },
});

export default AddProductScreen;
