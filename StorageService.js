import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_STORAGE_KEY = '@my_notes_list_v1';

// I-load ang naka-save na notes array mula sa device storage gamit ang JSON.parse()
export const loadNotesFromStorage = async () => {
  try {
    const savedJson = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
    if (!savedJson) {
      return [];
    }
    const parsedNotes = JSON.parse(savedJson);
    return Array.isArray(parsedNotes) ? parsedNotes : [];
  } catch (error) {
    console.error('Error loading notes from AsyncStorage:', error);
    return [];
  }
};

// I-save ang updated notes array sa device storage gamit ang JSON.stringify()
export const saveNotesToStorage = async (notes) => {
  try {
    const jsonValue = JSON.stringify(notes);
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving notes to AsyncStorage:', error);
  }
};