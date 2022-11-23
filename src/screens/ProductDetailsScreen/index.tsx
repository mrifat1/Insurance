/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '@app/components/AppButton';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '@app/config/theme/FontSize';
import Basket from '@app/assets/images/Basket.svg';
import DummyImage from '@app/assets/images/DummyImage.svg';
import Term from '@app/assets/images/Term.svg';
import Premium from '@app/assets/images/Premium.svg';
import Coverage from '@app/assets/images/Coverage.svg';
import DummySmall from '@app/assets/images/SmallDummy.svg';
import DownArrow from '@app/assets/images/DownArrow.svg';
import UserReviewCard from '@app/components/UserReviewCard';
import {review} from './review';
import {useNavigation} from '@react-navigation/native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const ProductDetailsScreen = ({
  route: {
    params: {item},
  },
}) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingVertical: hp(2)}}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   backgroundColor: 'red',
          width: wp(90),
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontSize: FontSize.LL, color: Colors.black}}>
            Make Safety life insurance
          </Text>
          <Text style={{fontSize: FontSize.L, color: Colors.black}}>
            Life insurance
          </Text>
        </View>
        <Basket />
      </View>
      <View style={{width: wp(90), marginTop: hp(0.5)}}>
        <Text style={{fontSize: FontSize.S, color: Colors.black}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit...
        </Text>
      </View>

      <View style={styles.buyNow}>
        <DummyImage stroke={Colors.black} />
        <View style={{alignItems: 'center'}}>
          <Coverage stroke={Colors.black} />
          <Text style={styles.coverage}>Coverage</Text>
          <Text style={styles.coverage}>{item?.coverage}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Term stroke={Colors.black} />
          <Text style={styles.coverage}>Term</Text>
          <Text style={styles.coverage}>
            {item?.term}
            {' Years'}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Premium stroke={Colors.black} />
          <Text style={styles.coverage}>Premium</Text>
          <Text style={styles.coverage}>{item?.Premium}</Text>
        </View>
      </View>
      <AppButton
        onPress={() =>
          navigation.navigate('CalculatePremiumScreen', {
            item: item,
          })
        }
        style={{
          width: wp(100),
          borderRadius: 0,
          backgroundColor: Colors.blue2,
        }}
        title={'Buy Now'}
      />
      <View style={styles.features}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: FontSize.LL, color: Colors.black}}>
            Key Features{' '}
          </Text>
          <Text style={{color: Colors.black}}>{'.'}</Text>
          <Text style={{bottom: hp(0.16), color: Colors.black}}>_____</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'red',
              alignItems: 'center',
              width: wp(45),
              marginBottom: hp(1),
              marginRight: hp(1),
              //   paddingHorizontal: wp(1),
              //   minHeight: hp(6),
            }}>
            <DummySmall style={styles.dummy} />
            <View style={{width: wp(35)}}>
              <Text style={{color: Colors.black, marginBottom: hp(0.2)}}>
                For Insurence Holder Age
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  marginBottom: hp(0.2),
                  fontWeight: 'bold',
                }}>
                18-65 years
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'red',
              alignItems: 'center',
              width: wp(45),
            }}>
            <DummySmall style={styles.dummy} />
            <View style={{width: wp(35)}}>
              <Text style={{color: Colors.black, marginBottom: hp(0.2)}}>
                For Insurence Holder Age
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  marginBottom: hp(0.2),
                  fontWeight: 'bold',
                }}>
                18-65 years
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'red',
              alignItems: 'center',
              width: wp(45),
              marginRight: hp(1),
            }}>
            <DummySmall style={styles.dummy} />
            <View style={{width: wp(35)}}>
              <Text style={{color: Colors.black, marginBottom: hp(0.2)}}>
                For Insurence Holder Age
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  marginBottom: hp(0.2),
                  fontWeight: 'bold',
                }}>
                18-65 years
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   backgroundColor: 'red',
              alignItems: 'center',
              width: wp(45),
            }}>
            <DummySmall style={styles.dummy} />
            <View style={{width: wp(35)}}>
              <Text style={{color: Colors.black, marginBottom: hp(0.2)}}>
                For Insurence Holder Age
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  marginBottom: hp(0.2),
                  fontWeight: 'bold',
                }}>
                18-65 years
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: hp(1),
          width: wp(100),
          height: hp(5),
          backgroundColor: Colors.blue4,
          paddingHorizontal: wp(3),
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: FontSize.L, color: Colors.black}}>
              Product Details{' '}
            </Text>
            <Text style={{color: Colors.black}}>{'.'}</Text>
            <Text style={{bottom: hp(0.16), color: Colors.black}}>_____</Text>
          </View>
          <DownArrow />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: hp(1),
          width: wp(100),
          height: hp(5),
          backgroundColor: Colors.blue4,
          paddingHorizontal: wp(3),
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: FontSize.L, color: Colors.black}}>
              Product Details{' '}
            </Text>
            <Text style={{color: Colors.black}}>{'.'}</Text>
            <Text style={{bottom: hp(0.16), color: Colors.black}}>_____</Text>
          </View>
          <DownArrow />
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(4),
          width: wp(90),
          justifyContent: 'space-between',
        }}>
        <AppButton
          onPress={() => navigation.navigate('CompareScreen')}
          style={{
            width: wp(35),
            borderRadius: hp(1),
            backgroundColor: Colors.light4,
            borderWidth: hp(0.1),
          }}
          textStyle={{color: Colors.black}}
          title={'Compare'}
        />
        <AppButton
          onPress={() =>
            navigation.navigate('CalculatePremiumScreen', {
              item: item,
            })
          }
          style={{
            width: wp(50),
            borderRadius: hp(1),
            backgroundColor: Colors.light4,
            borderWidth: hp(0.1),
          }}
          textStyle={{color: Colors.black}}
          title={'Calculate premium'}
        />
      </View>

      <View
        style={{
          alignSelf: 'flex-start',
          marginTop: hp(2),
          //   backgroundColor: 'red',
          //   paddingVertical: hp(2),
          //   marginBottom: hp(4),
        }}>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'center',
            justifyContent: 'flex-start',
            marginHorizontal: wp(5),
            marginBottom: hp(1),
          }}>
          <Text style={{fontSize: FontSize.L, color: Colors.black}}>
            User Reviews{' '}
          </Text>
          <Text style={{color: Colors.black}}>{'.'}</Text>
          <Text style={{bottom: hp(0.16), color: Colors.black}}>_____</Text>
        </View>
        <ScrollView
          //   contentContainerStyle={{paddingVertical: hp(2)}}
          //   style={{backgroundColor: 'red'}}
          horizontal={true}>
          {review?.map((item, index) => {
            return (
              <UserReviewCard
                length={review?.length}
                key={index}
                index={index}
                item={item}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: hp(2),
    flex: 1,
    backgroundColor: Colors.light3,

    // paddingHorizontal:
  },
  dummy: {
    marginRight: hp(0.8),
  },
  coverage: {
    color: Colors.black,
  },
  buyNow: {
    height: hp(18),
    backgroundColor: Colors.blue4,
    width: wp(100),
    marginTop: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
  },
  features: {
    height: hp(22),
    backgroundColor: Colors.blue4,
    width: wp(100),
    marginTop: hp(1.5),
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1),
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

export default ProductDetailsScreen;
