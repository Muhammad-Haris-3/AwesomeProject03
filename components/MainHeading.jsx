import { StyleSheet, Text, View } from 'react-native';

const MainHeading = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
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

export default MainHeading;
