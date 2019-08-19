import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { CreateScreen, EditScreen, IndexScreen, ShowScreen } from './src/screens';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Show: ShowScreen
  }, 
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: 
    {
      title: 'Blogs'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  );
};