// Flexible job data schema

export interface CareerTopic {
  id: string;
  name: string;
  description: string;
  careers: string[]; // Array of career IDs
}

export interface Job {
  id: string;
  title: string;
  description: string;
  topics: string[]; // Array of topic IDs
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  educationRequirements: string[];
  skills: string[];
  workEnvironment: 'office' | 'remote' | 'hybrid' | 'field' | 'travel';
  growthOutlook: 'declining' | 'stable' | 'growing' | 'rapidly_growing';
  // Extended fields for detailed career view
  overview?: string;
  rolesAndResponsibilities?: string[];
  industries?: string[];
  funFact?: string;
  recommendedSkills?: string[];
  careerPathOpportunities?: CareerPath[];
  workEnvironmentDetails?: string;
  prosAndCons?: {
    pros: string[];
    cons: string[];
  };
  realWorldExperience?: string;
  networking?: string;
  resources?: Resource[];
  relatedCareers?: string[];
}

export interface EducationPath {
  type: 'degree' | 'certificate' | 'bootcamp' | 'apprenticeship' | 'self_taught';
  name: string;
  duration: string;
  cost: {
    min: number;
    max: number;
    currency: string;
  };
  institutions: string[];
  online: boolean;
  prerequisites: string[];
}

export interface CareerPath {
  id: string;
  name: string;
  description: string;
  steps: CareerStep[];
  timeline: string;
  difficulty: 'easy' | 'medium' | 'hard';
  successRate: number; // Percentage
}

export interface CareerStep {
  id: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: string;
  resources: Resource[];
  completed?: boolean;
}

export interface Resource {
  type: 'course' | 'book' | 'website' | 'mentor' | 'internship' | 'project';
  title: string;
  description: string;
  url?: string;
  cost?: number;
  free: boolean;
}

export interface JobComparison {
  jobs: Job[];
  comparisonCriteria: string[];
  scores: Record<string, Record<string, number>>; // jobId -> criteria -> score
  recommendations: string[];
}

export interface ActionPlan {
  id: string;
  userId: string;
  interestedJobs: string[];
  selectedCareerPath: string;
  steps: ActionStep[];
  timeline: {
    startDate: string;
    targetDate: string;
    milestones: Milestone[];
  };
  progress: number; // Percentage
  createdAt: string;
  updatedAt: string;
}

export interface ActionStep {
  id: string;
  title: string;
  description: string;
  type: 'education' | 'skill_development' | 'networking' | 'application' | 'interview';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  completed: boolean;
  completedAt?: string;
  resources: Resource[];
  notes?: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate: string;
  completed: boolean;
  completedAt?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  grade: number;
  interests: string[];
  skills: string[];
  personalityType?: string;
  learningStyle?: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
  goals: string[];
  constraints: {
    budget: number;
    timeAvailable: number; // hours per week
    location: string;
  };
  createdAt: string;
  updatedAt: string;
}
