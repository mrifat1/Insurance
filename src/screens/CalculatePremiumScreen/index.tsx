/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '@app/components/AppButton';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import {Picker} from '@react-native-picker/picker';
import AppTextinputWithIcons from '@app/components/AppInput';
import {bankData} from './data';
import {useNavigation} from '@react-navigation/native';

const CalculatePremiumScreen = ({
  route: {
    params: {item},
  },
}) => {
  const [selectedBank, setSelectedBank] = useState();
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [isPeriod, setIsPeriod] = useState(true);
  const [text, setText] = useState();

  const navigation = useNavigation();

  let premiumCal;

  function Calculation() {
    // setNavi(false);
    if (
      selectedBank !== undefined &&
      selectedPeriod !== undefined &&
      text &&
      text >= 0
    ) {
      for (let bankItem in bankData) {
        // console.log('period', bankData[bankItem]);
        // console.log('period', selectedPeriod);
        if (
          bankData[bankItem].name === selectedBank &&
          bankData[bankItem].month === selectedPeriod
        ) {
          const done = item?.coverage - text;
          const interest =
            (done * (bankData[bankItem].rate * 0.01)) / selectedPeriod;
          const cal = done / selectedPeriod;
          premiumCal = Math.floor(cal + interest);
          console.log('prem', premiumCal);
        }
      }
      setIsPeriod(true);
      //   setNavi(true);
      if (premiumCal >= 0) {
        navigation.navigate('PremiumAmountScreen', {
          item: premiumCal,
        });
      } else {
        setIsPeriod(false);
      }
    } else {
      setIsPeriod(false);
    }
  }

  const onSetText = month => {
    setText(month);
    if (month?.length > 0) {
      setIsPeriod(true);
    } else {
      setIsPeriod(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: FontSize.LL, color: Colors.black}}>
        Calculate Your Premium
      </Text>
      <Text
        style={{fontSize: FontSize.L, color: Colors.black, marginTop: hp(0.5)}}>
        Make Safety Life Insurance{' '}
      </Text>
      <Text style={{color: Colors.black, marginTop: hp(0.5)}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
        pellentesque ac dictum faucibus cursus diam.{' '}
      </Text>

      <View
        style={{
          borderWidth: hp(0.1),
          borderColor: Colors.primaryMain,
          borderRadius: hp(0.5),
          marginTop: hp(1.5),
          backgroundColor: Colors.light4,
        }}>
        <Picker
          selectedValue={selectedBank}
          onValueChange={itemValue => setSelectedBank(itemValue)}>
          <Picker.Item label="Select Bank" />
          <Picker.Item label="DBBL" value="DBBL" />
          <Picker.Item label="SCB" value="SCB" />
          <Picker.Item label="EBL" value="EBL" />
        </Picker>
      </View>

      <View
        style={{
          borderWidth: hp(0.1),
          borderColor: Colors.primaryMain,
          borderRadius: hp(0.5),
          marginTop: hp(1.5),
          marginBottom: hp(1.5),
          backgroundColor: Colors.light4,
        }}>
        <Picker
          selectedValue={selectedPeriod}
          onValueChange={itemValue => setSelectedPeriod(itemValue)}>
          <Picker.Item label="Select Period" />
          <Picker.Item label="3 Month" value={3} />
          <Picker.Item label="6 Month" value={6} />
          <Picker.Item label="12 Month" value={12} />
        </Picker>
      </View>

      <AppTextinputWithIcons
        placeholder="Advance Payment"
        containerStyle={{borderColor: Colors.primaryMain}}
        dataText={text}
        setText={onSetText}
      />

      <AppButton
        onPress={() => {
          Calculation();
        }}
        style={{marginTop: hp(3)}}
        title={'Calculate Premium'}
      />
      {!isPeriod ? (
        <Text style={{marginTop: hp(1), color: Colors.red0}}>
          Please fill up Bank,Period & Advance payment properly{' '}
        </Text>
      ) : (
        (null as any)
      )}
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

export default CalculatePremiumScreen;
