import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useUser = create(
  persist(
    (set, _get) => ({
      nextRailsUser: null,
      addUser: (user) => set({ nextRailsUser: user }),
    }),
    {
      name: 'nextRailsUser',
      getStorage: () => localStorage,
    }
  )
);
