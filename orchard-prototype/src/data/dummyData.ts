// Dummy data for Orchard Career Counselor prototype
// Updated to remove external dependencies

export interface CareerTopic {
  id: string;
  name: string;
  description: string;
  careers: string[]; // Array of career IDs
}

export interface Career {
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
}

export const careerTopics: CareerTopic[] = [
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Marketing careers focus on promoting products, services, and brands to reach target audiences. These roles involve creative strategy, data analysis, and understanding consumer behavior to drive business growth.',
    careers: ['marketing-manager', 'digital-content-creator', 'gtm-engineering', 'revenue-operations']
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Technology careers encompass software development, data analysis, cybersecurity, and emerging tech fields. These roles are at the forefront of innovation, solving complex problems and creating digital solutions.',
    careers: ['virtual-world-designer', 'human-ai-interaction-designer', 'creative-technologist', 'privacy-data-protection-officer', 'ai-ethics-specialist', 'gtm-engineering']
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Construction careers involve building, maintaining, and renovating infrastructure and buildings. These roles require physical work, technical skills, and project management to create safe, functional spaces.',
    careers: ['architect', 'drilling-technician', 'district-superintendent']
  },
  {
    id: 'small-business',
    name: 'Small Business',
    description: 'Small business careers focus on entrepreneurship, local commerce, and hands-on business management. These roles offer variety, direct impact, and the opportunity to build something from the ground up.',
    careers: ['startup-founder-ceo', 'operations-manager', 'venture-capitalist', 'small-business-owner']
  },
  {
    id: 'skilled-trades',
    name: 'Skilled Trades',
    description: 'Skilled trades careers involve specialized technical skills and hands-on work in specific industries. These roles often require apprenticeships or certifications and offer stable, well-paying career paths.',
    careers: ['drilling-technician', 'power-plant-operator', 'dental-hygienist', 'firefighter']
  },
  {
    id: 'human-resources',
    name: 'Human Resources',
    description: 'Human resources careers focus on managing people, culture, and organizational development. These roles involve recruitment, employee relations, and creating positive workplace environments.',
    careers: ['talent-acquisition-recruiting', 'behavioral-scientist', 'hr-manager']
  },
  {
    id: 'beauty-wellness',
    name: 'Beauty & Wellness',
    description: 'Beauty and wellness careers help people look and feel their best through various services and treatments. These roles combine creativity, interpersonal skills, and knowledge of health and aesthetics.',
    careers: ['dental-hygienist', 'wellness-coordinator', 'beauty-consultant']
  },
  {
    id: 'consumer-services',
    name: 'Consumer Services',
    description: 'Consumer services careers focus on helping customers with their needs and providing excellent service experiences. These roles require strong communication skills and a customer-first mindset.',
    careers: ['customer-success', 'home-health-aide', 'consumer-advocate']
  },
  {
    id: 'business-operations',
    name: 'Business Operations',
    description: 'Business operations careers involve managing day-to-day business functions and ensuring smooth organizational processes. These roles require analytical thinking, problem-solving, and operational expertise.',
    careers: ['operations-manager', 'revenue-operations', 'business-analyst']
  },
  {
    id: 'product-engineering',
    name: 'Product & Engineering',
    description: 'Product and engineering careers combine technical skills with user-focused design to create innovative products and solutions. These roles bridge the gap between technology and user needs.',
    careers: ['product-design', 'gtm-engineering', 'creative-technologist', 'virtual-world-designer']
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Government careers involve public service, policy development, and administration at local, state, or federal levels. These roles offer stability, benefits, and the opportunity to serve communities.',
    careers: ['firefighter', 'police-officer', 'government-administrator', 'policy-analyst']
  }
];

export const careers: Career[] = [
  {
    id: 'energy-efficiency-consultant',
    title: 'Energy Efficiency Consultant',
    description: 'Energy efficiency consultants help organizations reduce their energy consumption and environmental impact through strategic planning and implementation. They analyze energy usage patterns, recommend improvements, and work with clients to achieve sustainability goals.',
    topics: ['technology', 'business-operations'],
    salaryRange: { min: 50000, max: 90000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Engineering or Environmental Science', 'Certification in Energy Management'],
    skills: ['Data Analysis', 'Project Management', 'Sustainability', 'Technical Writing'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'drilling-technician',
    title: 'Drilling Technician',
    description: 'Drilling technicians operate and maintain drilling equipment for oil, gas, or water extraction projects. They work in challenging environments, ensuring safe and efficient drilling operations while following strict safety protocols.',
    topics: ['skilled-trades', 'construction'],
    salaryRange: { min: 45000, max: 80000, currency: 'USD' },
    educationRequirements: ['High School Diploma', 'Technical Training', 'Safety Certifications'],
    skills: ['Equipment Operation', 'Safety Protocols', 'Mechanical Aptitude', 'Problem Solving'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'power-plant-operator',
    title: 'Power Plant Operator',
    description: 'Power plant operators control and maintain equipment that generates electricity for communities and industries. They monitor systems, perform maintenance, and ensure reliable power delivery while maintaining safety standards.',
    topics: ['skilled-trades', 'technology'],
    salaryRange: { min: 60000, max: 100000, currency: 'USD' },
    educationRequirements: ['High School Diploma', 'Technical Training', 'Licensing'],
    skills: ['System Monitoring', 'Equipment Maintenance', 'Safety Procedures', 'Technical Troubleshooting'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'energy-analyst',
    title: 'Energy Analyst',
    description: 'Energy analysts study energy markets, consumption patterns, and policy impacts to provide insights for decision-making. They work with data to forecast trends, evaluate efficiency programs, and support strategic energy planning.',
    topics: ['technology', 'business-operations'],
    salaryRange: { min: 55000, max: 95000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Economics, Engineering, or Environmental Science', 'Data Analysis Skills'],
    skills: ['Data Analysis', 'Market Research', 'Statistical Modeling', 'Report Writing'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'petroleum-engineer',
    title: 'Petroleum Engineer',
    description: 'Petroleum engineers design and develop methods for extracting oil and gas from underground reservoirs. They work on drilling operations, reservoir management, and environmental protection in the energy industry.',
    topics: ['technology', 'skilled-trades'],
    salaryRange: { min: 80000, max: 150000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Petroleum Engineering', 'Professional Engineering License'],
    skills: ['Reservoir Engineering', 'Drilling Technology', 'Environmental Compliance', 'Project Management'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'district-superintendent',
    title: 'District Superintendent',
    description: 'District superintendents oversee educational operations across multiple schools within a district. They develop policies, manage budgets, and ensure educational quality while working with school boards and community stakeholders.',
    topics: ['government', 'construction'],
    salaryRange: { min: 90000, max: 150000, currency: 'USD' },
    educationRequirements: ['Master\'s in Education Administration', 'Teaching Experience', 'Administrative License'],
    skills: ['Educational Leadership', 'Budget Management', 'Policy Development', 'Community Relations'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'educational-technology-specialist',
    title: 'Educational Technology Specialist',
    description: 'Educational technology specialists integrate technology into learning environments to enhance student outcomes. They train teachers, implement digital tools, and ensure technology supports educational goals effectively.',
    topics: ['technology', 'education'],
    salaryRange: { min: 50000, max: 85000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Education or Technology', 'Teaching Experience', 'Technology Certifications'],
    skills: ['Educational Technology', 'Teacher Training', 'Digital Tools', 'Curriculum Integration'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'esl-teacher',
    title: 'ESL Teacher',
    description: 'ESL teachers help non-native speakers learn English through specialized instruction and cultural support. They create engaging lessons, assess progress, and help students integrate into English-speaking communities.',
    topics: ['education', 'consumer-services'],
    salaryRange: { min: 40000, max: 70000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Education or English', 'ESL Certification', 'Teaching License'],
    skills: ['Language Instruction', 'Cultural Sensitivity', 'Lesson Planning', 'Student Assessment'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'costume-designer',
    title: 'Costume Designer',
    description: 'Costume designers create clothing and accessories for theatrical productions, films, and television shows. They research historical periods, collaborate with directors, and bring characters to life through visual storytelling.',
    topics: ['beauty-wellness', 'creative-arts'],
    salaryRange: { min: 35000, max: 80000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Fashion Design or Theater', 'Portfolio Development', 'Industry Experience'],
    skills: ['Fashion Design', 'Historical Research', 'Sewing', 'Collaboration'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'stage-manager',
    title: 'Stage Manager',
    description: 'Stage managers coordinate all aspects of theatrical productions from rehearsals to performances. They manage schedules, coordinate technical elements, and ensure smooth execution of live performances.',
    topics: ['creative-arts', 'business-operations'],
    salaryRange: { min: 30000, max: 60000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Theater or Arts Management', 'Production Experience', 'Leadership Skills'],
    skills: ['Project Management', 'Communication', 'Technical Coordination', 'Problem Solving'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'choreographer',
    title: 'Choreographer',
    description: 'Choreographers create and teach dance routines for performances, competitions, and entertainment. They work with dancers to develop movement sequences that tell stories and express emotions through dance.',
    topics: ['beauty-wellness', 'creative-arts'],
    salaryRange: { min: 30000, max: 70000, currency: 'USD' },
    educationRequirements: ['Dance Training', 'Performance Experience', 'Teaching Experience'],
    skills: ['Dance Technique', 'Creative Vision', 'Teaching', 'Performance Direction'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'dancer',
    title: 'Dancer',
    description: 'Dancers perform choreographed routines in various settings including theaters, studios, and entertainment venues. They train extensively, maintain physical fitness, and express artistic vision through movement.',
    topics: ['beauty-wellness', 'creative-arts'],
    salaryRange: { min: 25000, max: 60000, currency: 'USD' },
    educationRequirements: ['Dance Training', 'Performance Experience', 'Physical Fitness'],
    skills: ['Dance Technique', 'Physical Fitness', 'Performance', 'Artistic Expression'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'school-principal',
    title: 'School Principal',
    description: 'School principals lead educational institutions, managing staff, students, and academic programs. They develop school policies, oversee budgets, and create positive learning environments for students and teachers.',
    topics: ['government', 'education'],
    salaryRange: { min: 80000, max: 120000, currency: 'USD' },
    educationRequirements: ['Master\'s in Education Administration', 'Teaching Experience', 'Administrative License'],
    skills: ['Educational Leadership', 'Staff Management', 'Budget Planning', 'Community Relations'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'home-health-aide',
    title: 'Home Health Aide',
    description: 'Home health aides provide personal care and assistance to clients in their homes. They help with daily activities, monitor health conditions, and provide companionship while ensuring client safety and comfort.',
    topics: ['consumer-services', 'beauty-wellness'],
    salaryRange: { min: 25000, max: 40000, currency: 'USD' },
    educationRequirements: ['High School Diploma', 'Certification Program', 'Background Check'],
    skills: ['Personal Care', 'Health Monitoring', 'Communication', 'Compassion'],
    workEnvironment: 'field',
    growthOutlook: 'growing'
  },
  {
    id: 'nurse-practitioner',
    title: 'Nurse Practitioner',
    description: 'Nurse practitioners provide advanced healthcare services including diagnosis, treatment, and patient care. They work independently or with physicians to deliver comprehensive medical care across various specialties.',
    topics: ['beauty-wellness', 'consumer-services'],
    salaryRange: { min: 90000, max: 130000, currency: 'USD' },
    educationRequirements: ['Master\'s in Nursing', 'Nurse Practitioner License', 'Clinical Experience'],
    skills: ['Medical Diagnosis', 'Patient Care', 'Clinical Assessment', 'Treatment Planning'],
    workEnvironment: 'office',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'gtm-engineering',
    title: 'GTM Engineering',
    description: 'GTM (Go-to-Market) engineers bridge the gap between product development and market success. They build tools and systems that help sales and marketing teams effectively promote and sell products.',
    topics: ['technology', 'marketing', 'product-engineering'],
    salaryRange: { min: 80000, max: 140000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Computer Science or Engineering', 'Sales/Marketing Knowledge'],
    skills: ['Software Development', 'Sales Tools', 'Marketing Automation', 'Data Analysis'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'virtual-world-designer',
    title: 'Virtual World Designer',
    description: 'Virtual world designers create immersive digital environments for games, VR experiences, and metaverse platforms. They combine technical skills with creative vision to build engaging virtual spaces and experiences.',
    topics: ['technology', 'product-engineering', 'creative-arts'],
    salaryRange: { min: 60000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Game Design or Computer Science', '3D Modeling Skills', 'VR/AR Experience'],
    skills: ['3D Modeling', 'Game Design', 'VR Development', 'Creative Vision'],
    workEnvironment: 'office',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'human-ai-interaction-designer',
    title: 'Human-AI Interaction Designer',
    description: 'Human-AI interaction designers create intuitive interfaces and experiences for AI-powered products and services. They focus on making AI technology accessible and user-friendly for everyday applications.',
    topics: ['technology', 'product-engineering'],
    salaryRange: { min: 70000, max: 130000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Design or Computer Science', 'AI/ML Knowledge', 'User Experience Design'],
    skills: ['UX Design', 'AI/ML Understanding', 'User Research', 'Interface Design'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'creative-technologist',
    title: 'Creative Technologist',
    description: 'Creative technologists combine artistic vision with technical expertise to create innovative digital experiences. They work at the intersection of art, technology, and user experience to push creative boundaries.',
    topics: ['technology', 'product-engineering', 'creative-arts'],
    salaryRange: { min: 55000, max: 110000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Design, Art, or Technology', 'Technical Skills', 'Creative Portfolio'],
    skills: ['Creative Vision', 'Technical Implementation', 'User Experience', 'Innovation'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'privacy-data-protection-officer',
    title: 'Privacy & Data Protection Officer',
    description: 'Privacy and data protection officers ensure organizations comply with data privacy laws and protect sensitive information. They develop policies, conduct audits, and educate staff on data security best practices.',
    topics: ['technology', 'government'],
    salaryRange: { min: 70000, max: 130000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Law, Technology, or Business', 'Privacy Certifications', 'Legal Knowledge'],
    skills: ['Privacy Law', 'Data Security', 'Compliance', 'Risk Assessment'],
    workEnvironment: 'office',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'ai-ethics-specialist',
    title: 'AI Ethics Specialist',
    description: 'AI ethics specialists ensure artificial intelligence systems are developed and deployed responsibly. They address bias, fairness, and ethical implications of AI technology in various industries and applications.',
    topics: ['technology', 'government'],
    salaryRange: { min: 75000, max: 140000, currency: 'USD' },
    educationRequirements: ['Master\'s in Ethics, Philosophy, or Technology', 'AI/ML Knowledge', 'Ethics Training'],
    skills: ['Ethical Analysis', 'AI/ML Understanding', 'Policy Development', 'Stakeholder Communication'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'digital-content-creator',
    title: 'Digital Content Creator',
    description: 'Digital content creators produce engaging content for online platforms including social media, websites, and streaming services. They combine creativity with technical skills to build audiences and drive engagement.',
    topics: ['marketing', 'creative-arts'],
    salaryRange: { min: 35000, max: 80000, currency: 'USD' },
    educationRequirements: ['Portfolio Development', 'Digital Skills', 'Content Creation Experience'],
    skills: ['Content Creation', 'Social Media', 'Video Production', 'Audience Building'],
    workEnvironment: 'remote',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'behavioral-scientist',
    title: 'Behavioral Scientist',
    description: 'Behavioral scientists study human behavior and decision-making processes to inform business strategies and public policy. They conduct research, analyze data, and provide insights that drive organizational success.',
    topics: ['human-resources', 'business-operations'],
    salaryRange: { min: 60000, max: 110000, currency: 'USD' },
    educationRequirements: ['Master\'s in Psychology, Behavioral Science, or Economics', 'Research Experience', 'Statistical Analysis'],
    skills: ['Research Design', 'Data Analysis', 'Behavioral Psychology', 'Statistical Modeling'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'talent-acquisition-recruiting',
    title: 'Talent Acquisition & Recruiting',
    description: 'Talent acquisition specialists identify, attract, and hire top talent for organizations. They develop recruitment strategies, conduct interviews, and build relationships with candidates to fill key positions.',
    topics: ['human-resources', 'business-operations'],
    salaryRange: { min: 45000, max: 85000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in HR, Business, or Psychology', 'Recruiting Experience', 'Industry Knowledge'],
    skills: ['Recruitment', 'Interviewing', 'Candidate Assessment', 'Relationship Building'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'dental-hygienist',
    title: 'Dental Hygienist',
    description: 'Dental hygienists provide preventive dental care including cleanings, examinations, and patient education. They work closely with dentists to maintain oral health and educate patients on proper dental care.',
    topics: ['beauty-wellness', 'skilled-trades'],
    salaryRange: { min: 50000, max: 80000, currency: 'USD' },
    educationRequirements: ['Associate\'s in Dental Hygiene', 'Licensing', 'Clinical Training'],
    skills: ['Dental Care', 'Patient Education', 'Preventive Care', 'Communication'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'venture-capitalist',
    title: 'Venture Capitalist',
    description: 'Venture capitalists invest in early-stage companies with high growth potential, providing funding and strategic guidance. They evaluate business opportunities, manage investment portfolios, and help startups scale successfully.',
    topics: ['small-business', 'business-operations'],
    salaryRange: { min: 100000, max: 300000, currency: 'USD' },
    educationRequirements: ['MBA or Finance Degree', 'Investment Experience', 'Industry Network'],
    skills: ['Financial Analysis', 'Investment Strategy', 'Business Development', 'Risk Assessment'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'teacher',
    title: 'Teacher',
    description: 'Teachers educate students across various subjects and grade levels, creating engaging learning experiences. They develop lesson plans, assess student progress, and foster critical thinking and creativity in their classrooms.',
    topics: ['education', 'consumer-services'],
    salaryRange: { min: 40000, max: 70000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Education', 'Teaching License', 'Subject Matter Expertise'],
    skills: ['Curriculum Development', 'Classroom Management', 'Student Assessment', 'Communication'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'music-producer',
    title: 'Music Producer',
    description: 'Music producers oversee the creation and recording of musical content, working with artists to achieve their creative vision. They manage technical aspects, provide artistic direction, and ensure high-quality audio production.',
    topics: ['creative-arts', 'technology'],
    salaryRange: { min: 30000, max: 100000, currency: 'USD' },
    educationRequirements: ['Music Education', 'Technical Training', 'Industry Experience'],
    skills: ['Audio Production', 'Music Theory', 'Technical Equipment', 'Artist Collaboration'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'startup-founder-ceo',
    title: 'Startup Founder / CEO',
    description: 'Startup founders and CEOs build companies from the ground up, leading teams and driving growth. They develop business strategies, secure funding, and navigate the challenges of scaling a new organization.',
    topics: ['small-business', 'business-operations'],
    salaryRange: { min: 50000, max: 200000, currency: 'USD' },
    educationRequirements: ['Business Experience', 'Industry Knowledge', 'Leadership Skills'],
    skills: ['Strategic Planning', 'Team Leadership', 'Fundraising', 'Business Development'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    description: 'Operations managers oversee daily business operations to ensure efficiency and productivity. They manage processes, coordinate teams, and implement strategies to improve organizational performance and customer satisfaction.',
    topics: ['business-operations', 'small-business'],
    salaryRange: { min: 60000, max: 110000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Operations', 'Management Experience', 'Process Improvement'],
    skills: ['Process Management', 'Team Leadership', 'Performance Optimization', 'Strategic Planning'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    description: 'Revenue operations professionals optimize sales and marketing processes to drive business growth. They analyze data, streamline workflows, and align teams to maximize revenue generation and customer acquisition.',
    topics: ['marketing', 'business-operations'],
    salaryRange: { min: 70000, max: 130000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Marketing', 'Sales/Marketing Experience', 'Data Analysis Skills'],
    skills: ['Revenue Analysis', 'Process Optimization', 'Data Analysis', 'Cross-functional Collaboration'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Product designers create user-centered solutions for digital and physical products, focusing on usability and user experience. They conduct research, create prototypes, and collaborate with development teams to bring ideas to life.',
    topics: ['product-engineering', 'creative-arts'],
    salaryRange: { min: 65000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Design or HCI', 'Portfolio Development', 'User Research Experience'],
    skills: ['User Experience Design', 'Prototyping', 'User Research', 'Visual Design'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'architect',
    title: 'Architect',
    description: 'Architects design buildings and structures that are functional, safe, and aesthetically pleasing. They work with clients to understand needs, create blueprints, and oversee construction projects from concept to completion.',
    topics: ['construction', 'product-engineering'],
    salaryRange: { min: 60000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Architecture', 'Professional License', 'Internship Experience'],
    skills: ['Design Software', 'Building Codes', 'Project Management', 'Client Communication'],
    workEnvironment: 'office',
    growthOutlook: 'stable'
  },
  {
    id: 'medical-device-sales',
    title: 'Medical Device Sales',
    description: 'Medical device sales professionals sell healthcare equipment and technology to hospitals, clinics, and healthcare providers. They build relationships with medical professionals and help them choose the right solutions for patient care.',
    topics: ['marketing', 'consumer-services'],
    salaryRange: { min: 60000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Healthcare', 'Sales Experience', 'Medical Knowledge'],
    skills: ['Sales Techniques', 'Medical Knowledge', 'Relationship Building', 'Product Expertise'],
    workEnvironment: 'field',
    growthOutlook: 'growing'
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    description: 'Marketing managers develop and execute marketing strategies to promote products and services. They oversee campaigns, manage budgets, and coordinate with creative teams to drive brand awareness and customer engagement.',
    topics: ['marketing', 'business-operations'],
    salaryRange: { min: 60000, max: 110000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Marketing or Business', 'Marketing Experience', 'Analytical Skills'],
    skills: ['Strategic Planning', 'Campaign Management', 'Data Analysis', 'Team Leadership'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'tech-sales',
    title: 'Tech Sales',
    description: 'Tech sales professionals sell software, hardware, and technology solutions to businesses and consumers. They understand technical products, build relationships with clients, and help organizations adopt new technologies.',
    topics: ['marketing', 'technology'],
    salaryRange: { min: 50000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Technology', 'Sales Experience', 'Technical Knowledge'],
    skills: ['Sales Techniques', 'Technical Knowledge', 'Relationship Building', 'Solution Selling'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'firefighter',
    title: 'Firefighter',
    description: 'Firefighters protect communities by responding to fires, medical emergencies, and other crises. They perform rescues, provide emergency medical care, and educate the public about fire safety and prevention.',
    topics: ['government', 'skilled-trades'],
    salaryRange: { min: 40000, max: 80000, currency: 'USD' },
    educationRequirements: ['High School Diploma', 'Fire Academy Training', 'Emergency Medical Training'],
    skills: ['Emergency Response', 'Physical Fitness', 'Medical Care', 'Teamwork'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'police-officer',
    title: 'Police Officer',
    description: 'Police officers maintain public safety by enforcing laws, responding to emergencies, and protecting communities. They patrol neighborhoods, investigate crimes, and work to build positive relationships with community members.',
    topics: ['government', 'consumer-services'],
    salaryRange: { min: 45000, max: 85000, currency: 'USD' },
    educationRequirements: ['High School Diploma', 'Police Academy Training', 'Background Check'],
    skills: ['Law Enforcement', 'Crisis Management', 'Community Relations', 'Physical Fitness'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    description: 'Customer success professionals ensure clients achieve their desired outcomes while using products or services. They build relationships, provide support, and help customers maximize value from their investments.',
    topics: ['consumer-services', 'business-operations'],
    salaryRange: { min: 50000, max: 90000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Communications', 'Customer Service Experience', 'Industry Knowledge'],
    skills: ['Customer Relations', 'Problem Solving', 'Account Management', 'Communication'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  // Travel/Living Abroad Careers
  {
    id: 'international-business-manager',
    title: 'International Business Manager',
    description: 'International business managers oversee global operations, manage cross-cultural teams, and develop strategies for international markets. They travel frequently and work with diverse teams across different countries.',
    topics: ['business-operations', 'marketing'],
    salaryRange: { min: 80000, max: 150000, currency: 'USD' },
    educationRequirements: ['MBA or International Business Degree', 'Language Skills', 'International Experience'],
    skills: ['Cross-cultural Communication', 'Strategic Planning', 'Language Proficiency', 'Global Market Analysis'],
    workEnvironment: 'travel',
    growthOutlook: 'growing'
  },
  {
    id: 'foreign-correspondent',
    title: 'Foreign Correspondent',
    description: 'Foreign correspondents report news from international locations, covering global events and providing insights from different countries. They live abroad and travel extensively to cover breaking news and feature stories.',
    topics: ['marketing', 'consumer-services'],
    salaryRange: { min: 40000, max: 80000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Journalism or Communications', 'Language Skills', 'Reporting Experience'],
    skills: ['Journalism', 'Language Proficiency', 'Cultural Sensitivity', 'Storytelling'],
    workEnvironment: 'travel',
    growthOutlook: 'stable'
  },
  {
    id: 'event-manager',
    title: 'Event Manager',
    description: 'Event managers plan and execute conferences, trade shows, and corporate events around the world. They coordinate with international vendors, manage logistics, and ensure successful events across different countries.',
    topics: ['business-operations', 'marketing'],
    salaryRange: { min: 45000, max: 85000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Event Management or Business', 'Project Management Experience', 'International Experience'],
    skills: ['Event Planning', 'Project Management', 'Vendor Coordination', 'Logistics Management'],
    workEnvironment: 'travel',
    growthOutlook: 'growing'
  },
  {
    id: 'esl-teacher-abroad',
    title: 'ESL Teacher Abroad',
    description: 'ESL teachers abroad teach English to non-native speakers in foreign countries. They live in different cultures, adapt to local customs, and help students learn English while experiencing life in another country.',
    topics: ['education', 'consumer-services'],
    salaryRange: { min: 25000, max: 50000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s Degree', 'TEFL/TESOL Certification', 'Cultural Adaptability'],
    skills: ['Language Teaching', 'Cultural Sensitivity', 'Adaptability', 'Communication'],
    workEnvironment: 'field',
    growthOutlook: 'stable'
  },
  {
    id: 'diplomat',
    title: 'Diplomat',
    description: 'Diplomats represent their country\'s interests abroad, working in embassies and consulates worldwide. They build international relationships, negotiate agreements, and promote cultural exchange between nations.',
    topics: ['government', 'consumer-services'],
    salaryRange: { min: 60000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in International Relations or Political Science', 'Language Skills', 'Government Service'],
    skills: ['Diplomacy', 'Language Proficiency', 'Cultural Understanding', 'Negotiation'],
    workEnvironment: 'travel',
    growthOutlook: 'stable'
  },
  {
    id: 'international-nonprofit-coordinator',
    title: 'International Nonprofit Coordinator',
    description: 'International nonprofit coordinators manage humanitarian and development projects in different countries. They work with local communities, coordinate aid efforts, and implement programs that create positive social impact.',
    topics: ['consumer-services', 'government'],
    salaryRange: { min: 35000, max: 70000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in International Development or Social Work', 'Language Skills', 'Field Experience'],
    skills: ['Project Management', 'Cultural Sensitivity', 'Community Development', 'Language Proficiency'],
    workEnvironment: 'field',
    growthOutlook: 'growing'
  },
  {
    id: 'digital-nomad-developer',
    title: 'Digital Nomad Developer',
    description: 'Digital nomad developers work remotely while traveling the world, building software and web applications from anywhere with internet access. They combine technical skills with a location-independent lifestyle.',
    topics: ['technology', 'product-engineering'],
    salaryRange: { min: 60000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Computer Science or Self-taught', 'Portfolio Development', 'Remote Work Experience'],
    skills: ['Software Development', 'Remote Collaboration', 'Self-discipline', 'Adaptability'],
    workEnvironment: 'remote',
    growthOutlook: 'rapidly_growing'
  },
  // Work-Life Balance Careers
  {
    id: 'remote-project-manager',
    title: 'Remote Project Manager',
    description: 'Remote project managers coordinate teams and projects from anywhere, using digital tools to manage workflows and ensure successful project delivery. They enjoy flexible schedules and work-life balance.',
    topics: ['business-operations', 'technology'],
    salaryRange: { min: 65000, max: 110000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Project Management', 'PMP Certification', 'Remote Work Experience'],
    skills: ['Project Management', 'Remote Collaboration', 'Time Management', 'Communication'],
    workEnvironment: 'remote',
    growthOutlook: 'growing'
  },
  {
    id: 'freelance-consultant',
    title: 'Freelance Consultant',
    description: 'Freelance consultants provide specialized expertise to multiple clients while maintaining control over their schedule and workload. They choose their projects and clients to achieve optimal work-life balance.',
    topics: ['business-operations', 'small-business'],
    salaryRange: { min: 50000, max: 150000, currency: 'USD' },
    educationRequirements: ['Expertise in Specific Field', 'Business Development Skills', 'Client Management Experience'],
    skills: ['Specialized Expertise', 'Client Relations', 'Business Development', 'Time Management'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  {
    id: 'flexible-schedule-nurse',
    title: 'Flexible Schedule Nurse',
    description: 'Flexible schedule nurses work part-time, per-diem, or contract positions that allow them to balance work with personal life. They provide patient care while maintaining control over their working hours.',
    topics: ['beauty-wellness', 'consumer-services'],
    salaryRange: { min: 45000, max: 80000, currency: 'USD' },
    educationRequirements: ['Nursing Degree', 'Licensing', 'Clinical Experience'],
    skills: ['Patient Care', 'Time Management', 'Flexibility', 'Clinical Skills'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  // Adaptability Careers
  {
    id: 'tech-consultant',
    title: 'Tech Consultant',
    description: 'Tech consultants help organizations adopt new technologies and digital solutions. They work on diverse projects, adapt to different industries, and continuously learn new technologies to stay relevant.',
    topics: ['technology', 'business-operations'],
    salaryRange: { min: 70000, max: 130000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Computer Science or Technology', 'Industry Certifications', 'Problem-solving Skills'],
    skills: ['Technology Implementation', 'Problem Solving', 'Adaptability', 'Client Communication'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur',
    description: 'Entrepreneurs start and grow businesses, constantly adapting to market changes and new opportunities. They wear multiple hats, pivot when necessary, and build resilience through continuous learning and adaptation.',
    topics: ['small-business', 'business-operations'],
    salaryRange: { min: 30000, max: 200000, currency: 'USD' },
    educationRequirements: ['Business Experience', 'Risk Tolerance', 'Innovation Mindset'],
    skills: ['Strategic Thinking', 'Adaptability', 'Risk Management', 'Leadership'],
    workEnvironment: 'office',
    growthOutlook: 'growing'
  },
  {
    id: 'change-management-specialist',
    title: 'Change Management Specialist',
    description: 'Change management specialists help organizations navigate transitions and adapt to new processes or technologies. They develop strategies, train teams, and ensure smooth organizational change.',
    topics: ['human-resources', 'business-operations'],
    salaryRange: { min: 60000, max: 110000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Business or Psychology', 'Change Management Certification', 'Organizational Experience'],
    skills: ['Change Management', 'Training', 'Communication', 'Strategic Planning'],
    workEnvironment: 'hybrid',
    growthOutlook: 'growing'
  },
  // Future-Proof Careers
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    description: 'AI/ML engineers develop artificial intelligence and machine learning systems that will shape the future of technology. They work on cutting-edge projects in automation, predictive analytics, and intelligent systems.',
    topics: ['technology', 'product-engineering'],
    salaryRange: { min: 90000, max: 180000, currency: 'USD' },
    educationRequirements: ['Master\'s in Computer Science or AI/ML', 'Programming Skills', 'Mathematical Background'],
    skills: ['Machine Learning', 'Python Programming', 'Data Science', 'Algorithm Development'],
    workEnvironment: 'office',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'renewable-energy-engineer',
    title: 'Renewable Energy Engineer',
    description: 'Renewable energy engineers design and implement sustainable energy solutions including solar, wind, and hydroelectric systems. They work on projects that will power the future with clean, sustainable energy.',
    topics: ['technology', 'construction'],
    salaryRange: { min: 70000, max: 130000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Engineering', 'Renewable Energy Knowledge', 'Project Experience'],
    skills: ['Renewable Energy Systems', 'Project Management', 'Environmental Engineering', 'Technical Design'],
    workEnvironment: 'field',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'healthcare-technology-specialist',
    title: 'Healthcare Technology Specialist',
    description: 'Healthcare technology specialists implement and manage digital health solutions, telemedicine platforms, and medical software. They bridge the gap between healthcare and technology in an aging population.',
    topics: ['technology', 'beauty-wellness'],
    salaryRange: { min: 65000, max: 120000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Health Informatics or Technology', 'Healthcare Experience', 'Technical Skills'],
    skills: ['Health Informatics', 'Technology Implementation', 'Healthcare Systems', 'Data Management'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Data scientists analyze large datasets to extract insights and inform business decisions. They work with big data, machine learning, and statistical analysis to solve complex problems across industries.',
    topics: ['technology', 'business-operations'],
    salaryRange: { min: 80000, max: 150000, currency: 'USD' },
    educationRequirements: ['Master\'s in Data Science or Statistics', 'Programming Skills', 'Analytical Thinking'],
    skills: ['Data Analysis', 'Machine Learning', 'Statistical Modeling', 'Programming'],
    workEnvironment: 'office',
    growthOutlook: 'rapidly_growing'
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Cybersecurity specialists protect organizations from digital threats and cyber attacks. They develop security protocols, monitor systems, and respond to incidents in an increasingly digital world.',
    topics: ['technology', 'government'],
    salaryRange: { min: 75000, max: 140000, currency: 'USD' },
    educationRequirements: ['Bachelor\'s in Cybersecurity or Computer Science', 'Security Certifications', 'Technical Skills'],
    skills: ['Cybersecurity', 'Risk Assessment', 'Incident Response', 'Security Protocols'],
    workEnvironment: 'hybrid',
    growthOutlook: 'rapidly_growing'
  }
];
