import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './App/Store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './App/Navigators/AppNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';
import {configureAxios} from './App/api/axiosConfig';

configureAxios();
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
