export const balance = {
  id: '1',
  mcId: '1',
  current: '1000',
  available: '9000',
  total: '10000',
  dueDays: '5',
  statementBalance: '600',
  minimumPayment: '60',
};

export const mastercardDetails = [
  {
    id: '1',
    mastercardNumber: '5426123456783345',
    name: 'John A. Doe',
    expiryDate: '09/25',
    CVC: '242',
    image: require('../images/mastercard.png'),
    locked: false,
  },
  {
    id: '2',
    mastercardNumber: '5426123456783346',
    name: 'John A. Doe',
    expiryDate: '11/29',
    CVC: '456',
    image: require('../images/mastercard.png'),
    locked: false,
  },
  {
    id: '3',
    mastercardNumber: '5426123456783347',
    name: 'John A. Doe',
    expiryDate: '05/31',
    CVC: '123',
    image: require('../images/mastercard.png'),
    locked: false,
  },
];

export const recentTransactions = [
  {
    id: '1',
    name: 'Starbucks',
    image: require('../images/starbucks.png'),
    date: '2024-05-25T23:59:00Z',
    amount: '5.43',
    points: '5',
  },
  {
    id: '2',
    name: 'Amazon',
    image: require('../images/amazon.png'),
    date: '2024-05-20T06:00:00Z',
    amount: '125.30',
    points: '5',
  },
  {
    id: '3',
    name: 'Dunkin Donuts',
    image: require('../images/dunkinDonuts.png'),
    date: '2024-05-15T19:45:00Z',
    amount: '5.43',
    points: '5',
  },
  {
    id: '4',
    name: 'Spotify',
    image: require('../images/spotify.png'),
    date: '2024-05-10T14:30:00Z',
    amount: '5.43',
    points: '5',
  },
  {
    id: '5',
    name: 'Uber Eats',
    image: require('../images/uberEats.png'),
    date: '2024-05-01T08:15:00Z',
    amount: '5.43',
    points: '5',
  },
];
