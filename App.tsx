import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainHeading from './components/MainHeading';

const App = () => {
  return (
    <View>
      <MainHeading text={'Allah'} />
      <Text style={styles.text}>Asalamua Alaikum</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
  },
});
export default App;
