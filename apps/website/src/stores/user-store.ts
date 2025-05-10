import { createStore } from 'zustand/vanilla'

export type UserState = {
  firstname?: string,
  lastname?: string,
  isLoggedIn: boolean,
}

export type UserActions = {
  login: () => void;
}

export type UserStore = UserState & UserActions;

export const defaultState: UserState = {
  isLoggedIn: false,
}

/**
 * Handles logic to set up initial state after performing
 * necessary cookie checks and api fetches.
 */
export async function initUserStore(): Promise<UserState> {
  try {
    // Do the stuff...
    return {
      isLoggedIn: false,
    };
  } catch (error) {
    console.error('Error initializing User Store:', error);
    return defaultState;
  }
}

/**
 * Handles the creation of default store and performs the 
 * initialization once mounted. If you need better dependency injection
 * for testing purposes you could pass initUserStore as an arg instead 
 * of calling it directly.
 */
export function createUserStore() {
  const store = createStore<UserStore>()((set) => ({
    ...defaultState,
    async login() {
      // ...
      set({ isLoggedIn: true })
    }
  }));

  initUserStore().then(store.setState);

  return store;
}