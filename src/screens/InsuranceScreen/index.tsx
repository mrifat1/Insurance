import * as React from 'react';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Colors from '@app/config/theme/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {insuranceData} from '@app/components/Data';
import InsuranceDetailsBigCard from '@app/components/InsuranceDetailsBigCard';
import FontSize from '@app/config/theme/FontSize';

const FirstRoute = () => (
  <View style={{backgroundColor: Colors.light3}}>
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      showsVerticalScrollIndicator={false}
      //   style={styles.container}
    >
      {insuranceData?.map((item, index) => {
        return (
          <InsuranceDetailsBigCard
            //   onPress={()=>navigation.navigate('ProductDetailsScreen' {item})}
            item={item}
            key={index}
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
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
const FourthRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}} />
);
const FifthRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
const SixthRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
const SevenRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SevenRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Life'},
    {key: 'second', title: 'Car'},
    {key: 'third', title: 'Home'},
    {key: 'fourth', title: 'Health'},
    {key: 'sixth', title: 'Travel'},
    {key: 'seventh', title: 'Cattle'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route}) => (
        <Text style={{color: Colors.black, fontSize: FontSize.S}}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{backgroundColor: Colors.black}}
      style={{
        backgroundColor: Colors.light4,
        color: Colors.black,
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
