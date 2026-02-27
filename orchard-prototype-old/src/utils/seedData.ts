// Utility to seed localStorage with dummy data

import { StorageManager } from './storage';
import { careerTopics, careers } from '../data/dummyData';

export const seedDummyData = () => {
  // Store career topics
  StorageManager.set('orchard_career_topics', careerTopics);
  
  // Store careers
  StorageManager.set('orchard_careers', careers);
  
  // Initialize empty arrays for user data
  StorageManager.set('orchard_interested_jobs', []);
  StorageManager.set('orchard_action_plan', null);
  StorageManager.set('orchard_user_profile', null);
  StorageManager.set('orchard_ai_conversation', []);
  
  console.log('Dummy data seeded successfully!');
};

// Auto-seed data when this module is imported
if (typeof window !== 'undefined') {
  // Only run in browser environment
  const existingTopics = StorageManager.get('orchard_career_topics', []);
  if (existingTopics.length === 0) {
    seedDummyData();
  }
}
