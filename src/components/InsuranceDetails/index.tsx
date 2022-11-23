/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {Shadow} from '@app/config/theme/shadow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import InsuranceDetailsCard from '@app/components/InsuranceDetailsCard';
import {insuranceData} from '../Data';
import {useNavigation} from '@react-navigation/native';

const InsuranceDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, Shadow.shadow]}>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: wp(90),
          alignSelf: 'center',
          marginVertical: hp(1.5),
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
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {insuranceData?.map((item, index) => {
          return (
            <InsuranceDetailsCard
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {
                  item: item,
                })
              }
              key={index}
              title={item?.title}
              length={insuranceData?.length}
              index={index}
              coverage={item?.coverage}
              term={item?.term}
              premium={item?.Premium}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(1.5),
    backgroundColor: Colors.light4,
    minHeight: hp(20),
    width: wp(100),
    // paddingHorizontal: wp(2),
    // paddingVertical: hp(1),
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // flexWrap: 'wrap',
  },
});
export default InsuranceDetails;
