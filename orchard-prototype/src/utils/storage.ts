// localStorage utilities for data persistence

export const StorageKeys = {
  INTERESTED_JOBS: 'orchard_interested_jobs',
  ACTION_PLAN: 'orchard_action_plan',
  USER_PROFILE: 'orchard_user_profile',
  AI_CONVERSATION: 'orchard_ai_conversation',
} as const;

export class StorageManager {
  static get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue;
    }
  }

  static set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  }

  static remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }

  static clear(): void {
    try {
      Object.values(StorageKeys).forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
}

// Specific storage functions for our app
export const storage = {
  // Interested jobs management
  getInterestedJobs: (): string[] => 
    StorageManager.get(StorageKeys.INTERESTED_JOBS, []),
  
  addInterestedJob: (jobId: string): void => {
    const jobs = StorageManager.get(StorageKeys.INTERESTED_JOBS, []);
    if (!jobs.includes(jobId)) {
      StorageManager.set(StorageKeys.INTERESTED_JOBS, [...jobs, jobId]);
    }
  },
  
  removeInterestedJob: (jobId: string): void => {
    const jobs = StorageManager.get(StorageKeys.INTERESTED_JOBS, []);
    StorageManager.set(StorageKeys.INTERESTED_JOBS, jobs.filter(id => id !== jobId));
  },

  // Action plan management
  getActionPlan: () => 
    StorageManager.get(StorageKeys.ACTION_PLAN, null),
  
  saveActionPlan: (plan: any) => 
    StorageManager.set(StorageKeys.ACTION_PLAN, plan),

  // User profile management
  getUserProfile: () => 
    StorageManager.get(StorageKeys.USER_PROFILE, null),
  
  saveUserProfile: (profile: any) => 
    StorageManager.set(StorageKeys.USER_PROFILE, profile),

  // AI conversation history
  getConversationHistory: () => 
    StorageManager.get(StorageKeys.AI_CONVERSATION, []),
  
  addToConversation: (message: any) => {
    const history = StorageManager.get(StorageKeys.AI_CONVERSATION, []);
    StorageManager.set(StorageKeys.AI_CONVERSATION, [...history, message]);
  },

  clearConversation: () => 
    StorageManager.remove(StorageKeys.AI_CONVERSATION),
};
