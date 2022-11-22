/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {Shadow} from '@app/config/theme/shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ConsultationCard from '../ConsultationCard';

const ConsultationList = () => {
  return (
    <View style={[styles.container, Shadow.shadow]}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <ConsultationCard />
        <ConsultationCard />
        <ConsultationCard style={{marginRight: hp(1.5)}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(1.5),
    backgroundColor: Colors.light4,
    minHeight: hp(17),
    width: wp(100),
    // paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
export default ConsultationList;
