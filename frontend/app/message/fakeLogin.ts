export interface User {
  id: string;
  name: string;
  avatar: string;
}

/**
 * Save the user object to localStorage.
 * @param user - The user object to save.
 */
export function saveUserToLocalStorage(user: User): void {
  window.localStorage.setItem("user", JSON.stringify(user));
}

/**
 * Retrieve the current user from localStorage.
 * @returns The user object or null if not found.
 */
export function getCurrentUser(): User | null {
  const userJson = window.localStorage.getItem("user");
  return userJson ? (JSON.parse(userJson) as User) : null;
}
