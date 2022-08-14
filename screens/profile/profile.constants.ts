import { Platform } from 'react-native';

import { ReviewItemProps } from '@Components/ui/review-item';

import { FilterItem } from '@Utils/common';

export const profileBg = require('@Assets/images/profile/profile-bg.png');
export const profileImage = require('@Assets/images/profile/profile-image.png');

export const HEADER_MAX_HEIGHT = 200;
export const HEADER_MIN_HEIGHT = Platform.OS == 'ios' ? 60 : 73;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const portfolioImages = [
  require('@Assets/images/portfolio/portfolio-1.png'),
  require('@Assets/images/portfolio/portfolio-2.png'),
  require('@Assets/images/portfolio/portfolio-3.png'),
  require('@Assets/images/portfolio/portfolio-2.png'),
  require('@Assets/images/portfolio/portfolio-1.png'),
  require('@Assets/images/portfolio/portfolio-3.png')
];

export const bookImages = [
  require('@Assets/images/bookings/booking-1.png'),
  require('@Assets/images/bookings/booking-2.png'),
  require('@Assets/images/bookings/booking-3.png'),
  require('@Assets/images/bookings/booking-4.png')
];

export const filterItems: FilterItem[] = [
  {
    title: 'Men`s Haircut',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Cuts'
  },
  {
    title: 'Eyebrows',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Cuts'
  },
  {
    title: 'Shave',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Cuts'
  },
  {
    title: 'Conditioning 1',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Conditioning'
  },
  {
    title: 'Coloring 1',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Coloring'
  },
  {
    title: 'Coloring 2',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Coloring'
  },
  {
    title: 'Design 1',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Design'
  },
  {
    title: 'Other 1',
    subtitle: 'Brown and black color • 1hr',
    amount: 100,
    category: 'Other'
  }
];

export const reviewItems: ReviewItemProps[] = [
  {
    text: "197 Max Character Count. Truncate after 197. Best haircut you're going to find. The owner knows hair and listens to you when you're in the chair. Smooth and simple process...",
    image: require('@Assets/images/review-image.png'),
    rating: 4,
    author: 'Ernest Mitchell',
    createdAt: new Date()
  },
  {
    text: "197 Max Character Count. Truncate after 197. Best haircut you're going to find. The owner knows hair and listens to you when you're in the chair. Smooth and simple process...",
    image: require('@Assets/images/review-image.png'),
    rating: 3,
    author: 'Konstantin Konstantinopolsky',
    createdAt: new Date()
  },
  {
    text: "197 Max Character Count. Truncate after 197. Best haircut you're going to find. The owner knows hair and listens to you when you're in the chair. Smooth and simple process...",
    image: require('@Assets/images/review-image.png'),
    rating: 5,
    author: 'Ernest Mitchell',
    createdAt: new Date()
  }
];
