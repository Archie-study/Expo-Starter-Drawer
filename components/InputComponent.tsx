import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Define the props type for the component
interface InputComponentProps extends TextInputProps {
  isDescription?: boolean; // Optional prop to indicate if input is for description
  isIcon?: boolean; // Optional prop to indicate if an icon should be shown
  iconName?: string; // Optional prop for the icon name from AntDesign
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { isDescription, isIcon, iconName } = props;

  return (
    <View style={styles.mainContainer}>
      {isIcon && iconName ? (
        <AntDesign name={iconName} size={20} style={styles.icon} />
      ) : null}

      <TextInput
        style={[styles.input, { height: isDescription ? 100 : 40 }]}
        multiline={isDescription}
        {...props} // Spread props for additional customization
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
    fontSize: 16,
    width: '100%',
  },
});

export default InputComponent; // Export the component
