import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoEntry.styles';

const TodoEntry = props => {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Add Todo'
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity activeOpacity={0.81} style={styles.saveButton} onPress={props.onPress}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoEntry;
