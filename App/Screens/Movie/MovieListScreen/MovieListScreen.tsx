import {
  StyleSheet,
  Button,
  ListRenderItemInfo,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useRef} from 'react';
import {useQuery} from 'react-query';
import {MovieListScreenProps} from '../../../Navigators/MovieStackNavigator';
import {getMedia, Movie} from '../../../api/tmdbServies';
import {getWidth} from '../../../helpers/commonHelpers';
import {Slide} from './components/Slide';
import {Titles} from './components/Titles';

const GENERAL_LIST_LENGTH = 20;
export const ITEM_MARGIN = getWidth() * 0.1;
export const FLAT_LIST_WINDOW_WIDTH = getWidth();
export const ITEM_WIDTH = FLAT_LIST_WINDOW_WIDTH - ITEM_MARGIN * 2;

export const MovieListScreen: React.FC<MovieListScreenProps> = ({
  navigation,
  route,
}) => {
  const scrollRef = useRef(new Animated.Value(0)).current;

  const go = () => navigation.navigate('Movie', {movieId: 1});

  const {data, error} = useQuery('movies', () => getMedia({}));

  const renderItem = ({item, index}: ListRenderItemInfo<Movie>) => {
    return (
      <Slide
        item={item}
        index={index}
        lastIndex={(data?.results.length || GENERAL_LIST_LENGTH) - 1}
        scrollRef={scrollRef}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Titles movies={data?.results} scrollRef={scrollRef} />

      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollRef}}}],
          {useNativeDriver: true},
        )}
        data={data?.results}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        disableIntervalMomentum
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0.88}
        scrollEventThrottle={16}
      />
      <Button title="Go movie" onPress={go} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatListContainer: {
    // backgroundColor: 'blue',
  },
});
