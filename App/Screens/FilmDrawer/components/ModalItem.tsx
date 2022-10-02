import {Animated, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import React, {RefObject} from 'react';
import * as tmdbApi from '../../../api/tmdbServies';
import FastImage from 'react-native-fast-image';
import {BASE_IMAGE_URL, DEFAULT_MOVIE_IMAGE} from '../../../const/consts';
import {Icon} from 'react-native-elements';
import {ITEM_WIDTH} from './MovieModal';

const STAIR = 25;
const SCALE_STEP = 0.05;
const MARGIN = 30;
const PADDING = 20;
const CARD_WIDTH = ITEM_WIDTH - MARGIN * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.6;

const isDisappearing = -ITEM_WIDTH;
const isShown = 0;
const isAppearing = ITEM_WIDTH;

interface ModalItemProps {
  item: tmdbApi.Movie;
  index: number;
  scrollX: Animated.Value;
  lastIndex: number;
  flatListRef: RefObject<FlatList>;
  setVisible: (visible: boolean) => void;
  itemsCount: number;
}

export const ModalItem: React.FC<ModalItemProps> = ({
  item,
  index,
  scrollX,
  lastIndex,
  flatListRef,
  setVisible,
  itemsCount,
}) => {
  const position = Animated.subtract(index * ITEM_WIDTH, scrollX);

  const translateX = Animated.add(
    Animated.add(
      scrollX,
      scrollX.interpolate({
        inputRange: [0, ITEM_WIDTH * index],
        outputRange: [-ITEM_WIDTH * index, -ITEM_WIDTH * index],
        extrapolate: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isDisappearing, isShown, isAppearing],
      outputRange: [-ITEM_WIDTH * 1.5, 0, 0],
    }),
  );

  const translateY = position.interpolate({
    inputRange: [isDisappearing, isShown, ITEM_WIDTH * index],
    outputRange: [0, 0, STAIR * index],
    extrapolate: 'clamp',
  });

  const scale = position.interpolate({
    inputRange: [isDisappearing, isShown, ITEM_WIDTH * index],
    outputRange: [1, 1, 1 - SCALE_STEP * index],
    extrapolate: 'clamp',
  });

  const rotate = position.interpolate({
    inputRange: [isDisappearing, isShown, isAppearing],
    outputRange: ['-45deg', '0deg', '0deg'],
    extrapolate: 'clamp',
  });

  const switchTo = () => {
    if (index !== lastIndex) {
      flatListRef?.current?.scrollToIndex({
        index: index + 1,
      });
    } else {
      flatListRef?.current?.scrollToIndex({
        index: 0,
      });
    }
  };

  return (
    <>
      {/* {index === 0 && (
        <Animated.View
          style={[styles.close, {transform: [{translateX: scrollX}]}]}>
          <Icon
            name="close"
            onPress={() => {
              setVisible(false);
            }}
            tvParallaxProperties
          />
        </Animated.View>
      )} */}
      <Animated.View
        style={[
          styles.itemContainer,
          {zIndex: itemsCount - index},
          {
            transform: [
              {translateX},
              {translateY},
              {scale},
              {rotate},
              {perspective: 1000},
            ],
          },
        ]}>
        <View style={styles.cardContainer}>
          <FastImage
            source={{
              uri: item.poster_path
                ? `${BASE_IMAGE_URL}w500${item.poster_path}`
                : DEFAULT_MOVIE_IMAGE,
            }}
            style={styles.image}
          />
          <Text numberOfLines={1}>{item.title}</Text>
          <Button
            title={index === lastIndex ? 'To the beginning' : 'Next'}
            onPress={switchTo}
          />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  //   close: {
  //     position: 'absolute',
  //     right: 12,
  //     top: -24,
  //   },
  itemContainer: {
    alignItems: 'center',
    width: ITEM_WIDTH,
  },
  cardContainer: {
    width: CARD_WIDTH,
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: PADDING,
    height: CARD_HEIGHT,
  },
  image: {
    width: ITEM_WIDTH - PADDING * 2 - MARGIN * 2,
    height: undefined,
    aspectRatio: 1 / 1.4,
    resizeMode: 'contain',
  },
});
