import { FC } from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import { Paragraph } from '@Components/ui/typography';
import { StarIcon } from '@Components/icons';

import { getStringFromDate } from '@Utils/functions';

import styles from './review-item.styles';

export type ReviewItemProps = {
  text: string;
  image: ImageSourcePropType;
  rating: number;
  author: string;
  createdAt: Date;
};

const ReviewItem: FC<ReviewItemProps> = ({
  text,
  image,
  rating,
  author,
  createdAt
}) => (
  <View style={styles.container}>
    <Paragraph style={styles.text} view="small">
      {text}
    </Paragraph>

    <View style={styles.footer}>
      <View style={styles.image}>
        <Image source={image} />
      </View>

      <View style={styles.metadata}>
        <View style={styles.stars}>
          {new Array(Math.floor(rating)).fill(null).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </View>

        <View style={styles.author}>
          <Paragraph style={styles.author__name} view="small">
            {author}
          </Paragraph>

          <Paragraph view="small" color="gray" light>
            {getStringFromDate(createdAt)}
          </Paragraph>
        </View>
      </View>
    </View>
  </View>
);

export { ReviewItem };
