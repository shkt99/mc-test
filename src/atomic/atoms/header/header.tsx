import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderBackground = () => {
  return (
    <LinearGradient
      colors={['#E35205', '#F98E20']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.flex1}
    />
  );
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
});
export default HeaderBackground;
