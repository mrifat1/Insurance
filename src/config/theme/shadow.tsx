import {StyleSheet} from 'react-native';
import Colors from './Colors';

export const Shadow = StyleSheet.create({
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
