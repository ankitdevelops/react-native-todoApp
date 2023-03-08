import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const TodoForm = ({addNewTodo}) => {
  const [todo, setTodo] = useState('');
  //   const [status,setStatus] = useS

  const task = {
    id: uuid(),
    todo,
  };
  console.log(todo);
  const addTodo = () => {
    if (todo === '') {
      Alert.alert('Error!', 'Empty Input Field', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } else {
      addNewTodo(task);
    }
    setTodo('');
  };

  return (
    <View style={styles.todoFormContainer}>
      <TextInput
        style={styles.input}
        placeholder="New Task"
        keyboardType="default"
        value={todo}
        onChangeText={e => {
          setTodo(e);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  todoFormContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,

    bottom: 10,
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#E9DCC9',
  },
  button: {
    backgroundColor: '#E9DCC9',
    height: 40,
    paddingHorizontal: 10,
    width: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 500,
  },
});
