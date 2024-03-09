import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.taskItem}>{task}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray',
  },
  taskList: {
    marginTop: 0,
  },
  taskItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
