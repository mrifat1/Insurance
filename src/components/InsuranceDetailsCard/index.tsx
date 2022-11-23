/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {Shadow} from '@app/config/theme/shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import InsuranceLogo from '@app/assets/images/InsuranceLogo.svg';
import Basket from '@app/assets/images/Basket.svg';
import {useNavigation} from '@react-navigation/native';

type props = {
  coverage?: number;
  term?: number;
  premium?: number;
  index?: number;
  length?: number;
  onPress?: any;
  title?: string;
};

const InsuranceDetailsCard = ({
  coverage,
  term,
  premium,
  index,
  length,
  onPress,
  title,
}: props) => {
  let arrayLength;
  if (length !== undefined) {
    arrayLength = length - 1;
  }
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        Shadow.shadow,
        index === arrayLength && styles.marginStyle,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //   paddingVertical: hp(1),
          //   paddingHorizontal: wp(2),
        }}>
        <InsuranceLogo style={{marginTop: hp(0.2)}} />
        <Text style={{fontSize: FontSize.L, color: Colors.black}}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CompareScreen')}>
          <Text style={{textDecorationLine: 'underline', color: Colors.black}}>
            Compare
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: hp(0.1),
          width: wp(73),
          backgroundColor: Colors.black,
          alignSelf: 'center',
          marginVertical: hp(1),
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.footerText}>Coverage</Text>
          <Text style={styles.footerText}>{coverage}</Text>
        </View>
        <View>
          <Text style={styles.footerText}>Term</Text>
          <Text style={styles.footerText}>
            0{term}
            {' Year'}
          </Text>
        </View>
        <View>
          <Text style={styles.footerText}>Premium</Text>
          <Text style={styles.footerText}>{premium}</Text>
        </View>
        <Basket style={{marginTop: hp(1)}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(1.5),
    backgroundColor: Colors.light4,
    minHeight: hp(15),
    width: wp(80),
    marginLeft: wp(5),
    borderRadius: hp(0.8),
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
  },
  footerText: {
    color: Colors.black,
  },
  marginStyle: {
    marginRight: hp(2.5),
  },
});
export default InsuranceDetailsCard;
