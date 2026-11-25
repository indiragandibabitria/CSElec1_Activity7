import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function NoteItem({ note, onUpdateNote, onDeleteNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(note.text);

  useEffect(() => {
    setEditText(note.text);
  }, [note.text]);

  const handleSaveEdit = () => {
    const trimmed = editText.trim();
    if (!trimmed) {
      return;
    }
    onUpdateNote(note.id, trimmed);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(note.text);
    setIsEditing(false);
  };

  return (
    <View style={styles.noteCard}>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.editInput}
            value={editText}
            onChangeText={setEditText}
            multiline
            autoFocus
          />
          <View style={styles.noteActions}>
            <TouchableOpacity
              style={[styles.smallButton, styles.saveEditButton]}
              onPress={handleSaveEdit}
            >
              <Text style={styles.smallButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.smallButton, styles.cancelButton]}
              onPress={handleCancelEdit}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.noteText}>{note.text}</Text>
          <View style={styles.noteActions}>
            <TouchableOpacity
              style={[styles.smallButton, styles.editButton]}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.smallButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.smallButton, styles.deleteButton]}
              onPress={() => onDeleteNote(note.id)}
            >
              <Text style={styles.smallButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}