import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from '../../../../api/tmdbServies';
import {
  FLAT_LIST_WINDOW_WIDTH,
  ITEM_MARGIN,
  ITEM_WIDTH,
} from '../MovieListScreen';

const TITLE_HEIGHT = 50;

interface TitlesProps {
  movies?: Movie[];
  scrollRef: Animated.Value;
}

export const Titles: React.FC<TitlesProps> = ({movies, scrollRef}) => {
  const translateY = scrollRef.interpolate({
    inputRange: [-ITEM_WIDTH, ITEM_WIDTH],
    outputRange: [TITLE_HEIGHT, -TITLE_HEIGHT],
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.translatedContainer, {transform: [{translateY}]}]}>
        {movies?.map((movie, index) => {
          const position = Animated.subtract(index * ITEM_WIDTH, scrollRef);

          const isDisappearing = -ITEM_WIDTH;
          const isLeft = 0;
          const isRight = FLAT_LIST_WINDOW_WIDTH - ITEM_WIDTH;
          const isAppearing = FLAT_LIST_WINDOW_WIDTH - ITEM_MARGIN * 2;
          const scale_1 = position.interpolate({
            inputRange: [isDisappearing, isLeft, isRight, isAppearing],
            outputRange: [0.5, 1, 1, 0.5],
            extrapolate: 'clamp',
          });

          return (
            <Animated.Text
              key={`title_${movie.id}`}
              style={[styles.title, {transform: [{scale: scale_1}]}]}
              numberOfLines={1}>
              {movie.title}{' '}
            </Animated.Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: TITLE_HEIGHT,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  translatedContainer: {
    alignItems: 'center',
  },
  title: {
    height: TITLE_HEIGHT,
    fontSize: 30,
    //  marginVertical: 10,
  },
});
