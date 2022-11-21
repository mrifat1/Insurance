import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SearchIcon from '@app/assets/images/SearchIcon.svg';

type AppTextinputWithIconsProps = {
  sendLoading?: boolean;
  onPressSend?: () => void;
  ref?: React.ForwardedRef<null>;
  onPressAttachment?: () => void;
  containerStyle?: ViewStyle;
  iconRight?: boolean;
  iconLeft?: boolean;
  placeholder?: string;
  setText: (text: string) => void;
  dataText?: string;
  isEditable?: boolean;
  iconSentStyle?: TextInputProps;
  rightIconName?: string;
};

const AppTextinputWithIcons = ({
  sendLoading,
  onPressSend,
  onPressAttachment,
  containerStyle,
  iconLeft = false,
  iconRight = false,
  placeholder = 'Your text',
  ref,
  dataText,
  setText,
  isEditable = true,
  iconSentStyle,
  rightIconName = 'send',
  ...Props
}: AppTextinputWithIconsProps) => {
  return (
    <View style={[styles.searchSection, containerStyle]}>
      <View
        style={{
          height: hp(5),
          width:
            iconLeft && iconRight
              ? '75%'
              : iconLeft || iconRight
              ? '88%'
              : '100%',

          justifyContent: 'center',
        }}>
        <TextInput
          editable={isEditable}
          ref={ref}
          style={styles.inputText}
          onChangeText={setText}
          value={dataText}
          {...Props}
          placeholder={placeholder}
        />
      </View>
      {iconRight && <SearchIcon />}
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: '100%',
    height: hp(6),
    borderRadius: hp(1),
    // backgroundColor: Colors.light3,
    paddingHorizontal: hp(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: Colors.pickerColor,
  },
  searchIcon: {
    padding: 10,
  },
  inputText: {
    flex: 1,
    paddingVertical: hp(1),
    // color: Colors.dark1,
    paddingLeft: wp(1),
  },
  iconAttachment: {
    marginRight: 5,
  },
});

export default AppTextinputWithIcons;
