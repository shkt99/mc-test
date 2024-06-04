import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextHeader from '../../atoms/text/text.component';

const OnboardingTile = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <TextHeader text={'Connect service providers'} style={styles.title} />
      </View>
      <View style={styles.subTitleContainer}>
        <TextHeader
          text={
            'Select accounts you have that you would like to update with your new credit card'
          }
          style={styles.subTitle}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
  },
  title: {fontSize: 22, lineHeight: 28, fontWeight: '600'},
  subTitleContainer: {
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  subTitle: {fontSize: 16, lineHeight: 28, textAlign: 'center'},
});

export default OnboardingTile;
