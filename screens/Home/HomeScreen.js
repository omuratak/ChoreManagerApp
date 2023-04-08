import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chore from '../../components/Chore/Chore';

const HomeScreen = () => {
  const chores = [
    { title: 'Wash dishes', assignedTo: 'Alice' },
    { title: 'Take out trash', assignedTo: 'Bob' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chores</Text>
      {chores.map((chore, index) => (
        <Chore key={index} title={chore.title} assignedTo={chore.assignedTo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
