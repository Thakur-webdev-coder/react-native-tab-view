import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#E5ABF3'}]}>
    <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 20}}>
      Welcome Users.......
    </Text>
    <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 17}}>
      You can visit for further tabs.......
    </Text>
    <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 12}}>
      You will find some new ideas...
    </Text>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#E4DB78'}]}>
    <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 20}}>
      Look at some pictures
    </Text>
    <View style={{alignItems: 'center'}}>
      <Image
        style={styles.img}
        source={require('../src/assets/Pink_flower.jpg')}
      />
      <Image
        style={styles.img}
        source={require('../src/assets/redflower.jpg')}
      />
    </View>
  </View>
);
const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#9578E4'}]} />
);
const ForthRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#E4DB78'}]} />
);
// const EmptyRoute=()=>(
//   <View style={[styles.scene,{backgroundColor:'#D2B0A8'}]}></View>
// )

const initialLayout = {width: Dimensions.get('window').width};
const renderScene = SceneMap({
  one: FirstRoute,
  two: SecondRoute,
  three: ThirdRoute,
  four: ForthRoute,
  // empty:EmptyRoute
});

const TabView2 = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'one', title: 'Home', color: '#F5471D'},
    {key: 'two', title: 'About'},
    {key: 'three', title: 'Details'},
    {key: 'four', title: 'Contact'},
    // {key:'empty',title:'Empty'}
  ]);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="black" />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

export default TabView2;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
  },
  scene: {
    flex: 1,
  },
  img: {
    height: '30%',
    width: '30%',
    // resizeMode:'stretch'
    margin: 10,
  },
});
