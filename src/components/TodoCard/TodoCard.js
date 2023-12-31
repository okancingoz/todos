import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './TodoCard.styles';

const TodoCard = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.todo.id)}
      onLongPress={() => props.onLongPress(props.todo.id)}
      style={
        props.todo.isActive ? styles.enabledContainer : styles.disabledContainer
      }
      activeOpacity={0.8}>
      <Text style={props.todo.isActive ? styles.enabledText:styles.disabledText}> {props.todo.text} </Text>
    </TouchableOpacity>
  );
};

export default TodoCard;
