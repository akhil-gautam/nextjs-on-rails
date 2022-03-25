import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useUser = create(
  persist(
    (set, _get) => ({
      user: null,
      addUser: (user) => set({ user }),
    }),
    {
      name: 'user-auth',
      getStorage: () => localStorage,
    }
  )
);
