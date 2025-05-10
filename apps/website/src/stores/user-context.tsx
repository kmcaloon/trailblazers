'use client';

import { createUserStore, UserStore } from './user-store';
import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

export type UserStoreInstance = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreInstance | undefined>(
  undefined,
)

export type UserStoreProviderProps = {
  children: React.ReactNode
}

/**
 * This creates a context with an UserStore instance as its value
 * that is passes to the rest of the app. This pattern is recommended 
 * to avoid creating global stores and instead having everything contained
 * within React's component tree.
 * @see https://zustand.docs.pmnd.rs/guides/nextjs
 */
export function UserStoreProvider({
  children,
}: React.PropsWithChildren) {
  const storeRef = useRef<UserStoreInstance>(null)
  if (storeRef.current === null) {
    storeRef.current = createUserStore()
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  )
}

/**
 * Gives consumers access to the User Store context
 * as well as zustand's userStore functionality.
 */
export function useUserStore<T,>(
  selector: (store: UserStore) => T,
): T {
  const userStoreContext = useContext(UserStoreContext)

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`)
  }

  return useStore(userStoreContext, selector)
}