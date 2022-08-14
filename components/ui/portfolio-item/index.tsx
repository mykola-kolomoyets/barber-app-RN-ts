import { FC } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import AntSedign from '@expo/vector-icons/AntDesign';

import { Colors } from '@Utils/colors';

import styles from './portfolio-item.styles';

type PortfolioItemProps = {
  image: ImageSourcePropType;
  isLiked: boolean;
  onLikePress: () => void;
};
const PortfolioItem: FC<PortfolioItemProps> = ({ image, isLiked, onLikePress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.like} onPress={onLikePress}>
      <AntSedign
        name={isLiked ? 'heart' : 'hearto'}
        size={22}
        color={Colors.white}
      />
    </TouchableOpacity>

    <Image source={image} />
  </View>
);

export { PortfolioItem };