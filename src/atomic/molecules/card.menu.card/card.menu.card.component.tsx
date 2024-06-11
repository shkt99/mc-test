import React from 'react';
import CardMenu from '../../atoms/card.menu/card.menu.component';
import {authenticate} from '../../../utils';

import {Container} from './styles';

type CardMenuProps = {
  cardLocked: boolean;
  setCardLocked: React.Dispatch<React.SetStateAction<boolean>>;
  onControls: () => void;
  onDetails: () => void;
};

const CardMenuCard = ({
  cardLocked,
  setCardLocked,
  onControls,
  onDetails,
}: CardMenuProps) => {
  return (
    <Container>
      <CardMenu
        text={'Controls'}
        image={require('../../../images/controls.png')}
        onPress={() => onControls()}
      />
      <CardMenu
        text={cardLocked ? 'Locked' : 'Lock Card'}
        image={
          cardLocked
            ? require('../../../images/lockedCard.png')
            : require('../../../images/lockCard.png')
        }
        onPress={async () => {
          await authenticate(() => setCardLocked(!cardLocked));
        }}
      />
      <CardMenu
        text={'Card Details'}
        image={require('../../../images/cardDetails.png')}
        onPress={async () => {
          await authenticate(() => onDetails());
        }}
      />
    </Container>
  );
};

export default CardMenuCard;
