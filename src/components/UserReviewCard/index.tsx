/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {Shadow} from '@app/config/theme/shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

type props = {
  item?: any;
  index?: number;
  length?: number;
};

const UserReviewCard = ({item, length, index}: props) => {
  let arrLength;
  if (length) {
    arrLength = length - 1;
  }
  return (
    <TouchableOpacity
      style={[
        styles.container,
        Shadow.shadow,
        index === arrLength && styles.last,
      ]}>
      <Text style={styles.text}>{item?.date}</Text>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>{item?.name}</Text>
      <Text style={styles.text}>{item?.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    backgroundColor: Colors.light4,
    height: hp(13),
    width: wp(55),
    marginLeft: wp(5),
    borderRadius: hp(0.8),
    paddingHorizontal: wp(3),
    // paddingVertical: hp(1),
  },
  text: {
    marginBottom: hp(0.5),
    color: Colors.black,
  },
  footerText: {
    color: Colors.black,
  },
  marginStyle: {
    marginRight: hp(2.5),
  },
  last: {
    marginRight: hp(2),
  },
});
export default UserReviewCard;
