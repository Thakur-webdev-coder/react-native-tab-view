import * as React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#194D33'}} />;
const ForthRoute = () => <View style={{flex: 1, backgroundColor: '#154FC5'}} />;
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  forth: ForthRoute,
});

export default function TabViewComp() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home', color: '#000000'},
    {key: 'second', title: 'About'},
    {key: 'third', title: 'Detail'},
    {key: 'forth', title: 'contact'},
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        style={styles.txt}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  txt: {
    color: 'black',
  },
});
