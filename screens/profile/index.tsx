import { FC, useState, useEffect } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Platform,
  RefreshControl
} from 'react-native';
import AntSedign from '@expo/vector-icons/AntDesign';

import {
  Paragraph,
  PortfolioItem,
  Title,
  ReviewItem,
  ButtonWithAddons,
  PhotoStack
} from '@Components/ui';

import {
  Filter,
  HorizontalSlider,
  Separator,
  WorkingHours
} from '@Components/layout';

import {
  LightningIcon,
  LocationBigIcon,
  LocationSmallIcon,
  WriteIcon,
  ArrowRightIcon
} from '@Components/icons';

import { Colors } from '@Utils/colors';
import { Screens, StackScreen } from '@Utils/navigation';

import {
  bookImages,
  filterItems,
  HEADER_MAX_HEIGHT,
  HEADER_SCROLL_DISTANCE,
  portfolioImages,
  profileBg,
  profileImage,
  reviewItems
} from './profile.constants';

import styles from './profile.styles';

const ProfileScreen: FC<StackScreen<Screens.profile>> = ({ navigation }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [likedPortfolioPhotos, setLikedPortfolioPhotos] = useState<number[]>([
    0, 2
  ]);

  const [scrollY, setScrollY] = useState(
    new Animated.Value(Platform.OS == 'ios' ? -HEADER_MAX_HEIGHT : 0)
  );

  const onLikeToggle = (index: number) => {
    if (!likedPortfolioPhotos.length) setLikedPortfolioPhotos([index]);

    const likeIndex = likedPortfolioPhotos.indexOf(index);

    if (likeIndex == -1)
      return setLikedPortfolioPhotos((prev) => prev.concat(index));

    setLikedPortfolioPhotos((prev) => {
      const copy = [...prev];
      copy.splice(likeIndex, 1);

      return copy;
    });
  };

  const onViewAllReviewsPress = () => {};

  const scrollYAnimate = Animated.add(
    scrollY,
    Platform.OS == 'ios' ? HEADER_MAX_HEIGHT : 0
  );

  const headerTranslate = scrollYAnimate.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp'
  });

  const headerBgScale = scrollYAnimate.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1.2],
    extrapolate: 'clamp'
  });

  const imageScale = scrollYAnimate.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.6],
    extrapolate: 'clamp'
  });

  const imageTranslate = scrollYAnimate.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -30],
    extrapolate: 'clamp'
  });

  const inToggleLike = () => setIsLiked((prev) => !prev);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.like_button} onPress={inToggleLike}>
          <AntSedign
            name={isLiked ? 'heart' : 'hearto'}
            size={22}
            color={Colors.white}
          />
        </TouchableOpacity>
      )
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.profile__head,
          { transform: [{ translateY: headerTranslate }] }
        ]}
        pointerEvents="none"
      >
        <Animated.View style={[{ overflow: 'hidden' }]}>
          <Animated.Image
            resizeMethod={headerBgScale}
            resizeMode="cover"
            style={[styles.image, { transform: [{ scale: headerBgScale }] }]}
            source={profileBg}
          />
        </Animated.View>

        <View style={styles.profile__head_person}>
          <View style={styles.profile__head_left}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: imageTranslate
                  }
                ]
              }}
            >
              <Animated.Image
                style={[
                  styles.profile__head_image,
                  {
                    transform: [
                      {
                        scale: imageScale
                      }
                    ]
                  }
                ]}
                source={profileImage}
              />
            </Animated.View>

            <Animated.View style={styles.profile__head_data}>
              <Title
                style={styles.profile__head_title}
                view="small"
                color="white"
              >
                Raul Dominquez
              </Title>

              <View style={styles.profile__head_subtitle}>
                <LightningIcon
                  style={styles.profile__head_rating_icon}
                  fill={Colors.gray}
                />

                <Paragraph view="large" color="gray">
                  4.5 (245)
                </Paragraph>
              </View>
            </Animated.View>
          </View>
          <WriteIcon />
        </View>
      </Animated.View>

      <Animated.ScrollView
        style={[styles.container, { marginTop: HEADER_SCROLL_DISTANCE }]}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              setIsRefreshing(true);
              setTimeout(() => setIsRefreshing(false), 1000);
            }}
            progressViewOffset={0}
          />
        }
        contentInset={{
          top: HEADER_MAX_HEIGHT
        }}
        contentOffset={{
          x: 0,
          y: -HEADER_MAX_HEIGHT
        }}
      >
        <View style={styles.profile__location_container}>
          <View>
            <View style={styles.profile__location}>
              <LocationSmallIcon />

              <Paragraph view="small" color="gold">
                1.6 mi away
              </Paragraph>
            </View>

            <Title style={styles.profile__location__title} view="small">
              A Cut Above
            </Title>

            <View>
              <Paragraph view="middle">123 Lexington Ave</Paragraph>

              <Paragraph view="middle">New York, NY</Paragraph>
            </View>
          </View>

          <LocationBigIcon />
        </View>

        <Separator />

        <WorkingHours />

        <Separator />

        <HorizontalSlider title="Portfolio">
          {portfolioImages.map((image, index) => (
            <PortfolioItem
              key={index}
              image={image}
              isLiked={likedPortfolioPhotos.includes(index)}
              onLikePress={() => onLikeToggle(index)}
            />
          ))}
        </HorizontalSlider>

        <Separator />

        <Filter title="Services" items={filterItems} />

        <Separator />

        <HorizontalSlider
          title="Latest Review"
          onViewAllClick={onViewAllReviewsPress}
        >
          {reviewItems.map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))}
        </HorizontalSlider>

        <View style={styles.profile__book}>
          <ButtonWithAddons
            view="primary"
            rightAddon={
              <View style={styles.book__addon}>
                <Paragraph
                  style={styles.book__right_addon_title}
                  view="large"
                  color="white"
                  bold
                >
                  Book
                </Paragraph>
                <ArrowRightIcon />
              </View>
            }
            leftAddon={
              <View style={styles.book__addon}>
                <PhotoStack images={bookImages} limit={4} />
                <Paragraph
                  style={styles.book__left_addon_title}
                  view="small"
                  color="white"
                >
                  12 recent bookings
                </Paragraph>
              </View>
            }
            onPress={() => {}}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export { ProfileScreen };
