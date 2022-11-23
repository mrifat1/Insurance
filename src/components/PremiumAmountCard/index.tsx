/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '@app/components/AppButton';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import {Shadow} from '@app/config/theme/shadow';
import Check from '@app/assets/images/Check.svg';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const PremiumAmountCard = ({item}) => {
  return (
    <View style={[styles.container, Shadow.shadow]}>
      <Text
        style={{
          color: Colors.black,
          fontSize: FontSize.M,
          marginBottom: hp(2),
        }}>
        You Required Life Cover to protect your family’s future is
      </Text>
      <Text
        style={{
          color: Colors.black,
          fontSize: FontSize.XL,
          marginBottom: hp(2),
          fontWeight: 'bold',
        }}>
        BDT {item}
      </Text>
      <AppButton
        style={{width: wp(45), marginBottom: hp(3)}}
        title={'Buy Now'}
      />

      <View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: hp(2),
            width: wp(80),
            marginBottom: hp(1),
            // justifyContent: 'space-between',
          }}>
          <Check stroke={Colors.black} style={{marginTop: hp(0.5)}} />
          <Text style={{marginLeft: hp(1), color: Colors.black}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            maecenas aliquam felis tempus scelerisque imperdiet libero, mus
            fermentum.{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: hp(1),
            width: wp(80),
            marginBottom: hp(1),
            // justifyContent: 'space-between',
          }}>
          <Check stroke={Colors.black} style={{marginTop: hp(0.5)}} />
          <Text style={{marginLeft: hp(1), color: Colors.black}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            maecenas aliquam felis tempus scelerisque imperdiet libero, mus
            fermentum.{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.light3,
    alignItems: 'center',
    minHeight: hp(40),
    width: wp(90),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: Colors.light4,
  },
});

export default PremiumAmountCard;
