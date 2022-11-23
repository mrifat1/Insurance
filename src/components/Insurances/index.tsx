/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Life from '@app/assets/images/Life.svg';
import Home from '@app/assets/images/Home.svg';
import Car from '@app/assets/images/Car.svg';
import Travel from '@app/assets/images/Travel.svg';
import Health from '@app/assets/images/Health.svg';
import Cattle from '@app/assets/images/Cattle.svg';
import Disability from '@app/assets/images/Disability.svg';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type props = {
  title?: string;
  data?: any;
};

const InsuranceList = ({title, data}: props) => {
  title = data?.title;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        data?.value === 'life' && navigation.navigate('InsuranceScreen');
      }}
      style={{
        marginVertical: hp(1),
        minHeight: hp(5),
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      {data?.value === 'life' ? (
        <Life stroke={Colors.red0} />
      ) : data?.value === 'health' ? (
        <Health stroke={Colors.primaryPurple} />
      ) : data?.value === 'home' ? (
        <Home stroke={Colors.green0} />
      ) : data?.value === 'car' ? (
        <Car stroke={Colors.orange0} />
      ) : data?.value === 'dis' ? (
        <Disability stroke={Colors.primarySubtle} />
      ) : data?.value === 'travel' ? (
        <Travel stroke={Colors.primaryDarker} />
      ) : (
        data?.value === 'cattle' && <Cattle stroke={Colors.otpActive} />
      )}

      <Text style={{textAlign: 'center', color: Colors.black}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default InsuranceList;
