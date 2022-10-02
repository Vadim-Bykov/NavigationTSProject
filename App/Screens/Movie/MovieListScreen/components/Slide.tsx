import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {getHeight, getWidth} from '../../../../helpers/commonHelpers';
import {Movie} from '../../../../api/tmdbServies';
import {BASE_IMAGE_URL, DEFAULT_MOVIE_IMAGE} from '../../../../const/consts';
import {
  FLAT_LIST_WINDOW_WIDTH,
  ITEM_MARGIN,
  ITEM_WIDTH,
} from '../MovieListScreen';
import {Icon} from 'react-native-elements';

// const ITEM_WIDTH = getWidth() * 0.8;

interface ListItem {
  item: Movie;
  index: number;
  lastIndex: number;
  scrollRef: Animated.Value;
}

export const Slide: React.FC<ListItem> = ({
  item,
  index,
  lastIndex,
  scrollRef,
}) => {
  const position = Animated.subtract(index * ITEM_WIDTH, scrollRef);

  const isDisappearing = -ITEM_WIDTH;
  const isLeft = 0;
  const isRight = FLAT_LIST_WINDOW_WIDTH - ITEM_WIDTH;
  const isAppearing = FLAT_LIST_WINDOW_WIDTH - ITEM_MARGIN * 2;

  const scale = position.interpolate({
    inputRange: [isDisappearing, isLeft, isRight, isAppearing],
    outputRange: [0.86, 1, 1, 0.86],
    extrapolate: 'clamp',
  });

  const opacity = position.interpolate({
    inputRange: [isDisappearing, isLeft, isRight, isAppearing],
    outputRange: [0.3, 1, 1, 0.3],
  });

  return (
    <Animated.View
      style={[
        styles.slideContainer,
        {opacity},
        {
          marginLeft: index === 0 ? ITEM_MARGIN : 0,
          marginRight: index === lastIndex ? ITEM_MARGIN : 0,
          transform: [{scale}],
        },
      ]}>
      <FastImage
        style={[styles.image]}
        source={{
          uri: item.poster_path
            ? `${BASE_IMAGE_URL}w500${item.poster_path}`
            : DEFAULT_MOVIE_IMAGE,
        }}
      />

      <Text style={styles.title}>{item.original_title}</Text>

      <View style={styles.voteContainer}>
        <Icon name="star" color="gold" tvParallaxProperties />
        <Text>{item.vote_average}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    width: ITEM_WIDTH,
    alignItems: 'center',
  },

  image: {
    width: ITEM_WIDTH,
    height: undefined,
    aspectRatio: 1 / 1.5,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#000000', // without backgroundColor shadow not appears
    shadowColor: 'red',
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 16,
  },

  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
