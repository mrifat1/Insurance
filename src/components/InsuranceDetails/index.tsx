/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {Shadow} from '@app/config/theme/shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {data} from './data';
import FontSize from '@app/config/theme/FontSize';

const InsuranceDetails = () => {
  return (
    <View style={[styles.container, Shadow.shadow]}>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: wp(90),
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: FontSize.LL, color: Colors.black}}>
            Popular Insurance{' '}
          </Text>
          <Text>{'.'}</Text>
          <Text style={{bottom: hp(0.16)}}>_____</Text>
        </View>
        <TouchableOpacity>
          <Text style={{fontSize: FontSize.M, color: Colors.black}}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(1.5),
    backgroundColor: Colors.light4,
    minHeight: hp(17),
    width: wp(100),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
export default InsuranceDetails;
