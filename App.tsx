import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Pic from './Assets/Images/MakkahImg.jpg';

const App = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image source={Pic} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Allah</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'aqua',
    margin: 5,
    marginTop: 50,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'stretch',
    margin: 30,
    marginRight: 5,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
