import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  enabledContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#92C7CF',
  },
  disabledContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#ccc',

  },
  enabledText: {
    color: '#fff',
  },
  disabledText:{
    color:'#fff',
    textDecorationLine: 'line-through',
  }
});
