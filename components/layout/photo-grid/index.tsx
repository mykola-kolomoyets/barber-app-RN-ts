import { FC } from 'react';
import { FlatList, Image, View } from 'react-native';

import { images } from './photo-grid.constants';

import styles from './photo-grid.styles';

const PhotoGrid: FC = () => {
  return (
    <View>
      <FlatList
        style={styles.container}
        data={images}
        renderItem={(item) => <Image style={styles.image} source={item.item} />}
        keyExtractor={(item) => item}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  );
};

export { PhotoGrid };
