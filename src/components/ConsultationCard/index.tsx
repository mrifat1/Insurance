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
import Insurances from '@app/components/Insurances';
import DummyImage from '@app/assets/images/DummyImage.svg';
import AppButton from '../AppButton';
import FontSize from '@app/config/theme/FontSize';

type props = {
  style?: any;
};

const ConsultationList = ({style}: props) => {
  return (
    <View style={[styles.container, Shadow.shadow, style]}>
      <View
        style={{
          width: wp(50),
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          paddingVertical: hp(0.5),
          paddingHorizontal: wp(1),
        }}>
        <Text style={{fontSize: FontSize.LL, color: Colors.black}}>
          E-Consultation
        </Text>
        <Text style={{color: Colors.black}}>
          Lorem ipsum dolor sit amet, tet adipiscing elit.{' '}
        </Text>
        <AppButton
          title={'Consultation Now'}
          style={{width: wp(40), height: hp(4), marginTop: hp(1)}}
        />
      </View>
      <DummyImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: hp(1.5),
    backgroundColor: Colors.blue3,
    minHeight: hp(13),
    width: wp(80),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    marginLeft: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: hp(0.7),
    // flexWrap: 'wrap',
  },
});
export default ConsultationList;
