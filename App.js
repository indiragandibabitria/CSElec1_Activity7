import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NoteItem from './NoteItem';
import {
  loadNotesFromStorage,
  saveNotesToStorage,
} from './StorageService';
import styles from './styles';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved notes
  useEffect(() => {
    const initializeNotes = async () => {
      const storedNotes = await loadNotesFromStorage();
      setNotes(storedNotes);
      setIsLoaded(true);
    };

    initializeNotes();
  }, []);

  // Save notes when updated
  useEffect(() => {
    if (isLoaded) {
      saveNotesToStorage(notes);
    }
  }, [notes, isLoaded]);

  // Add Note
  const handleAddNote = () => {
    const trimmedText = noteInput.trim();

    if (!trimmedText) {
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      text: trimmedText,
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setNoteInput('');
  };

  // Update Note
  const handleUpdateNote = (id, updatedText) => {
    setNotes((prevNotes) =>
      prevNotes.map((item) =>
        item.id === id
          ? { ...item, text: updatedText }
          : item
      )
    );
  };

  // Delete Note
  const handleDeleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((item) => item.id !== id)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            My Notes
          </Text>

          <Text style={styles.subtitle}>
            Keep your important thoughts in one place.
          </Text>
        </View>

        {/* Note Input */}
        <TextInput
          style={styles.input}
          placeholder="Write your note here..."
          placeholderTextColor="#94A3B8"
          value={noteInput}
          onChangeText={setNoteInput}
          multiline
        />

        {/* Add Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNote}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>
            Add Note
          </Text>
        </TouchableOpacity>

        {/* Saved Notes */}
        <Text style={styles.sectionTitle}>
          My Saved Notes ({notes.length})
        </Text>

        {notes.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              No notes yet. Add your first note!
            </Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <NoteItem
                note={item}
                onUpdateNote={handleUpdateNote}
                onDeleteNote={handleDeleteNote}
              />
            )}
          />
        )}

      </View>
    </SafeAreaView>
  );
}