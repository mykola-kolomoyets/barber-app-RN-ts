import { FC } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import styles from './photo-stack.styles';

type PhotoStackProps = {
  images: ImageSourcePropType[];
  limit: number;
};
const PhotoStack: FC<PhotoStackProps> = ({ images, limit }) => (
  <View style={styles.container}>
    {images.slice(0, limit).map((photo, index) => (
      <Image
        key={index}
        style={[styles.photo, index === 0 && styles.photo__first]}
        source={photo}
      />
    ))}
  </View>
);

export { PhotoStack };
