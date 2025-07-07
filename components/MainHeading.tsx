import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const MainHeading = (props: { title: string }) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.innerMostContainer}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.innerMostContainer}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.innerMostContainer}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.innerMostContainer}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
    margin: 30,
    borderRadius: 10,
    height: 300,
    width: 300,
  },
  innerMostContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
    margin: 10,
    borderRadius: 10,
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'indigo',
  },
});
export default MainHeading;
