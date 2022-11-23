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
import InsuranceList from '@app/components/InsuranceList';
import ConsultationList from '@app/components/ConsultationList';
import InsuranceDetails from '@app/components/InsuranceDetails';
import FontSize from '@app/config/theme/FontSize';
import PremiumAmountCard from '@app/components/PremiumAmountCard';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const PremiumAmountScreen = ({
  route: {
    params: {item},
  },
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.black,
          fontSize: FontSize.LL,
          marginBottom: hp(2),
        }}>
        Premium Amount
      </Text>
      <PremiumAmountCard item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light3,
    // alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
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

export default PremiumAmountScreen;
