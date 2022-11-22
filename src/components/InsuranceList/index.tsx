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
import Plus from '@app/assets/images/PlusIcon.svg';

const InsuranceList = () => {
  return (
    <View style={[styles.container, Shadow.shadow]}>
      {data.map((item, index) => {
        return <Insurances key={index} data={item} />;
      })}
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: hp(5),
          marginTop: hp(1),
          width: wp(20),
          marginBottom: hp(1.5),
        }}>
        <Plus stroke={Colors.BlueBG} />
        <Text style={{textAlign: 'center', color: Colors.black}}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1.5),
    backgroundColor: Colors.light4,
    minHeight: hp(13),
    width: wp(100),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
export default InsuranceList;
