import React from 'react';
import {StyleSheet, View} from 'react-native';
import TabView2 from './src/TabViewExample';
import TabViewComp from './src/TabView';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <TabView2 />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
