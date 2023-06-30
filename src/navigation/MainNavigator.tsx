// screens/CountdownScreen.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import heartIcon from '../assets/images/heart.jpg';

const CountdownScreen: React.FC = () => {
  const daysCount = 100; // Số ngày yêu

  return (
    <View style={styles.container}>
      <Image source={heartIcon} style={styles.heartImage} />
      <Text style={styles.countdownText}>{daysCount}</Text>
      <Text style={styles.labelText}>ngày yêu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImage: {
    width: 100,
    height: 100,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 16,
  },
  labelText: {
    fontSize: 24,
    marginTop: 8,
  },
});

export default CountdownScreen;
