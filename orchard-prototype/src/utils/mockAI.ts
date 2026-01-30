// Mock AI counselor responses for prototype

export interface AIMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
  metadata?: {
    jobId?: string;
    category?: string;
    confidence?: number;
  };
}

export class MockAICounselor {
  private static responses = {
    greeting: [
      "Hi there! I'm your AI career counselor. I'm here to help you explore different career paths and find what excites you most. What are you curious about today?",
      "Welcome! I love helping students discover their dream careers. Tell me, what subjects or activities do you enjoy most in school?",
      "Hello! I'm excited to help you on your career journey. What kind of work environment sounds most appealing to you - working with people, solving problems, creating things, or something else?"
    ],
    
    jobExploration: [
      "That's a fascinating field! Let me tell you more about what a typical day looks like in this career...",
      "Great choice! This career offers excellent growth opportunities. Here's what you need to know...",
      "I can see why this interests you! Let me break down the different paths you could take...",
      "This is such an exciting field with so many possibilities. Let me share some insights about the industry..."
    ],
    
    careerAdvice: [
      "Based on your interests, I think you'd excel in careers that involve creativity and problem-solving. Have you considered...",
      "Your passion for helping others could lead to some amazing career paths. Let me suggest a few options...",
      "I notice you're drawn to technical fields. There are some incredible opportunities in tech that might surprise you...",
      "Your analytical thinking skills would be perfect for careers in data analysis, research, or consulting..."
    ],
    
    actionPlan: [
      "Let's create a step-by-step plan to help you reach your career goals. First, let's identify your immediate next steps...",
      "I'm going to help you build a personalized action plan. This will keep you on track and motivated...",
      "Great! Now let's turn your career interests into a concrete plan. I'll break this down into manageable steps...",
      "Perfect! Let's create a roadmap that will guide you from where you are now to your dream career..."
    ],
    
    encouragement: [
      "You're doing great! Exploring careers is the first step toward finding your passion.",
      "I'm impressed by your curiosity and willingness to explore different options. That's exactly the right mindset!",
      "Remember, it's okay to be unsure right now. The important thing is that you're taking the time to explore.",
      "You're already ahead of the game by thinking about your future. Let's keep exploring together!"
    ]
  };

  static generateResponse(userMessage: string, context?: any): AIMessage {
    const message = userMessage.toLowerCase();
    let response = "";
    let category = "general";

    // Simple keyword matching for response selection
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      response = this.getRandomResponse('greeting');
      category = "greeting";
    } else if (message.includes('job') || message.includes('career') || message.includes('work')) {
      response = this.getRandomResponse('jobExploration');
      category = "jobExploration";
    } else if (message.includes('help') || message.includes('advice') || message.includes('what should')) {
      response = this.getRandomResponse('careerAdvice');
      category = "careerAdvice";
    } else if (message.includes('plan') || message.includes('next steps') || message.includes('action')) {
      response = this.getRandomResponse('actionPlan');
      category = "actionPlan";
    } else if (message.includes('thank') || message.includes('thanks')) {
      response = this.getRandomResponse('encouragement');
      category = "encouragement";
    } else {
      // Default response for unrecognized input
      response = "That's interesting! Can you tell me more about what you're thinking? I'd love to help you explore this further.";
      category = "general";
    }

    // Add contextual information if available
    if (context?.jobId) {
      response += ` I notice you're looking at a specific career - let me know if you'd like me to dive deeper into that field!`;
    }

    return {
      id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: 'assistant',
      content: response,
      timestamp: new Date().toISOString(),
      metadata: {
        category,
        confidence: 0.85
      }
    };
  }

  private static getRandomResponse(category: keyof typeof MockAICounselor.responses): string {
    const responses = this.responses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  static generateJobInsights(job: any): string {
    return `I can see you're interested in ${job.title}! This is such an exciting field. Here are some key insights:

• **Growth Outlook**: ${job.growthOutlook.replace('_', ' ')} - This field has ${job.growthOutlook === 'rapidly_growing' ? 'excellent' : 'good'} job prospects
• **Education Paths**: You have several options, from ${job.educationRequirements[0]?.type || 'traditional degrees'} to ${job.educationRequirements[1]?.type || 'alternative paths'}
• **Work Environment**: Most professionals in this field work in ${job.workEnvironment} settings
• **Key Skills**: Focus on developing ${job.skills.slice(0, 3).join(', ')} and more

Would you like me to help you create an action plan for pursuing this career?`;
  }

  static generateComparisonInsights(jobs: any[]): string {
    return `Great question! Let me help you compare these ${jobs.length} career options:

${jobs.map((job, index) => `
**${index + 1}. ${job.title}**
• Salary: $${job.salaryRange.min.toLocaleString()} - $${job.salaryRange.max.toLocaleString()}
• Education: ${job.educationRequirements[0]?.type || 'Varies'}
• Growth: ${job.growthOutlook.replace('_', ' ')}
• Skills: ${job.skills.slice(0, 3).join(', ')}
`).join('')}

Based on your interests and goals, I'd recommend focusing on the careers that align best with your personality and learning style. Which aspects are most important to you - salary potential, work-life balance, or growth opportunities?`;
  }
}
