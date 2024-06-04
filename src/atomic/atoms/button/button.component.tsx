import {
  Text,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Image,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ButtonImageContainer, ImageContainer} from './style';

export type ButtonProps = {
  title: string;
  btnStyle?: StyleProp<ViewStyle>;
  buttonText?: StyleProp<TextStyle>;
  onPress: () => void;
  disable?: boolean;
  image?: number;
  imgStyle?: StyleProp<ImageStyle>;
  gradientBorder?: number;
};

const MCButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  btnStyle,
  buttonText,
  disable = false,
  image,
  imgStyle,
  gradientBorder = 2,
}) => {
  return (
    <LinearGradient
      colors={
        disable
          ? ['#D6D6D6', '#D6D6D6', '#D6D6D6']
          : ['#E35205', '#E35205', '#F98E20']
      }
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={[{...styles.gradientBorder, padding: gradientBorder}]}>
      <TouchableOpacity
        disabled={disable}
        style={[styles.buttonContainer, btnStyle]}
        onPress={() => onPress()}>
        <ButtonImageContainer>
          {image && (
            <ImageContainer>
              <Image source={image} style={imgStyle} />
            </ImageContainer>
          )}
          <Text style={buttonText}>{title}</Text>
        </ButtonImageContainer>
      </TouchableOpacity>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 4,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
});
export default MCButton;
