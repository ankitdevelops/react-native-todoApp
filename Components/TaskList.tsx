import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Todo from './Todo';

const TaskList = ({todos, deleteTodo}) => {
  if (todos.length === 0) {
    return (
      <View>
        <Text style={styles.message}>
          This Looks Nice, You are a Hustler, Add some more task and get some
          more work done.
        </Text>
      </View>
    );
  }
  return (
    <View>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 10,
  },
});
