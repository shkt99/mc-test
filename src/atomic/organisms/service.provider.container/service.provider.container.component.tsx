import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ServiceProviderCard from '../../molecules/service.provider.card/service.provider.card.component';
import {ProvidersData} from '../../../modals';

type ProviderConatinerProps = {
  providersData: ProvidersData[];
  onProviderConnectClick: (data: string) => void;
};

const ServiceProviderContainer = ({
  providersData,
  onProviderConnectClick,
}: ProviderConatinerProps) => {
  return (
    <FlatList
      data={providersData}
      renderItem={({item}) => (
        <View>
          <ServiceProviderCard
            data={item}
            cardStyle={styles.cardContainer}
            onConnectClick={onProviderConnectClick}
          />
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, width: 377, alignSelf: 'center'},
  listContainer: {
    width: 377,
    alignSelf: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 10,
    width: 327 / 2 - 10,
  },
});

export default ServiceProviderContainer;
