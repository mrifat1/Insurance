import Colors from '@app/config/theme/Colors';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface AppButtonProp {
  title?: string | Date;
  textStyle?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
interface AppButtonProp {
  textStyle?: any;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  children?: any;
  isBorder?: boolean;
  isSkip?: boolean;
  isDisable?: boolean;
}

const AppButton = ({
  title,
  textStyle,
  style,
  onPress,
  isDisable = false,
}: AppButtonProp) => {
  return (
    <TouchableOpacity
      disabled={isDisable}
      onPress={onPress}
      style={[styles.buttonProceed, style]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// LoginRegisterButton

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.light4,
    // fontFamily: FontFamily.InnerM,
    // fontSize: FontSize.M,
  },
  buttonProceed: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(90),
    height: hp(6),
    borderRadius: hp(0.5),
    backgroundColor: Colors.primaryMain,
  },
  // customHomeButton: {
  //   // justifyContent: 'space-around',
  //   alignItems: 'center',
  //   width: wp(44),
  //   height: hp(6),
  //   borderRadius: hp(1),
  //   backgroundColor: Colors.light4,
  // },
  // loginRegisterButtonProceed: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: wp(90),
  //   height: hp(6),
  //   borderRadius: hp(4),
  // },
  // circleButtonProceed: {
  //   height: hp(7.5),
  //   width: hp(7.5),
  //   backgroundColor: Colors.primaryPurple,
  //   borderRadius: hp(4),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  // },
  // textChildrenStyling: {
  //   color: Colors.light4,
  //   fontFamily: FontFamily.InnerR,
  //   fontSize: FontSize.M,
  // },
  // iconStyling: {
  //   left: hp(2),
  // },
});

export default AppButton;
