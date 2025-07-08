import React from 'react';
import { Text, View } from 'react-native';

const MainHeading = (props: { title: string }) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default MainHeading;
