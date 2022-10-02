import {
  Animated,
  StyleSheet,
  ListRenderItemInfo,
  Modal,
  FlatList,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useQuery} from 'react-query';
import * as tmdbApi from '../../../api/tmdbServies';
import {getWidth} from '../../../helpers/commonHelpers';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ModalItem} from './ModalItem';
import {Icon} from 'react-native-elements';

export const ITEM_WIDTH = getWidth();
const STAIR = 25;
const SCALE_STEP = 0.05;
const MARGIN = 30;
const CARD_WIDTH = ITEM_WIDTH - MARGIN * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.6;

export const MovieModal = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const [visible, setVisible] = useState(true);
  const {data, error} = useQuery('movies', () => tmdbApi.getMedia({}));
  const itemsCount = data?.results.length ?? 10;
  const lastIndex = itemsCount - 1;

  const renderItem = ({item, index}: ListRenderItemInfo<tmdbApi.Movie>) => {
    return (
      <ModalItem
        flatListRef={flatListRef}
        index={index}
        item={item}
        itemsCount={itemsCount}
        lastIndex={lastIndex}
        scrollX={scrollX}
        setVisible={setVisible}
      />
    );
  };

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.close}>
          <Icon
            name="close"
            onPress={() => {
              setVisible(false);
            }}
            tvParallaxProperties
          />
        </View>

        <Animated.FlatList
          ref={flatListRef}
          data={data?.results}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContainer}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          snapToInterval={ITEM_WIDTH}
          disableIntervalMomentum
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: true,
            },
          )}
          removeClippedSubviews={false}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(194,194,194,0.9)',
  },

  close: {
    position: 'absolute',
    right: 12,
    top: 0,
    zIndex: 1,
  },

  flatListContainer: {
    alignItems: 'center',
    //  backgroundColor: 'blue',
    //  height: CARD_HEIGHT + STAIR * 2,
  },
});
