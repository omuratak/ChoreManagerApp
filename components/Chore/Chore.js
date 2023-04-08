import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chore = ({ title, assignedTo }) => {
  return (
    <View style={styles.choreContainer}>
      <Text style={styles.choreTitle}>{title}</Text>
      <Text style={styles.choreAssignedTo}>{assignedTo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  choreContainer: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  choreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  choreAssignedTo: {
    fontSize: 14,
  },
});

export default Chore;
