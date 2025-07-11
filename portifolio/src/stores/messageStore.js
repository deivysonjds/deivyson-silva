import { create } from 'zustand';

export const useMessageStore = create((set) => ({
  name: '',
  title: '',
  email: '',
  body: '',
  setName: (name) => set({ name }),
  setTitle: (title) => set({ title }),
  setEmail: (email) => set({ email }),
  setBody: (body) => set({ body }),
  clearForm: () => set({ name: '', title: '', body: '' }),
}));
