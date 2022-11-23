import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '@app/components/AppButton';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import InsuranceList from '@app/components/InsuranceList';
import ConsultationList from '@app/components/ConsultationList';
import InsuranceDetails from '@app/components/InsuranceDetails';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <InsuranceList />
      <ConsultationList />
      <InsuranceDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light3,
    alignItems: 'center',
    // paddingHorizontal:
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
