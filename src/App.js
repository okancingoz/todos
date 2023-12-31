import React, {Component, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TodoCard from './components/TodoCard';
import TodoEntry from './components/TodoEntry';
import uuid from 'react-native-uuid';

export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [activeTodoCounter, setActiveTodoCounter] = useState(todoList.length);

  useEffect(() => {
    handleActiveTodoCounter();
  }, [todoList]);

  const handleActiveTodoCounter = () => {
    const filteredTodoList = todoList.filter(item => {
      return item.isActive;
    });
    setActiveTodoCounter(filteredTodoList.length);
  };

  const handleOnPress = () => {
    if (text.trim() === '') return;
    setTodoList([...todoList, {id: uuid.v4(), text: text, isActive: true}]);
    setText('');
  };

  const handleOnChangeText = textInput => {
    setText(textInput);
  };

  const handleOnTextPress = id => {
    const mappedTodoList = todoList.map(item => {
      return item.id === id ? {...item, isActive: !item.isActive} : item;
    });
    setTodoList(mappedTodoList);
  };

  const handleOnLongPress = id => {
    const filteredTodoList = todoList.filter(item => {
      return item.id !== id;
    });
    setTodoList(filteredTodoList);
  };

  const renderTodo = ({item}) => (
    <TodoCard
      todo={item}
      onLongPress={handleOnLongPress}
      onPress={handleOnTextPress}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>todos</Text>
        <Text style={styles.activeCounter}>{activeTodoCounter}</Text>
      </View>
      <FlatList
        data={todoList}
        renderItem={renderTodo}
        keyExtractor={item => item.id}
      />
      <TodoEntry
        value={text}
        onChangeText={handleOnChangeText}
        onPress={handleOnPress}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    margin: 16,
   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 48,
    fontWeight: '900',
    color: '#D5B4B4',
    letterSpacing: 1.8,
  },
  activeCounter: {
    fontSize: 24,
    fontWeight: '700',
    color: '#B0A695',
   
  },
});
