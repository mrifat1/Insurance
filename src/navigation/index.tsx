/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  InsuranceScreen,
  ProductDetailsScreen,
  CalculatePremiumScreen,
  PremiumAmountScreen,
  CompareScreen,
} from '@app/screens';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileIcon from '@app/assets/images/ProfileIcon.svg';
import MenuIcon from '@app/assets/images/MenuIcon.svg';
import BackButton from '@app/assets/images/BackButton.svg';
import AppTextinputWithIcons from '@app/components/AppInput';
import Colors from '@app/config/theme/Colors';
import FontSize from '@app/config/theme/FontSize';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

type props = {
  isSearchBar?: boolean;
  isHome?: boolean;
  isBack?: boolean;
  title?: string;
};

function GenericAppBar({
  isSearchBar = false,
  isHome = false,
  isBack = true,
  title,
}: props) {
  const navigation = useNavigation();
  return (
    // <View
    //   style={{backgroundColor: isHome ? Colors.primaryMain : Colors.light4}}>
    <View
      style={{
        backgroundColor: isHome ? Colors.primaryMain : Colors.light4,
        alignSelf: 'center',
        width: wp(100),
        minHeight: isHome ? hp(6) : hp(7),
        // alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
      }}>
      <View
        style={{
          width: wp(90),
          // backgroundColor: 'red',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            paddingRight: wp(1),
            alignItems: 'center',
          }}>
          {isBack && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackButton stroke={Colors.black} />
            </TouchableOpacity>
          )}
          {!isHome && (
            <Text
              style={{
                marginLeft: hp(1),
                color: Colors.black,
                fontSize: FontSize.L,
              }}>
              {title}
            </Text>
          )}
        </View>

        <View
          style={{
            width: wp(20),
            // backgroundColor: 'red',
            alignSelf: 'flex-end',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: wp(2),
            paddingVertical: hp(0.5),
            marginBottom: isHome ? hp(1) : 0,
          }}>
          <TouchableOpacity>
            <ProfileIcon stroke={isHome ? Colors.light4 : Colors.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuIcon stroke={isHome ? Colors.light4 : Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      {isSearchBar && (
        <AppTextinputWithIcons
          containerStyle={{backgroundColor: '#fafafa', marginBottom: hp(0.5)}}
          setText={text => console.log('text', text)}
          placeholder={'Search here'}
          iconRight
        />
      )}
    </View>
    // </View>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          header: props => (
            <GenericAppBar
              isBack={false}
              isHome={true}
              isSearchBar={true}
              {...props}
            />
          ),
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="InsuranceScreen"
        component={InsuranceScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Insurance list"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Product Details"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CalculatePremiumScreen"
        component={CalculatePremiumScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="PremiumAmountScreen"
        component={PremiumAmountScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CompareScreen"
        component={CompareScreen}
        options={{
          // title: 'Insurance List',
          header: props => (
            <GenericAppBar
              title="Calculate Premium"
              isSearchBar={false}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
