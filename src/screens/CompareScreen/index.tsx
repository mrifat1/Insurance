import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import {insuranceData} from '@app/components/Data';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const CompareScreen = () => {
  const [text, setText] = useState();
  const [input, setInput] = useState('');
  const [searchTimer, setSearchTimer] = useState(null);
  const [firstValue, setFirstValue] = useState([]);
  const [firstData, setFirstData] = useState();
  const [secondValue, setSecondValue] = useState([]);
  //   let firstValue = [];
  //   let secondValue = [];
  const onSetText = text => {
    // let j = 0;
    for (let i in insuranceData) {
      if (insuranceData[i].title === text) {
        // setFirstValue(item => [...item, insuranceData[i]]);
        firstValue.push(insuranceData[i]);
      } else {
        setFirstValue([]);
      }
    }
    setFirstValue(firstValue);
    //   // setPhoneError(!validatePhone(phoneParam));
    //   // setServerMessage('');
    //   if (month?.length > 0) {
    //     setIsPeriod(true);
    //   } else {
    //     setIsPeriod(false);
    //   }
    if (text?.length == 0) {
      setFirstValue([]);
    }

    console.log('mont', firstValue);
  };
  const onSetSecondText = text => {
    for (let i in insuranceData) {
      let j = 0;
      if (insuranceData[i].title === text) {
        secondValue[j++] = insuranceData[i];
      }
    }
    //   // setPhoneError(!validatePhone(phoneParam));
    //   // setServerMessage('');
    //   if (month?.length > 0) {
    //     setIsPeriod(true);
    //   } else {
    //     setIsPeriod(false);
    //   }
    console.log('mont', text);
  };

  const submitHandler = itemData => {
    console.log('hello', itemData);
    setFirstData(itemData);
    setFirstValue([]);
  };

  type props = {
    itemData?: any;
  };
  const Item = ({itemData}: props) => {
    console.log('itemData', itemData);

    return (
      <TouchableOpacity
        style={[styles.item]}
        onPress={() => submitHandler(itemData)}>
        <View style={styles.titleButton}>
          <Text numberOfLines={1} style={styles.title}>
            {itemData?.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.black, fontSize: FontSize.LL}}>
        Compare Your Offers
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp(2),
        }}>
        <View
          style={{
            width: wp(42),
            borderColor: Colors.black,
            borderWidth: hp(0.1),
            borderRadius: hp(0.5),
          }}>
          <TextInput
            placeholder="Search Here"
            value={input}
            onChangeText={text => {
              if (searchTimer) {
                clearTimeout(searchTimer);
              }
              setInput(text);
              setSearchTimer(
                setTimeout(() => {
                  onSetText(text);
                }, 1000),
              );
            }}
          />
        </View>
        <View
          style={{
            width: wp(42),
            borderColor: Colors.black,
            borderWidth: hp(0.1),
            borderRadius: hp(0.5),
          }}>
          <TextInput
            placeholder="Search Here"
            value={text}
            onChangeText={text => {
              if (searchTimer) {
                clearTimeout(searchTimer);
              }
              setText(text);
              setSearchTimer(
                setTimeout(() => {
                  onSetSecondText(text);
                }, 1000),
              );
            }}
          />
        </View>
      </View>
      <ScrollView>
        {firstValue &&
          firstValue?.map((item, index) => {
            console.log('hello', item);
            return <Item key={index} itemData={item} />;
          })}
      </ScrollView>
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
  item: {
    borderColor: Colors.black,
    borderWidth: hp(0.05),
    padding: hp(3),
    marginTop: hp(0.5),
    width: wp(42),
    backgroundColor: Colors.light4,
    borderRadius: hp(0.5),
  },
  titleButton: {
    width: wp(42),
    height: hp(3),
  },
  title: {
    color: Colors.black,
    width: wp(70),
  },
});

export default CompareScreen;
