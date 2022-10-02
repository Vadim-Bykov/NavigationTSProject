import {Button} from 'react-native';
import React, {useState} from 'react';
import {FilmScreenProps} from '../../Navigators/NavTypes/DrawerTypes';
import {MovieModal} from './components/MovieModal';

export const FilmScreen: React.FC<FilmScreenProps> = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button title="Show modal" onPress={() => setVisible(true)} />
      {visible && <MovieModal />}
    </>
  );
};
