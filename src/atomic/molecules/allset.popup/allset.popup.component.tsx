import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MCButton from '../../atoms/button/button.component';

type AllSetPopupProps = {
  onCrossClick: () => void;
  onViewDashBoardClick: () => void;
};

const AllSetPopup = ({
  onCrossClick,
  onViewDashBoardClick,
}: AllSetPopupProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../../images/popupCircle.png')}
          style={styles.popupCircle}
        />
        <TouchableOpacity onPress={onCrossClick}>
          <Image
            source={require('../../../images/cross.png')}
            style={styles.cross}
          />
        </TouchableOpacity>
        <Text style={styles.allsetText}>All Set!</Text>
        <Text style={styles.subHeader}>Enjoy your digital journey.</Text>

        <View style={styles.buttonContainer}>
          <MCButton
            title={'View Dashboard'}
            btnStyle={styles.btnStyle}
            buttonText={styles.buttonText}
            onPress={onViewDashBoardClick}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    zIndex: 99999,
    left: '50%',
    transform: [{translateX: -163.5}, {translateY: -163.5}],
  },
  innerContainer: {
    height: 340,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 327,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  popupCircle: {
    position: 'absolute',
    top: -48,
    left: 115,
    width: 96,
    height: 96,
  },
  cross: {alignSelf: 'flex-end', marginTop: 20, marginRight: 20},
  allsetText: {
    fontWeight: '600',
    fontSize: 26,
    alignSelf: 'center',
    marginTop: 50,
  },
  subHeader: {
    fontWeight: '600',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 30,
    color: '#5C5C5C',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignSelf: 'center',
  },
  btnStyle: {
    height: 48,
    width: 271,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default AllSetPopup;
