// Service for working with career data

import { StorageManager } from './storage';

// Local type definitions to avoid import issues
export interface CareerTopic {
  id: string;
  name: string;
  description: string;
  careers: string[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  topics: string[];
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  educationRequirements: string[];
  skills: string[];
  workEnvironment: 'office' | 'remote' | 'hybrid' | 'field' | 'travel';
  growthOutlook: 'declining' | 'stable' | 'growing' | 'rapidly_growing';
}

export const getCareerTopics = (): CareerTopic[] => {
  return StorageManager.get('orchard_career_topics', []);
};

export const getCareers = (): Career[] => {
  return StorageManager.get('orchard_careers', []);
};

export const getCareersByTopic = (topicId: string): Career[] => {
  const topics = getCareerTopics();
  const careers = getCareers();
  const topic = topics.find(t => t.id === topicId);
  
  if (!topic) return [];
  
  return careers.filter(career => career.topics.includes(topicId));
};

export const getCareerById = (careerId: string): Career | undefined => {
  const careers = getCareers();
  return careers.find(career => career.id === careerId);
};

export const getTopicById = (topicId: string): CareerTopic | undefined => {
  const topics = getCareerTopics();
  return topics.find(topic => topic.id === topicId);
};

export const searchCareers = (query: string): Career[] => {
  const careers = getCareers();
  const searchTerm = query.toLowerCase();
  
  return careers.filter(career => 
    career.title.toLowerCase().includes(searchTerm) ||
    career.description.toLowerCase().includes(searchTerm) ||
    career.skills.some(skill => skill.toLowerCase().includes(searchTerm))
  );
};

export const getRandomCareers = (count: number = 3): Career[] => {
  const careers = getCareers();
  const shuffled = [...careers].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
