// Extracted from Activity 02: Button Counter
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ActionButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'secondary' && styles.secondary]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minHeight: 44, // Minimum touch target from Activity 02
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
