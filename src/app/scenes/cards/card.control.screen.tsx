import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CardControlOptionsData} from '../../../modals';
import {cardControls} from '../../../data/card.controls';
import {ScrollView} from 'react-native-gesture-handler';
import CardControlsComponent from '../../../atomic/organisms/card.controls/card.controls.component';
import CardControlTopOptions from '../../../atomic/organisms/card.control.top.options/card.control.top.options.component';

const CardControlsScreen = () => {
  const [cardControlOptions, setControlOptions] = useState<
    CardControlOptionsData[][]
  >([
    [
      {
        id: '',
        optionName: '',
        optionSelectedValue: '',
        leftIcon: 0,
        rightIcon: 0,
      },
    ],
  ]);

  useEffect(() => {
    setControlOptions(cardControls);
  }, []);

  return (
    <ScrollView>
      <CardControlTopOptions />
      <View style={styles.marginVertical20}>
        <CardControlsComponent cardControlOptions={cardControlOptions} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  marginVertical20: {marginVertical: 20},
});

export default CardControlsScreen;
