import React, {FC} from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';

type FormInputProps = {
  rightIcon?: boolean;
  title?: string;
  values?: string | number;
  handleChange?: (e: any) => void;
  handleBlur?: (e: any) => void;
  errors?: string;
  touched?: boolean;
  placeholder?: string;
  inputTextStyle?: TextStyle;
  inputBoxStyle?: ViewStyle;
  multiline?: boolean;
  testId?: string;
  secureText?: boolean;
  rightIconClick?: (e: any) => void;
  keyboard?: KeyboardTypeOptions;
  maxTextLength?: number;
  editable?: boolean;
};

const FormInput: FC<FormInputProps> = ({
  title,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  placeholder,
  inputTextStyle,
  multiline = false,
  testId = 'formInput',
  secureText = false,
  rightIcon,
  rightIconClick,
  keyboard = 'default',
  maxTextLength = 99999,
  editable = true,
  inputBoxStyle,
}) => {
  const getIcon = () => {
    if (secureText) {
      return (
        <Image
          source={require('../../../images/mask.png')}
          style={styles.mask}
        />
      );
    }
    return (
      <Image
        source={require('../../../images/unmask.png')}
        style={styles.unmask}
      />
    );
  };
  return (
    <View style={inputBoxStyle}>
      {title && <Text>{title}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          editable={editable}
          testID={testId}
          style={inputTextStyle}
          onChangeText={handleChange}
          value={`${values}`}
          placeholder={placeholder}
          onBlur={handleBlur}
          multiline={multiline}
          secureTextEntry={secureText}
          autoComplete="off"
          autoCorrect={false}
          spellCheck={false}
          autoCapitalize={'none'}
          keyboardType={keyboard}
          maxLength={maxTextLength}
        />
        <Pressable onPress={rightIconClick}>
          {rightIcon && <View style={styles.icon}>{getIcon()}</View>}
        </Pressable>
      </View>
      {touched && errors && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 2,
    fontSize: 14,
    color: '#DC282B',
  },
  inputTextTitle: {
    fontSize: 14,
    color: 'black',
    marginVertical: 4,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputText: {
    padding: 0,
    fontSize: 16,
    flex: 1,
  },
  icon: {
    marginTop: 10,
    paddingRight: 10,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    flex: 1,
  },
  mask: {width: 16, height: 16},
  unmask: {width: 20, height: 24},
});

export default FormInput;
