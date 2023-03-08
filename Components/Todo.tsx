import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
const Todo = ({todo, deleteTodo}) => {
  return (
    <View>
      <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{todo.todo}</Text>
        {/* <BouncyCheckbox disableBuiltInState fillColor="#23C4ED" /> */}
        <TouchableOpacity
          onPress={() => deleteTodo(todo.id)}
          style={styles.deleteBtn}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#E9DCC9',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 18,
    fontWeight: 500,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    color: 'red',
  },
  deleteBtn: {
    backgroundColor: '#51E1ED',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
