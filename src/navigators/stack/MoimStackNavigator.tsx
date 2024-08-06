import {MoimStack} from '../constants';

import MoimHomeScreen from '../../screens/MoimStackScreens/MoimHomeScreen.tsx';
import MoimTopTabNavigator from 'navigators/tab/MoimTopTabNavigator.tsx';

export default function MoimStackNavigator() {
  return (
    <MoimStack.Navigator
      initialRouteName={'MOIM_LIST'}
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}>
      <MoimStack.Screen name={'MOIM_LIST'} component={MoimHomeScreen} />
      <MoimStack.Screen name={'MOIM_DETAIL'} component={MoimTopTabNavigator} />
    </MoimStack.Navigator>
  );
}