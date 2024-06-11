import {StyleSheet, View} from 'react-native';
import React from 'react';
import CardControlOptionsCard from '../../molecules/card.control.options.card/card.control.options.component';
import {CardControlOptionsData} from '../../../modals';

type CardControlsComponentProps = {
  cardControlOptions: CardControlOptionsData[][];
};
const CardControlsComponent = ({
  cardControlOptions,
}: CardControlsComponentProps) => {
  return (
    <View style={styles.gap15}>
      {cardControlOptions.map((modal: CardControlOptionsData[], index) => (
        <CardControlOptionsCard optionsData={modal} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gap15: {gap: 15},
});

export default CardControlsComponent;
