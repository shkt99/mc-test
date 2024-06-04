import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import TextHeader from '../text/text.component';

const TransactionHeader = () => {
  return (
    <View style={styles.container}>
      <TextHeader text={'Recent Transactions'} style={styles.header} />
      <TouchableOpacity onPress={() => {}} style={styles.viewAll}>
        <TextHeader text={'View All'} style={styles.header} />
        <Image
          source={require('../../../images/chevron.png')}
          style={styles.chevron}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {fontSize: 14, color: '#333333'},
  viewAll: {flexDirection: 'row', alignItems: 'center'},
  chevron: {width: 20, height: 20},
});

export default TransactionHeader;
