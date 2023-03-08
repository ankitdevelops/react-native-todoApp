import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TodoForm from './Components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />
        {/* TaskList */}
        <TaskList todos={todos} deleteTodo={deleteTodo} />
        {/* todoform */}
      </ScrollView>
      <TodoForm addNewTodo={addNewTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
  },
});

export default App;
