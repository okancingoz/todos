import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todoList';

export const readDataFromStorage = async () => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    return [];
  }
};

export const saveDataToStorage = async data => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    return;
  }
};
