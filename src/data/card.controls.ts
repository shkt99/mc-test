import {CardControlOptionsData} from '../modals';

export const cardControls: CardControlOptionsData[][] = [
  [
    {
      id: '1',
      optionName: 'Face ID',
      optionSelectedValue: 'Enabled',
      leftIcon: require('../images/faceId.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '2',
      optionName: 'Apple Wallet',
      optionSelectedValue: 'Open',
      leftIcon: require('../images/wallet.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '3',
      optionName: 'Auto Pay',
      optionSelectedValue: 'Enabled',
      leftIcon: require('../images/autoPay.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '4',
      optionName: 'Online Statements',
      optionSelectedValue: 'Enrolled',
      leftIcon: require('../images/statements.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
  ],
  [
    {
      id: '5',
      optionName: 'Manage Subscriptions',
      optionSelectedValue: '3',
      leftIcon: require('../images/link.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '6',
      optionName: 'Authorized Users',
      optionSelectedValue: '1',
      leftIcon: require('../images/authorizedUser.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
  ],
  [
    {
      id: '7',
      optionName: 'Spend Limit Settings',
      optionSelectedValue: '',
      leftIcon: require('../images/authorizedUser.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '8',
      optionName: 'Overseas Spend Settings',
      optionSelectedValue: '',
      leftIcon: require('../images/globe.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
  ],
  [
    {
      id: '9',
      optionName: 'Tap & Pay',
      optionSelectedValue: '',
      leftIcon: require('../images/tapPay.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
    {
      id: '10',
      optionName: 'FICO Score',
      optionSelectedValue: '',
      leftIcon: require('../images/fico.png'),
      rightIcon: require('../images/lightChevron.png'),
    },
  ],
];
