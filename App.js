// Project 01: Photo Journal
// Combines Activities 01-03: Introduction, Components, State Management

import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionButton from './components/ActionButton';
import EntryCard from './components/EntryCard';

export default function App() {
  // State management from Activity 03
  const [entries, setEntries] = useState([
    {
      id: '1',
      title: 'Sample Entry',
      caption: 'This is a sample journal entry to demonstrate the app',
      imageUrl: 'https://picsum.photos/200',
      date: new Date().toLocaleDateString(),
    },
  ]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCaption, setNewCaption] = useState('');

  // TODO #1: Validate `newTitle` and `newCaption` aren't empty (after trim).
  // If both have content, append a new entry with a unique id, the current
  // image URL, and today's `toLocaleDateString()` to `entries`. Then reset the
  // form fields and flip back to the list (`setShowAddForm(false)`).
  // Verify: Saving with both fields filled adds a row and clears the form;
  // saving with either field empty leaves the list unchanged.
  const addEntry = () => {
    const trimmedTitle = newTitle.trim();
    const trimmedCaption = newCaption.trim();

    if (trimmedTitle !== '' && trimmedCaption !== '') {
      const newEntry = {
        id: Date.now().toString(),
        title: trimmedTitle,
        caption: trimmedCaption,
        imageUrl: 'https://picsum.photos/200',
        date: new Date().toLocaleDateString(),
      };

      setEntries([...entries, newEntry]);
      setNewTitle('');
      setNewCaption('');
      setShowAddForm(false);
    }
  };

  // TODO #2: Remove the entry with the matching id from `entries`.
  // Verify: After deletion, the list re-renders without that one row; the
  // others remain in their original order.
  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  // View entry detail function
  const viewEntry = (entry) => {
    setSelectedEntry(entry);
  };

  // Go back to list function
  const backToList = () => {
    setSelectedEntry(null);
    setShowAddForm(false);
  };

  // DETAIL VIEW - Shows when an entry is selected
  if (selectedEntry) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ActionButton title="← Back" onPress={backToList} variant="secondary" />
        </View>
        <Image source={{ uri: selectedEntry.imageUrl }} style={styles.detailImage} />
        <Text style={styles.detailTitle}>{selectedEntry.title}</Text>
        <Text style={styles.detailCaption}>{selectedEntry.caption}</Text>
        <Text style={styles.detailDate}>{selectedEntry.date}</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  // ADD ENTRY FORM - Shows when adding new entry
  if (showAddForm) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add New Entry</Text>
        </View>

        <View style={styles.formContainer}>
          {/* TODO: Add a TextInput for the entry title bound to newTitle/setNewTitle.
              Verify: typing in the title field updates the state visibly above (or in the saved entry). ye*/}

          {/* TODO: Add a TextInput for the caption bound to newCaption/setNewCaption.
              Make it multi-line so longer thoughts read nicely.
              Verify: pressing Enter inside the caption goes to a new line, not submitting the form. */}

          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Caption"
            value={newCaption}
            onChangeText={setNewCaption}
            multiline
          />


          <View style={styles.formButtons}>
            <ActionButton
              title="Cancel"
              onPress={backToList}
              variant="secondary"
            />
            <ActionButton
              title="Save Entry"
              onPress={addEntry}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  // LIST VIEW - Default view showing all entries
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Photo Journal</Text>
      </View>

      {/* Empty state - from Activity 03 pattern */}
      {entries.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No journal entries yet</Text>
          <Text style={styles.emptySubtext}>Tap "New Entry" to start!</Text>
        </View>
      )}

      {/* List of entries - from Activity 03 FlatList pattern */}
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EntryCard entry={item} onPress={() => viewEntry(item)} />
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Footer with New Entry button */}
      <View style={styles.footer}>
        <ActionButton
          title="+ New Entry"
          onPress={() => setShowAddForm(true)}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
  // Detail view styles
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 16,
  },
  detailCaption: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
    lineHeight: 24,
  },
  detailDate: {
    fontSize: 14,
    color: '#999',
    padding: 16,
  },
  // Form styles
  formContainer: {
    padding: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    marginBottom: 12,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
