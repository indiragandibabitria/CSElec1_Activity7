import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },

  header: {
    marginBottom: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#4A156B',
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 20,
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: '#233D63',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 26,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 90,
  },

  emptyText: {
    fontSize: 16,
    color: '#7A869A',
    textAlign: 'center',
  },

  listContent: {
    paddingBottom: 28,
  },

  noteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  noteText: {
    fontSize: 16,
    color: '#1E293B',
    lineHeight: 22,
    marginBottom: 12,
  },

  editInput: {
    borderWidth: 1,
    borderColor: '#64748B',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1E293B',
    backgroundColor: '#F8FAFC',
    marginBottom: 10,
  },

  noteActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },

  smallButton: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 8,
  },

  editButton: {
    backgroundColor: '#233D63',
  },

  saveEditButton: {
    backgroundColor: '#15803D',
  },

  deleteButton: {
    backgroundColor: '#B91C1C',
  },

  cancelButton: {
    backgroundColor: '#E2E8F0',
  },

  smallButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  cancelButtonText: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default styles;