import { useState, useEffect } from 'react'
import { 
  HomeIcon, 
  AcademicCapIcon, 
  ChartBarIcon, 
  ClipboardDocumentListIcon,
  UserIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PaperClipIcon,
  XMarkIcon,
  TrashIcon,
  StarIcon,
  TableCellsIcon,
  Squares2X2Icon,
  BriefcaseIcon,
  ClipboardDocumentCheckIcon,
  PencilIcon,
  PlusIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import OrchardLogo from './assets/orchard-logo.svg'
import OrchardIcon from './assets/orchard-icon.svg'
import OrchieAgentSuggestion from './assets/orchie-agent-suggestion.svg'
import Navigation from './components/Navigation'
import ChatSidebar from './components/ChatSidebar'
import CareerCard from './components/CareerCard'
import './utils/seedData' // Auto-seed dummy data
import { searchCareers, getCareerTopics, getCareersByTopic } from './utils/dataService'
import { careers } from './data/dummyData'

// Custom Compass Icon component
const CompassIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6l-2 6 2 6 2-6-2-6z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" />
  </svg>
)

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{
    careers: any[];
    topics: any[];
  }>({ careers: [], topics: [] })
  const [showResults, setShowResults] = useState(false)
  const [chatHistory, setChatHistory] = useState<Array<{
    id: string;
    query: string;
    results: { careers: any[]; topics: any[] };
    timestamp: Date;
    aiResponse?: string;
  }>>([])
  const [selectedCareer, setSelectedCareer] = useState<any>(null)
  const [showChatHistoryMenu, setShowChatHistoryMenu] = useState(false)
  const [specificCareersToShow, setSpecificCareersToShow] = useState<string[]>([])
  const [chatWidth, setChatWidth] = useState(() => {
    // Load chat width from localStorage, default to 33.333%
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('orchard-chat-width')
        return saved ? parseFloat(saved) : 33.333
      } catch (error) {
        console.warn('Failed to load chat width from localStorage:', error)
        return 33.333
      }
    }
    return 33.333
  })
  const [isResizing, setIsResizing] = useState(false)
  const [showMainPageResponse, setShowMainPageResponse] = useState(false)
  const [mainPageResponse, setMainPageResponse] = useState('')
  const [mainPageQuestion, setMainPageQuestion] = useState('')
  const [interestedCareers, setInterestedCareers] = useState<any[]>(() => {
    // Load interested careers from localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('orchard-interested-careers')
        return saved ? JSON.parse(saved) : []
      } catch (error) {
        console.warn('Failed to load interested careers from localStorage:', error)
        return []
      }
    }
    return []
  })
  const [focusedCareers, setFocusedCareers] = useState<any[]>(() => {
    // Load focused careers from localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('orchard-focused-careers')
        return saved ? JSON.parse(saved) : []
      } catch (error) {
        console.warn('Failed to load focused careers from localStorage:', error)
        return []
      }
    }
    return []
  })
  const [selectedCareersForComparison, setSelectedCareersForComparison] = useState<any[]>([])
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [showEducationModal, setShowEducationModal] = useState(false)
  const [showAddCareersModal, setShowAddCareersModal] = useState(false)
  const [careersViewMode, setCareersViewMode] = useState<'table' | 'card'>('table')
  const [selectedCareerForEducation, setSelectedCareerForEducation] = useState<any>(null)
  const [previousTab, setPreviousTab] = useState<string | null>(null)
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [isNavRailMode, setIsNavRailMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showChatSidebar, setShowChatSidebar] = useState(false)
  const [mobileChatToggled, setMobileChatToggled] = useState(false)
  const [careerPageTab, setCareerPageTab] = useState('overview')
  const [selectedTopic, setSelectedTopic] = useState<any>(null)
  const [selectedEducationPath, setSelectedEducationPath] = useState<string | null>(null)
  const [selectedCollege, setSelectedCollege] = useState<any>(null)
  const [selectedBootcamp, setSelectedBootcamp] = useState<any>(null)
  const [selectedApprenticeship, setSelectedApprenticeship] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    graduationYear: '',
    currentGrade: '',
    homeState: '',
    designExperience: '',
    designInterests: [] as string[],
    learningStyle: '',
    learningEnvironment: '',
    timeCommitment: '',
    financialAid: '',
    additionalSupport: [] as string[]
  })
  const [actionPlans, setActionPlans] = useState<Array<{
    id: string;
    careerId: string;
    careerTitle: string;
    plan: any;
    createdAt: string;
  }>>([])
  const [currentPlanId, setCurrentPlanId] = useState<string | null>(null)
  const [isEditingPlan, setIsEditingPlan] = useState(false)
  const [milestoneStatuses, setMilestoneStatuses] = useState<Record<string, Record<string, 'completed' | 'in-progress' | 'not-started' | 'blocked'>>>({})
  const [editingMilestoneIndex, setEditingMilestoneIndex] = useState<number | null>(null)
  const [editingMilestone, setEditingMilestone] = useState<{title: string; description: string; timeline: string} | null>(null)
  const [draggedMilestoneIndex, setDraggedMilestoneIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [isEditingCareerGoal, setIsEditingCareerGoal] = useState(false)
  const [editingCareerGoalText, setEditingCareerGoalText] = useState<string>('')
  const [dismissedMessages, setDismissedMessages] = useState<{
    explore: boolean;
    myCareers: boolean;
    careerActionPlan: boolean;
    actionPlanResults: boolean;
  }>(() => {
    // Load dismissed messages from localStorage
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('orchard-dismissed-messages')
        return saved ? JSON.parse(saved) : { explore: false, myCareers: false, careerActionPlan: false, actionPlanResults: false }
      } catch (error) {
        console.warn('Failed to load dismissed messages from localStorage:', error)
        return { explore: false, myCareers: false, careerActionPlan: false, actionPlanResults: false }
      }
    }
    return { explore: false, myCareers: false, careerActionPlan: false, actionPlanResults: false }
  })

  // Helper to get current plan
  const getCurrentPlan = () => {
    if (!currentPlanId) return null
    return actionPlans.find(p => p.id === currentPlanId) || null
  }

  // Load action plans and milestone statuses from localStorage on component mount
  useEffect(() => {
    const savedPlans = localStorage.getItem('orchard-action-plans')
    if (savedPlans) {
      try {
        const parsed = JSON.parse(savedPlans)
        // Migrate old single plan format if it exists
        if (parsed && !Array.isArray(parsed) && parsed.personalInfo) {
          // Old format - convert to new format
          const oldPlan = parsed
          const career = selectedCareerForEducation || focusedCareers[0] || { id: 'unknown', title: 'Unknown Career' }
          const newPlan = {
            id: `plan-${Date.now()}`,
            careerId: career.id,
            careerTitle: career.title,
            plan: oldPlan,
            createdAt: new Date().toISOString()
          }
          setActionPlans([newPlan])
          setCurrentPlanId(newPlan.id)
        } else if (Array.isArray(parsed)) {
          setActionPlans(parsed)
          if (parsed.length > 0 && !currentPlanId) {
            setCurrentPlanId(parsed[0].id)
          }
        }
      } catch (error) {
        console.error('Error loading action plans from localStorage:', error)
      }
    }
    
    const savedMilestones = localStorage.getItem('orchard-milestone-statuses')
    if (savedMilestones) {
      try {
        setMilestoneStatuses(JSON.parse(savedMilestones))
      } catch (error) {
        console.error('Error loading milestone statuses from localStorage:', error)
      }
    }
  }, [])

  // Show "Best viewed on a Desktop" toast when loaded on mobile
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      const t = setTimeout(() => {
        setToastMessage('Best viewed on a Desktop')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 4000)
      }, 800)
      return () => clearTimeout(t)
    }
  }, [])

  // Save action plans to localStorage whenever they change
  useEffect(() => {
    if (actionPlans.length > 0) {
      localStorage.setItem('orchard-action-plans', JSON.stringify(actionPlans))
      // Remove old single plan format if it exists
      localStorage.removeItem('orchard-action-plan')
    }
  }, [actionPlans])

  // Save milestone statuses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orchard-milestone-statuses', JSON.stringify(milestoneStatuses))
  }, [milestoneStatuses])
  

  // Dummy chat history data
  const dummyChatHistory = [
    {
      id: '1',
      title: 'Marketing careers with high growth potential',
      timestamp: new Date().toISOString(),
      preview: 'What are some marketing careers that have high growth potential?'
    },
    {
      id: '2',
      title: 'Tech jobs for beginners',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
      preview: 'I want to get into tech but have no experience. What jobs should I look at?'
    },
    {
      id: '3',
      title: 'Remote work opportunities',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
      preview: 'Show me careers that offer remote work options'
    },
    {
      id: '4',
      title: 'Healthcare careers without medical school',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
      preview: 'What healthcare careers don\'t require going to medical school?'
    },
    {
      id: '5',
      title: 'Creative careers in design',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Week ago
      preview: 'I love being creative. What design careers are available?'
    }
  ]


  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setShowResults(false)
      return
    }

    // Search careers
    const careerResults = searchCareers(searchQuery)
    
    // Search career topics
    const allTopics = getCareerTopics()
    const topicResults = allTopics.filter(topic => 
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const results = {
      careers: careerResults,
      topics: topicResults
    }

    setSearchResults(results)
    setShowResults(true)

    // Add to chat history
    const newChatEntry = {
      id: Date.now().toString(),
      query: searchQuery,
      results: results,
      timestamp: new Date()
    }
    setChatHistory(prev => [...prev, newChatEntry])
    
    // Clear search query after adding to history
    setSearchQuery('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleCareerClick = (career: any) => {
    // Handle career selection - works for both navigation and explore page
    setSelectedCareer(career)
    setSpecificCareersToShow([]) // Clear specific careers view to show career details
    setSelectedTopic(null) // Clear selected topic if any
    
    // If not already on explore page, navigate there
    if (activeTab !== 'explore') {
      setPreviousTab(activeTab)
    setActiveTab('explore')
  }
  }

  const handleTopicClick = (topic: any) => {
    // Handle topic selection - works for both navigation and explore page
    setSelectedTopic(topic)
    setSelectedCareer(null) // Clear any selected career
    setSpecificCareersToShow([]) // Clear specific careers view to show topic details
    
    // If not already on explore page, navigate there
    if (activeTab !== 'explore') {
    setPreviousTab(activeTab)
    setActiveTab('explore')
    }
  }

  const formatTimestamp = (timestamp: string | Date) => {
    const timestampDate = typeof timestamp === 'string' ? new Date(timestamp) : timestamp
    const now = new Date()
    const diffInHours = (now.getTime() - timestampDate.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return 'Today'
    } else if (diffInHours < 48) {
      return 'Yesterday'
    } else if (diffInHours < 168) { // 7 days
      return 'This week'
    } else {
      return timestampDate.toLocaleDateString()
    }
  }

  // Close chat history menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showChatHistoryMenu) {
        const target = event.target as Element
        if (!target.closest('[data-chat-history-menu]')) {
          setShowChatHistoryMenu(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showChatHistoryMenu])

  // Save chat width to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('orchard-chat-width', chatWidth.toString())
      } catch (error) {
        console.warn('Failed to save chat width to localStorage:', error)
      }
    }
  }, [chatWidth])

  // Save interested careers to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('orchard-interested-careers', JSON.stringify(interestedCareers))
      } catch (error) {
        console.warn('Failed to save interested careers to localStorage:', error)
      }
    }
  }, [interestedCareers])

  // Save focused careers to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('orchard-focused-careers', JSON.stringify(focusedCareers))
      } catch (error) {
        console.warn('Failed to save focused careers to localStorage:', error)
      }
    }
  }, [focusedCareers])

  // Save dismissed messages to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('orchard-dismissed-messages', JSON.stringify(dismissedMessages))
      } catch (error) {
        console.warn('Failed to save dismissed messages to localStorage:', error)
      }
    }
  }, [dismissedMessages])

  const dismissMessage = (messageKey: 'explore' | 'myCareers' | 'careerActionPlan' | 'actionPlanResults') => {
    setDismissedMessages(prev => ({ ...prev, [messageKey]: true }))
  }

  // Redirect to main page if user navigates to explore without selecting a career or topic
  // But don't redirect if they're coming from compare page (Compare Careers) or have specific careers to show
  useEffect(() => {
    if (activeTab === 'explore' && !selectedCareer && !selectedTopic && previousTab !== 'compare' && specificCareersToShow.length === 0) {
      setActiveTab('home')
    }
  }, [activeTab, selectedCareer, selectedTopic, previousTab, specificCareersToShow])

  // Handle chat resize
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return
      
      const containerWidth = window.innerWidth
      const newWidth = (e.clientX / containerWidth) * 100
      
      // Calculate minimum width as percentage (300px minimum)
      const minWidthPercent = (300 / containerWidth) * 100
      
      // Constrain between minimum pixel width and 60% of screen width
      const constrainedWidth = Math.min(Math.max(newWidth, minWidthPercent), 60)
      setChatWidth(constrainedWidth)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
  }

  const handleNavigation = (page: string) => {
    setPreviousTab(activeTab)
    setActiveTab(page)
    // Clear main page response and search results when navigating away from home
    if (page !== 'home') {
      setShowMainPageResponse(false)
      setShowResults(false)
      setSearchResults({ careers: [], topics: [] })
    }
    // Clear specific careers when navigating away from explore
    if (page !== 'explore') {
      setSpecificCareersToShow([])
    }
  }

  const toggleInterestedCareer = (career: any) => {
    setInterestedCareers(prev => {
      const isAlreadyInterested = prev.some(c => c.id === career.id)
      if (isAlreadyInterested) {
        return prev.filter(c => c.id !== career.id)
      } else {
        return [...prev, career]
      }
    })
  }

  const isCareerInterested = (career: any) => {
    return interestedCareers.some(c => c.id === career.id)
  }

  const toggleFocusedCareer = (career: any) => {
    setFocusedCareers(prev => {
      const isAlreadyFocused = prev.some(c => c.id === career.id)
      if (isAlreadyFocused) {
        return prev.filter(c => c.id !== career.id)
      } else {
        return [...prev, career]
      }
    })
  }

  const isCareerFocused = (career: any) => {
    return focusedCareers.some(c => c.id === career.id)
  }

  const toggleCareerForComparison = (career: any) => {
    setSelectedCareersForComparison(prev => {
      const isAlreadySelected = prev.some(c => c.id === career.id)
      if (isAlreadySelected) {
        return prev.filter(c => c.id !== career.id)
      } else {
        return [...prev, career]
      }
    })
  }

  const isCareerSelectedForComparison = (career: any) => {
    return selectedCareersForComparison.some(c => c.id === career.id)
  }

  const handleCompareCareers = () => {
    if (selectedCareersForComparison.length === 0) {
      setToastMessage('Please select career(s) you\'d like to compare')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      return
    }
    setPreviousTab(activeTab)
    setActiveTab('compare')
  }

  const showToastNotification = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const removeCareerFromComparison = (career: any) => {
    setSelectedCareersForComparison(prev => prev.filter(c => c.id !== career.id))
  }

  // Handle pill click - ask Orchie about the pill content
  const handlePillClick = (pillText: string, careerTitle: string) => {
    // Generate a query based on the pill and context
    const query = `Tell me more about ${pillText} in ${careerTitle} careers`
    
    // 3 random responses for prototype
    const randomResponses = [
      `Great question about ${pillText}! In ${careerTitle} careers, this is a really important aspect. Many professionals find that ${pillText.toLowerCase()} plays a crucial role in day-to-day work. It's something that can really shape your experience and satisfaction in this field. If you're interested in ${careerTitle}, focusing on developing skills related to ${pillText.toLowerCase()} would be a smart move.`,
      `When it comes to ${pillText} in ${careerTitle} roles, there's a lot to consider. This is often one of the key factors that people either love or find challenging about this career path. The good news is that ${pillText.toLowerCase()} is something you can develop and improve over time. Many successful ${careerTitle} professionals have built their careers around mastering this aspect.`,
      `${pillText} is definitely something to think about if you're considering ${careerTitle} careers. It's one of those elements that can make or break your experience in this field. The best part? You can explore this through internships, projects, or even talking to people already working in ${careerTitle}. Getting hands-on experience with ${pillText.toLowerCase()} will help you decide if this career path is right for you.`
    ]
    
    // Select a random response
    const randomIndex = Math.floor(Math.random() * randomResponses.length)
    const aiResponse = randomResponses[randomIndex]
    
    // Add to chat history with AI response
    const newChatEntry = {
      id: Date.now().toString(),
      query: query,
      results: { careers: [], topics: [] },
      timestamp: new Date(),
      aiResponse: aiResponse
    }
    
    setChatHistory(prev => [...prev, newChatEntry])
    
    // Ensure chat sidebar is visible
    if (!showChatSidebar) {
      setShowChatSidebar(true)
    }
  }

  const handleFinancialAidInfoClick = (aidType: string) => {
    const responses: Record<string, string> = {
      'Self-Funded': `Self-Funded means you'll be covering your education costs primarily through personal savings, family support, or income from work. This is a great option if you have savings set aside or can work while studying. Many students choose this path to avoid taking on debt. You might consider part-time work, summer jobs, or saving up before starting your program.`,
      'Partial Support': `Partial Support means you'll combine multiple funding sources - like personal savings, part-time work, and some financial aid. This is a very common approach! You might use savings for part of your costs, work part-time during school, and apply for scholarships or grants to cover the rest. This gives you flexibility and helps reduce the amount you need to borrow.`,
      'Full Support Needed': `Full Support Needed means you'll need comprehensive financial assistance to cover your education costs. This typically includes scholarships, grants, and student loans. Don't worry - this is completely normal! Many students need full support. Start by researching scholarships and grants (which don't need to be repaid), then explore federal and private student loan options. Fill out the FAFSA to see what federal aid you qualify for.`,
      'Scholarships': `Scholarships are free money for your education that you don't need to repay! They're awarded based on various criteria like academic achievement, financial need, community involvement, or specific interests. Start by checking with your school's financial aid office, then look for local community organizations, professional associations, and online scholarship databases. Apply to as many as you qualify for - every bit helps!`,
      'Grants': `Grants are another form of free money for education, typically based on financial need. The most common is the federal Pell Grant, which you can qualify for by filling out the FAFSA. State governments and colleges also offer grants. Unlike loans, grants don't need to be repaid. Make sure to complete your FAFSA early to maximize your grant eligibility!`,
      'Student Loans': `Student loans are borrowed money that you'll need to repay after graduation, usually with interest. Federal student loans (like Direct Subsidized and Unsubsidized loans) typically have lower interest rates and better repayment options than private loans. Start with federal loans through FAFSA, and only consider private loans if you need additional funding. Remember to only borrow what you need!`
    }

    const query = `Tell me more about ${aidType}`
    const aiResponse = responses[aidType] || `I'd be happy to help you understand ${aidType}! This is an important part of planning your education.`

    const newChatEntry = {
      id: Date.now().toString(),
      query: query,
      results: { careers: [], topics: [] },
      timestamp: new Date(),
      aiResponse: aiResponse
    }
    
    setChatHistory(prev => [...prev, newChatEntry])
  }

  // Get comparison data set based on career ID (deterministic selection)
  const getComparisonData = (careerId: string) => {
    // Use career ID to deterministically select a data set (0-4)
    const hash = careerId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const dataSetIndex = hash % 5
    
    const dataSets = [
      // 0: Software/Technology
      {
        coreWorkActivity: ['Coding', 'Problem Solving', 'Team Collaboration'],
        personalityTraits: ['Detail-Oriented', 'Analytical', 'Creative Problem-Solver'],
        meaningImpact: 'Solves user problems, builds infrastructure, creates digital solutions',
        workEnvironmentNote: 'Remote work options available, flexible hours',
        typicalEntryPath: ['Junior Developer', 'Software Intern', 'Entry-Level Programmer'],
        advancement: 'Can pivot into management, specializations (frontend/backend/full-stack), or entrepreneurship. 2-3 years to mid-level, 5+ years to senior roles.',
        experienceBeforeDegree: ['Portfolio Projects', 'Coding Certifications', 'Tech Club Leadership', 'Open Source Contributions'],
        aiRisk: { level: 'Low', percentage: 25, description: 'Creativity and problem-solving skills remain valuable. AI augments rather than replaces developers.' },
        benefits: {
          pros: ['Health Insurance Access', 'Retirement Matching (401k)', 'Paid Time Off (15-20 days)', 'Performance Bonuses', 'Professional Development Budget', 'Stock Options', 'Flexible Work Schedule'],
          cons: ['High stress during deadlines', 'Long hours during crunch periods', 'Need to stay current with technology', 'Competitive job market']
        },
        educationPaths: [
          { name: 'Traditional College', duration: '4 Years', description: 'Bachelor\'s Degree in Computer Science or related field', cost: '$40,000 - $120,000', pros: 'Comprehensive education, Internship opportunities, Networking', cons: 'Higher cost, Longer time to start working' },
          { name: 'Coding Bootcamp', duration: '3-6 Months', description: 'Intensive programming training', cost: '$10,000 - $20,000', pros: 'Faster entry to workforce, Practical skills, Lower cost', cons: 'Intensive pace, Less theoretical knowledge' },
          { name: 'Self-taught', duration: '6-12 Months', description: 'Online courses and personal projects', cost: '$0 - $1,000', pros: 'Lowest cost, Flexible schedule, Learn at own pace', cons: 'Requires discipline, No formal credential' }
        ]
      },
      // 1: Product Design
      {
        coreWorkActivity: ['User Research', 'Creating Wireframes', 'Prototyping', 'Design Reviews'],
        personalityTraits: ['Empathetic', 'Visual Thinker', 'User-Focused', 'Collaborative'],
        meaningImpact: 'Creates intuitive experiences that make technology accessible and enjoyable for everyone',
        workEnvironmentNote: 'Studio or office environment, collaborative workspaces, design tools',
        typicalEntryPath: ['Junior Designer', 'Design Intern', 'UI/UX Designer'],
        advancement: 'Can advance to Senior Designer, Design Lead, or Product Design Manager. Specialize in UX, UI, or design systems. 3-4 years to mid-level, 6+ years to senior.',
        experienceBeforeDegree: ['Design Portfolio', 'Design Competitions', 'Freelance Projects', 'Design Club Leadership'],
        aiRisk: { level: 'Moderate', percentage: 40, description: 'AI assists with routine tasks, but human creativity and user empathy remain essential.' },
        benefits: {
          pros: ['Health Insurance Access', 'Retirement Matching (401k)', 'Paid Time Off (15-20 days)', 'Design Software Licenses', 'Conference Attendance Budget', 'Creative Freedom', 'Portfolio Development Support'],
          cons: ['Subjective feedback cycles', 'Design changes can be frustrating', 'Need to balance user needs with business goals', 'Tight deadlines for design sprints']
        },
        educationPaths: [
          { name: 'Traditional College', duration: '4 Years', description: 'Bachelor\'s in Design, HCI, or related field', cost: '$45,000 - $130,000', pros: 'Strong foundation, Portfolio development, Industry connections', cons: 'Higher cost, May need additional bootcamp for tech skills' },
          { name: 'Design Bootcamp', duration: '3-6 Months', description: 'Intensive UX/UI design program', cost: '$12,000 - $25,000', pros: 'Focused curriculum, Portfolio building, Industry mentors', cons: 'Intensive schedule, Less theory' },
          { name: 'Self-taught', duration: '8-18 Months', description: 'Online courses, design tools, personal projects', cost: '$500 - $3,000', pros: 'Flexible learning, Lower cost, Build portfolio gradually', cons: 'Requires self-motivation, Need to find mentors' }
        ]
      },
      // 2: Underwater Welder
      {
        coreWorkActivity: ['Underwater Welding', 'Equipment Maintenance', 'Safety Inspections', 'Marine Construction'],
        personalityTraits: ['Physically Fit', 'Risk-Tolerant', 'Detail-Oriented', 'Problem-Solver'],
        meaningImpact: 'Maintains critical infrastructure like bridges, oil rigs, and ships that keep commerce flowing',
        workEnvironmentNote: 'Marine environments, offshore platforms, travel required, physically demanding',
        typicalEntryPath: ['Diver/Welder Apprentice', 'Commercial Diver', 'Entry-Level Underwater Welder'],
        advancement: 'Can advance to Senior Welder, Dive Supervisor, or start own contracting business. Specialize in different welding techniques or inspection. 2-3 years to certified, 5+ years to senior.',
        experienceBeforeDegree: ['Swimming/Diving Skills', 'Welding Certifications', 'Physical Fitness Training', 'Maritime Experience'],
        aiRisk: { level: 'Very Low', percentage: 10, description: 'Physical, hands-on work in challenging environments. Automation not feasible for underwater operations.' },
        benefits: {
          pros: ['High earning potential', 'Hazard pay bonuses', 'Comprehensive health insurance', 'Travel opportunities', 'Early retirement options', 'Strong union benefits', 'Equipment provided'],
          cons: ['Physically demanding work', 'High risk of injury', 'Extended time away from home', 'Weather-dependent work', 'Limited job locations']
        },
        educationPaths: [
          { name: 'Trade School', duration: '1-2 Years', description: 'Commercial Diving & Welding Certification', cost: '$15,000 - $35,000', pros: 'Focused training, Industry certifications, Job placement assistance', cons: 'Intensive physical training, Higher risk occupation' },
          { name: 'Apprenticeship', duration: '2-4 Years', description: 'On-the-job training with certified divers', cost: '$5,000 - $15,000', pros: 'Earn while learning, Real-world experience, Mentorship', cons: 'Lower initial pay, Longer training period' },
          { name: 'Military Training', duration: '4-6 Years', description: 'Navy Diver or similar military program', cost: '$0 (service commitment)', pros: 'Comprehensive training, Veterans benefits, Strong network', cons: 'Service commitment, May require relocation' }
        ]
      },
      // 3: Operational Logistics
      {
        coreWorkActivity: ['Supply Chain Planning', 'Inventory Management', 'Vendor Coordination', 'Process Optimization'],
        personalityTraits: ['Organized', 'Analytical', 'Systems Thinker', 'Results-Driven'],
        meaningImpact: 'Ensures goods and services reach people efficiently, reducing waste and costs',
        workEnvironmentNote: 'Warehouse, office, or hybrid. May involve travel to distribution centers',
        typicalEntryPath: ['Logistics Coordinator', 'Supply Chain Analyst', 'Operations Assistant'],
        advancement: 'Can advance to Operations Manager, Supply Chain Director, or specialize in specific industries. 3-4 years to management, 6+ years to director level.',
        experienceBeforeDegree: ['Retail/Inventory Experience', 'Leadership Roles', 'Analytics Projects', 'Business Club Leadership'],
        aiRisk: { level: 'Moderate', percentage: 35, description: 'AI optimizes routing and inventory, but strategic planning and relationship management remain human-driven.' },
        benefits: {
          pros: ['Health Insurance Access', 'Retirement Matching (401k)', 'Paid Time Off (15-20 days)', 'Performance Bonuses', 'Professional Development Budget', 'Stable work schedule', 'Clear career progression'],
          cons: ['Can be repetitive', 'High pressure during peak seasons', 'Need to adapt to changing systems', 'May require weekend work']
        },
        educationPaths: [
          { name: 'Traditional College', duration: '4 Years', description: 'Bachelor\'s in Supply Chain, Business, or Operations', cost: '$40,000 - $120,000', pros: 'Comprehensive business education, Internships, Professional network', cons: 'Higher cost, General business focus' },
          { name: 'Associate Degree', duration: '2 Years', description: 'Logistics and Supply Chain Management', cost: '$15,000 - $40,000', pros: 'Faster entry, Focused curriculum, Lower cost', cons: 'May need bachelor\'s for advancement' },
          { name: 'Certification Program', duration: '6-12 Months', description: 'APICS or similar logistics certifications', cost: '$2,000 - $8,000', pros: 'Industry-recognized credentials, Flexible schedule, Lower cost', cons: 'Need work experience, Less comprehensive' }
        ]
      },
      // 4: Healthcare/Medical
      {
        coreWorkActivity: ['Patient Care', 'Medical Procedures', 'Documentation', 'Team Collaboration'],
        personalityTraits: ['Compassionate', 'Detail-Oriented', 'Calm Under Pressure', 'Lifelong Learner'],
        meaningImpact: 'Saves lives, improves health outcomes, and provides care during critical moments',
        workEnvironmentNote: 'Hospitals, clinics, or specialized facilities. Shift work common',
        typicalEntryPath: ['Medical Assistant', 'Nurse Aide', 'Entry-Level Technician'],
        advancement: 'Can advance to Registered Nurse, Nurse Practitioner, or specialized roles. Many paths for specialization. 2-4 years for RN, 6+ years for advanced practice.',
        experienceBeforeDegree: ['Volunteer Work', 'Healthcare Shadowing', 'Science Courses', 'First Aid/CPR Certification'],
        aiRisk: { level: 'Low', percentage: 20, description: 'AI assists with diagnostics and records, but human judgment, empathy, and hands-on care are irreplaceable.' },
        benefits: {
          pros: ['Comprehensive health insurance', 'Retirement plans (403b/401k)', 'Paid Time Off (20-25 days)', 'Shift differential pay', 'Tuition reimbursement', 'Job security', 'Meaningful work'],
          cons: ['Emotionally demanding', 'Long shifts (12+ hours)', 'Exposure to illness', 'High stress environment', 'Weekend/holiday work required']
        },
        educationPaths: [
          { name: 'Traditional College', duration: '4 Years', description: 'Bachelor\'s in Nursing or Health Sciences', cost: '$50,000 - $150,000', pros: 'Comprehensive education, Clinical experience, Licensure preparation', cons: 'Higher cost, Rigorous program' },
          { name: 'Associate Degree', duration: '2-3 Years', description: 'Associate Degree in Nursing (ADN)', cost: '$20,000 - $60,000', pros: 'Faster entry, Lower cost, Can bridge to BSN later', cons: 'May limit advancement, Some hospitals prefer BSN' },
          { name: 'Certification Program', duration: '6-18 Months', description: 'CNA, Medical Assistant, or Technician certification', cost: '$1,000 - $10,000', pros: 'Quick entry, Lower cost, Hands-on training', cons: 'Limited scope, Lower pay, May need further education' }
        ]
      }
    ]
    
    return dataSets[dataSetIndex]
  }

  const handleEducationPlanClick = () => {
    if (focusedCareers.length === 0) {
      setToastMessage('Please select a Career to focus on first')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      return
    }
    
    if (focusedCareers.length === 1) {
      setSelectedCareerForEducation(focusedCareers[0])
      setPreviousTab(activeTab)
      setActiveTab('education')
      return
    }
    
    // Multiple careers focused - show modal
    setShowEducationModal(true)
  }

  const handleCreatePlanClick = () => {
    if (focusedCareers.length === 0) {
      setToastMessage('Please select a Career to focus on first')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
      return
    }
    
    // Always show modal, even if there's only 1 career
    setSelectedEducationPath(null)
    setIsEditingPlan(false)
    setCurrentPlanId(null)
    // Auto-select if there's only 1 career, otherwise clear selection
    if (focusedCareers.length === 1) {
      setSelectedCareerForEducation(focusedCareers[0])
    } else {
      setSelectedCareerForEducation(null)
    }
    setShowEducationModal(true)
  }

  const handleEducationCareerSelect = (career: any) => {
    setSelectedCareerForEducation(career)
  }


  const handleEducationContinue = () => {
    if (selectedCareerForEducation) {
      setShowEducationModal(false)
      setPreviousTab(activeTab)
      // Go directly to personal info form (action-plan tab) after selecting career
      setActiveTab('action-plan')
    }
  }

  const handleChoosePath = (pathName: string) => {
    // Ensure a career is selected - if not, check focused careers
    if (!selectedCareerForEducation) {
      if (focusedCareers.length === 0) {
        setToastMessage('Please select a career to focus on first')
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        return
      } else if (focusedCareers.length === 1) {
        setSelectedCareerForEducation(focusedCareers[0])
      } else {
        // Multiple careers - show modal to select
        setShowEducationModal(true)
        return
      }
    }
    setSelectedEducationPath(pathName)
    setIsEditingPlan(false)
    setCurrentPlanId(null) // This is a new plan
    setPreviousTab(activeTab)
    
    // Route to different pages based on selected path
    if (pathName === 'Traditional College') {
      setActiveTab('choose-colleges')
    } else if (pathName === 'Design Bootcamp') {
      setActiveTab('choose-bootcamps')
    } else if (pathName === 'Apprenticeship') {
      setActiveTab('choose-apprenticeships')
    } else if (pathName === 'Self-Taught') {
      // Self-Taught goes directly to review
      setActiveTab('action-plan-summary')
    }
  }

  const clearSelectedPath = () => {
    setSelectedEducationPath(null)
    setActiveTab('education')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleMultiSelect = (field: 'designInterests' | 'additionalSupport', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const generateCareerGoal = (path: string | null, careerTitle: string, duration: number) => {
    if (!path || !careerTitle) return ''
    
    const pathMap: Record<string, {degree: string; verb: string}> = {
      'Traditional College': { degree: 'Bachelor', verb: 'Graduate from' },
      'Design Bootcamp': { degree: 'Certificate', verb: 'Complete' },
      'Self-Taught': { degree: 'Portfolio', verb: 'Build' }
    }
    
    const pathInfo = pathMap[path] || { degree: 'Program', verb: 'Complete' }
    const years = duration >= 12 ? `${Math.round(duration / 12)} years` : `${duration} months`
    
    // Format career title properly
    const careerFormatted = careerTitle
    
    if (path === 'Traditional College') {
      return `${pathInfo.verb} a ${pathInfo.degree} of Design program and become a ${careerFormatted} in ${years}`
    } else if (path === 'Design Bootcamp') {
      return `${pathInfo.verb} a ${pathInfo.degree} program and become a ${careerFormatted} in ${years}`
    } else {
      return `${pathInfo.verb} a strong ${pathInfo.degree} and become a ${careerFormatted} in ${years}`
    }
  }

  const generateActionPlan = () => {
    if (!selectedCareerForEducation) {
      // If no career selected, show error or prompt for selection
      setToastMessage('Please select a career first')
      setShowToast(true)
      return
    }

    const timeline = generateTimeline()
    const duration = timeline.totalDuration
    const defaultGoal = generateCareerGoal(selectedEducationPath, selectedCareerForEducation.title, duration)

    const planData = {
      personalInfo: {
        name: formData.name || 'Student',
        graduationYear: formData.graduationYear || '2030',
        currentGrade: formData.currentGrade || 'Junior',
        homeState: formData.homeState || 'California'
      },
      selectedPath: selectedEducationPath,
      careerGoal: defaultGoal,
      timeline: timeline,
      milestones: generateMilestones(),
      resources: generateResources(),
      financialPlan: generateFinancialPlan(),
      nextSteps: generateNextSteps(),
      estimatedCompletion: calculateCompletionDate()
    }

    if (isEditingPlan && currentPlanId) {
      // Update existing plan
      setActionPlans(prev => prev.map(p => 
        p.id === currentPlanId 
          ? { ...p, plan: planData, careerTitle: selectedCareerForEducation.title }
          : p
      ))
    } else {
      // Create new plan
      const newPlan = {
        id: `plan-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        careerId: selectedCareerForEducation.id,
        careerTitle: selectedCareerForEducation.title,
        plan: planData,
        createdAt: new Date().toISOString()
      }
      setActionPlans(prev => [...prev, newPlan])
      setCurrentPlanId(newPlan.id)
    }
    
    setIsEditingPlan(false)
    setPreviousTab(activeTab)
    setActiveTab('action-plan-results')
  }

  const loadExistingPlanIntoForm = (planId?: string) => {
    const targetPlanId = planId || currentPlanId
    if (!targetPlanId) return
    
    const planToLoad = actionPlans.find(p => p.id === targetPlanId)
    if (!planToLoad) return

    // Set the career for this plan
    const career = careers.find(c => c.id === planToLoad.careerId)
    if (career) {
      setSelectedCareerForEducation(career)
    }

    setIsEditingPlan(true)
    setCurrentPlanId(targetPlanId)
    
    const plan = planToLoad.plan
    
    // Load personal info
    setFormData(prev => ({
      ...prev,
      name: plan.personalInfo?.name || '',
      graduationYear: plan.personalInfo?.graduationYear || '',
      currentGrade: plan.personalInfo?.currentGrade || '',
      homeState: plan.personalInfo?.homeState || ''
    }))
    
    // Load selected path
    setSelectedEducationPath(plan.selectedPath)
    
    // Load form selections based on the plan data
    if (plan.timeline?.intensity === 'part-time') {
      setFormData(prev => ({ ...prev, timeCommitment: 'Part Time' }))
    } else if (plan.timeline?.intensity === 'full-time') {
      setFormData(prev => ({ ...prev, timeCommitment: 'Full Time' }))
    } else {
      setFormData(prev => ({ ...prev, timeCommitment: 'Flexible' }))
    }
    
    // Load financial aid based on funding sources
    if (plan.financialPlan?.fundingSources?.includes('Scholarships') && 
        plan.financialPlan?.fundingSources?.includes('Student Loans')) {
      setFormData(prev => ({ ...prev, financialAid: 'Full Support Needed' }))
    } else if (plan.financialPlan?.fundingSources?.includes('Scholarships')) {
      setFormData(prev => ({ ...prev, financialAid: 'Partial Support' }))
    } else {
      setFormData(prev => ({ ...prev, financialAid: 'Self-Funded' }))
    }
    
    // Load additional support
    const additionalSupport: string[] = []
    if (plan.financialPlan?.fundingSources?.includes('Scholarships')) {
      additionalSupport.push('Scholarships')
    }
    if (plan.financialPlan?.fundingSources?.includes('Grants')) {
      additionalSupport.push('Grants')
    }
    if (plan.financialPlan?.fundingSources?.includes('Student Loans')) {
      additionalSupport.push('Student Loans')
    }
    setFormData(prev => ({ ...prev, additionalSupport }))
    
    // Load design interests based on milestones
    const designInterests: string[] = []
    if (plan.milestones?.some((m: any) => m.title.includes('UX Research'))) {
      designInterests.push('User Research')
    }
    if (plan.milestones?.some((m: any) => m.title.includes('Brand Identity'))) {
      designInterests.push('Visual Design')
    }
    if (plan.milestones?.some((m: any) => m.title.includes('Interactive Prototype'))) {
      designInterests.push('Interaction Design')
    }
    // Default to UI/UX Design if no specific interests found
    if (designInterests.length === 0) {
      designInterests.push('UI/UX Design')
    }
    setFormData(prev => ({ ...prev, designInterests }))
    
    // Set default learning style and environment
    setFormData(prev => ({
      ...prev,
      learningStyle: prev.learningStyle || 'Visual',
      learningEnvironment: prev.learningEnvironment || 'Online',
      designExperience: prev.designExperience || 'Beginner'
    }))
  }

  const clearActionPlan = (planId?: string) => {
    if (planId) {
      // Delete specific plan
      setActionPlans(prev => prev.filter(p => p.id !== planId))
      // Clear milestone statuses for that plan
      setMilestoneStatuses(prev => {
        const updated = { ...prev }
        delete updated[planId]
        return updated
      })
      // If it was the current plan, clear selection
      if (currentPlanId === planId) {
        setCurrentPlanId(null)
      }
    } else {
      // Clear all plans
      setActionPlans([])
      setCurrentPlanId(null)
      setMilestoneStatuses({})
      localStorage.removeItem('orchard-action-plans')
      localStorage.removeItem('orchard-milestone-statuses')
    }
    
    setIsEditingPlan(false)
    // Reset form data
    setFormData({
      name: '',
      graduationYear: '',
      currentGrade: '',
      homeState: '',
      designExperience: '',
      designInterests: [],
      learningStyle: '',
      learningEnvironment: '',
      timeCommitment: '',
      financialAid: '',
      additionalSupport: []
    })
    setSelectedEducationPath(null)
  }

  const toggleMilestoneStatus = (milestoneTitle: string, currentStatus: string, planId?: string) => {
    const targetPlanId = planId || currentPlanId || undefined
    if (!targetPlanId) return
    
    setMilestoneStatuses(prev => {
      const statusOrder = ['not-started', 'in-progress', 'completed', 'blocked']
      const currentIndex = statusOrder.indexOf(currentStatus)
      const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length] as 'completed' | 'in-progress' | 'not-started' | 'blocked'
      
      return {
        ...prev,
        [targetPlanId]: {
          ...(prev[targetPlanId] || {}),
          [milestoneTitle]: nextStatus
        }
      }
    })
  }

  const getMilestoneStatus = (milestoneTitle: string, planId?: string) => {
    const targetPlanId = planId || currentPlanId || undefined
    if (!targetPlanId) return 'not-started'
    return milestoneStatuses[targetPlanId]?.[milestoneTitle] || 'not-started'
  }

  const getStatusCounts = (planId?: string) => {
    const targetPlanId = planId || currentPlanId || undefined
    if (!targetPlanId) return { completed: 0, inProgress: 0, notStarted: 0, blocked: 0 }
    
    const plan = actionPlans.find(p => p.id === targetPlanId)
    if (!plan?.plan?.milestones) return { completed: 0, inProgress: 0, notStarted: 0, blocked: 0 }
    
    return plan.plan.milestones.reduce((acc: any, milestone: any) => {
      const status = getMilestoneStatus(milestone.title, targetPlanId)
      if (status === 'completed') acc.completed++
      else if (status === 'in-progress') acc.inProgress++
      else if (status === 'blocked') acc.blocked++
      else acc.notStarted++
      return acc
    }, { completed: 0, inProgress: 0, notStarted: 0, blocked: 0 })
  }

  const updateMilestones = (updatedMilestones: any[]) => {
    if (!currentPlanId) return
    
    setActionPlans(prev => prev.map(p => 
      p.id === currentPlanId 
        ? { ...p, plan: { ...p.plan, milestones: updatedMilestones } }
        : p
    ))
  }

  const startEditingMilestone = (index: number) => {
    const plan = getCurrentPlan()
    if (!plan) return
    
    const milestone = plan.plan.milestones[index]
    setEditingMilestoneIndex(index)
    setEditingMilestone({
      title: milestone.title,
      description: milestone.description,
      timeline: milestone.timeline
    })
  }

  const cancelEditingMilestone = () => {
    setEditingMilestoneIndex(null)
    setEditingMilestone(null)
  }

  const saveMilestone = () => {
    if (editingMilestoneIndex === null || !editingMilestone || !currentPlanId) return
    
    const plan = getCurrentPlan()
    if (!plan) return
    
    const oldMilestone = plan.plan.milestones[editingMilestoneIndex]
    const updatedMilestones = [...plan.plan.milestones]
    updatedMilestones[editingMilestoneIndex] = {
      ...updatedMilestones[editingMilestoneIndex],
      ...editingMilestone
    }
    
    // If title changed, update milestone status key
    if (oldMilestone.title !== editingMilestone.title) {
      setMilestoneStatuses(prev => {
        const updated = { ...prev }
        if (updated[currentPlanId]?.[oldMilestone.title]) {
          updated[currentPlanId] = {
            ...updated[currentPlanId],
            [editingMilestone.title]: updated[currentPlanId][oldMilestone.title]
          }
          delete updated[currentPlanId][oldMilestone.title]
        }
        return updated
      })
    }
    
    updateMilestones(updatedMilestones)
    cancelEditingMilestone()
  }

  const addMilestone = () => {
    if (!currentPlanId) return
    
    const plan = getCurrentPlan()
    if (!plan) return
    
    const newMilestone = {
      title: 'New Milestone',
      description: 'Add a description for this milestone',
      timeline: 'Month 1',
      status: 'upcoming',
      priority: 'medium'
    }
    
    const updatedMilestones = [...plan.plan.milestones, newMilestone]
    updateMilestones(updatedMilestones)
    
    // Start editing the new milestone
    setEditingMilestoneIndex(updatedMilestones.length - 1)
    setEditingMilestone({
      title: newMilestone.title,
      description: newMilestone.description,
      timeline: newMilestone.timeline
    })
  }

  const deleteMilestone = (index: number) => {
    if (!currentPlanId) return
    
    const plan = getCurrentPlan()
    if (!plan) return
    
    const milestone = plan.plan.milestones[index]
    const milestoneTitle = milestone.title
    
    // Remove milestone status if it exists
    setMilestoneStatuses(prev => {
      const updated = { ...prev }
      if (updated[currentPlanId]?.[milestoneTitle]) {
        delete updated[currentPlanId][milestoneTitle]
      }
      return updated
    })
    
    const updatedMilestones = plan.plan.milestones.filter((_: any, i: number) => i !== index)
    updateMilestones(updatedMilestones)
    
    if (editingMilestoneIndex === index) {
      cancelEditingMilestone()
    } else if (editingMilestoneIndex !== null && editingMilestoneIndex > index) {
      setEditingMilestoneIndex(editingMilestoneIndex - 1)
    }
  }

  const moveMilestone = (index: number, direction: 'up' | 'down') => {
    if (!currentPlanId) return
    
    const plan = getCurrentPlan()
    if (!plan) return
    
    const milestones = [...plan.plan.milestones]
    
    if (direction === 'up' && index > 0) {
      [milestones[index], milestones[index - 1]] = [milestones[index - 1], milestones[index]]
      updateMilestones(milestones)
      if (editingMilestoneIndex === index) {
        setEditingMilestoneIndex(index - 1)
      } else if (editingMilestoneIndex === index - 1) {
        setEditingMilestoneIndex(index)
      }
    } else if (direction === 'down' && index < milestones.length - 1) {
      [milestones[index], milestones[index + 1]] = [milestones[index + 1], milestones[index]]
      updateMilestones(milestones)
      if (editingMilestoneIndex === index) {
        setEditingMilestoneIndex(index + 1)
      } else if (editingMilestoneIndex === index + 1) {
        setEditingMilestoneIndex(index)
      }
    }
  }

  const handleDragStart = (index: number) => {
    setDraggedMilestoneIndex(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    
    if (draggedMilestoneIndex === null || draggedMilestoneIndex === dropIndex) {
      setDraggedMilestoneIndex(null)
      setDragOverIndex(null)
      return
    }
    
    if (!currentPlanId) return
    
    const plan = getCurrentPlan()
    if (!plan) return
    
    const milestones = [...plan.plan.milestones]
    const draggedMilestone = milestones[draggedMilestoneIndex]
    
    // Remove the dragged item from its original position
    milestones.splice(draggedMilestoneIndex, 1)
    
    // Insert it at the new position
    milestones.splice(dropIndex, 0, draggedMilestone)
    
    updateMilestones(milestones)
    
    // Update editing index if needed
    if (editingMilestoneIndex === draggedMilestoneIndex) {
      setEditingMilestoneIndex(dropIndex)
    } else if (editingMilestoneIndex !== null) {
      // Adjust editing index based on the move
      if (draggedMilestoneIndex < editingMilestoneIndex && dropIndex >= editingMilestoneIndex) {
        setEditingMilestoneIndex(editingMilestoneIndex - 1)
      } else if (draggedMilestoneIndex > editingMilestoneIndex && dropIndex <= editingMilestoneIndex) {
        setEditingMilestoneIndex(editingMilestoneIndex + 1)
      } else if (draggedMilestoneIndex < dropIndex && editingMilestoneIndex > draggedMilestoneIndex && editingMilestoneIndex <= dropIndex) {
        setEditingMilestoneIndex(editingMilestoneIndex - 1)
      } else if (draggedMilestoneIndex > dropIndex && editingMilestoneIndex < draggedMilestoneIndex && editingMilestoneIndex >= dropIndex) {
        setEditingMilestoneIndex(editingMilestoneIndex + 1)
      }
    }
    
    setDraggedMilestoneIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedMilestoneIndex(null)
    setDragOverIndex(null)
  }


  const generateTimeline = () => {
    const path = selectedEducationPath
    const experience = formData.designExperience
    const timeCommitment = formData.timeCommitment
    
    let baseDuration = 0
    let intensity = 'moderate'
    
    if (path === 'Traditional College') {
      baseDuration = 48 // 4 years
    } else if (path === 'Design Bootcamp') {
      baseDuration = 6
      intensity = 'intensive'
    } else if (path === 'Self-Taught') {
      baseDuration = experience === 'None' ? 12 : experience === 'Beginner' ? 8 : 6
    } else if (path === 'Apprenticeship') {
      baseDuration = 12
    }
    
    // Adjust based on time commitment
    if (timeCommitment === 'Part Time') {
      baseDuration = Math.ceil(baseDuration * 1.5)
      intensity = 'part-time'
    } else if (timeCommitment === 'Full Time' && path !== 'Traditional College') {
      baseDuration = Math.ceil(baseDuration * 0.8)
      intensity = 'full-time'
    }
    
    return {
      totalDuration: baseDuration,
      intensity: intensity,
      phases: generatePhases(baseDuration, path ?? '')
    }
  }

  const generatePhases = (duration: number, path: string) => {
    const phases = []
    
    if (path === 'Traditional College') {
      phases.push(
        { name: 'Foundation Year', duration: 12, description: 'Core design principles, art history, basic tools' },
        { name: 'Skill Building', duration: 12, description: 'Advanced design techniques, user research, prototyping' },
        { name: 'Specialization', duration: 12, description: 'Focus on chosen design track, portfolio development' },
        { name: 'Capstone & Internship', duration: 12, description: 'Final projects, real-world experience, job preparation' }
      )
    } else if (path === 'Design Bootcamp') {
      phases.push(
        { name: 'Foundation (Weeks 1-2)', duration: 2, description: 'Design thinking, basic tools, user research' },
        { name: 'Core Skills (Weeks 3-4)', duration: 2, description: 'UI/UX design, prototyping, design systems' },
        { name: 'Portfolio Projects (Weeks 5-6)', duration: 2, description: 'Real projects, portfolio building, job prep' }
      )
    } else if (path === 'Self-Taught') {
      phases.push(
        { name: 'Learning Fundamentals', duration: Math.ceil(duration * 0.3), description: 'Online courses, design theory, basic tools' },
        { name: 'Building Projects', duration: Math.ceil(duration * 0.4), description: 'Hands-on practice, portfolio projects' },
        { name: 'Networking & Job Search', duration: Math.ceil(duration * 0.3), description: 'Community engagement, job applications' }
      )
    }
    
    return phases
  }

  const generateMilestones = () => {
    const interests = formData.designInterests
    const experience = formData.designExperience
    const path = selectedEducationPath
    
    const milestones = []
    
    // Foundation milestones
    milestones.push({
      title: 'Complete Design Fundamentals',
      description: 'Master basic design principles, color theory, typography',
      timeline: 'Month 1-2',
      status: 'upcoming',
      priority: 'high'
    })
    
    // Tool proficiency
    milestones.push({
      title: 'Master Design Tools',
      description: 'Become proficient in Figma, Adobe Creative Suite, and prototyping tools',
      timeline: 'Month 2-3',
      status: 'upcoming',
      priority: 'high'
    })
    
    // Interest-specific milestones
    if (interests.includes('UI/UX Design')) {
      milestones.push({
        title: 'Complete UX Research Course',
        description: 'Learn user research methods, persona development, user journey mapping',
        timeline: 'Month 3-4',
        status: 'upcoming',
        priority: 'high'
      })
    }
    
    if (interests.includes('Visual Design')) {
      milestones.push({
        title: 'Create Brand Identity Project',
        description: 'Design complete brand identity including logo, color palette, typography',
        timeline: 'Month 4-5',
        status: 'upcoming',
        priority: 'medium'
      })
    }
    
    if (interests.includes('Interaction Design')) {
      milestones.push({
        title: 'Build Interactive Prototype',
        description: 'Create high-fidelity interactive prototype with micro-interactions',
        timeline: 'Month 5-6',
        status: 'upcoming',
        priority: 'medium'
      })
    }
    
    // Portfolio milestone
    milestones.push({
      title: 'Complete Portfolio',
      description: 'Build professional portfolio with 3-5 strong projects',
      timeline: path === 'Design Bootcamp' ? 'Month 6' : 'Month 8-10',
      status: 'upcoming',
      priority: 'high'
    })
    
    // Job search milestone
    milestones.push({
      title: 'Start Job Applications',
      description: 'Begin applying to internships and entry-level positions',
      timeline: path === 'Design Bootcamp' ? 'Month 6' : 'Month 10-12',
      status: 'upcoming',
      priority: 'high'
    })
    
    return milestones
  }

  const generateResources = () => {
    const interests = formData.designInterests
    const learningStyle = formData.learningStyle
    const environment = formData.learningEnvironment
    
    const resources = {
      courses: [] as Array<{ name: string; provider: string; cost: string; duration: string }>,
      tools: [] as Array<{ name: string; cost: string; description: string }>,
      communities: [] as Array<{ name: string; platform: string; description: string }>,
      books: [] as Array<{ name: string; author: string; cost: string }>
    }
    
    // Core courses
    resources.courses.push(
      { name: 'Google UX Design Certificate', provider: 'Coursera', cost: '$39/month', duration: '6 months' },
      { name: 'Figma Academy', provider: 'Figma', cost: 'Free', duration: '2 weeks' },
      { name: 'Design Systems Course', provider: 'Design+Code', cost: '$199', duration: '1 month' }
    )
    
    // Interest-specific courses
    if (interests.includes('User Research')) {
      resources.courses.push({ name: 'User Research Methods', provider: 'Nielsen Norman Group', cost: '$1,299', duration: '1 week' })
    }
    
    if (interests.includes('Visual Design')) {
      resources.courses.push({ name: 'Visual Design Fundamentals', provider: 'Skillshare', cost: '$15/month', duration: '2 months' })
    }
    
    // Tools
    resources.tools = [
      { name: 'Figma', cost: 'Free/Professional', description: 'Primary design tool' },
      { name: 'Adobe Creative Suite', cost: '$20.99/month', description: 'Photoshop, Illustrator, XD' },
      { name: 'Principle', cost: '$99', description: 'Prototyping and animation' },
      { name: 'Notion', cost: 'Free', description: 'Project management and documentation' }
    ]
    
    // Communities
    resources.communities = [
      { name: 'Designer Hangout', platform: 'Slack', description: 'Large design community' },
      { name: 'UX Mastery', platform: 'Discord', description: 'UX-focused discussions' },
      { name: 'Local Design Meetups', platform: 'Meetup.com', description: 'In-person networking' }
    ]
    
    // Books
    resources.books = [
      { name: 'Don\'t Make Me Think', author: 'Steve Krug', cost: '$20' },
      { name: 'The Design of Everyday Things', author: 'Don Norman', cost: '$15' },
      { name: 'Atomic Design', author: 'Brad Frost', cost: '$25' }
    ]
    
    return resources
  }

  const generateFinancialPlan = () => {
    const path = selectedEducationPath
    const financialAid = formData.financialAid
    const additionalSupport = formData.additionalSupport
    
    let totalCost = 0
    let monthlyCost = 0
    
    if (path === 'Traditional College') {
      totalCost = 80000
      monthlyCost = 2000
    } else if (path === 'Design Bootcamp') {
      totalCost = 15000
      monthlyCost = 15000
    } else if (path === 'Self-Taught') {
      totalCost = 2000
      monthlyCost = 200
    } else if (path === 'Apprenticeship') {
      totalCost = 0
      monthlyCost = 0
    }
    
    const financialPlan = {
      totalCost,
      monthlyCost,
      fundingSources: [] as string[],
      scholarships: [] as Array<{ name: string; amount: string; deadline: string }>,
      paymentPlan: ''
    }
    
    if (financialAid === 'Full Support Needed') {
      financialPlan.fundingSources.push('Scholarships', 'Grants', 'Student Loans')
      financialPlan.scholarships = [
        { name: 'Design Diversity Scholarship', amount: '$5000', deadline: 'March 15' },
        { name: 'Women in Tech Scholarship', amount: '$3000', deadline: 'April 1' },
        { name: 'First Generation Student Grant', amount: '$2000', deadline: 'May 1' }
      ]
    } else if (financialAid === 'Partial Support') {
      financialPlan.fundingSources.push('Personal Savings', 'Part-time Work', 'Scholarships')
    } else {
      financialPlan.fundingSources.push('Personal Savings', 'Family Support')
    }
    
    if (additionalSupport.includes('Scholarships')) {
      financialPlan.scholarships.push(
        { name: 'Local Design Scholarship', amount: '$1000', deadline: 'June 1' },
        { name: 'Community College Transfer Grant', amount: '$1500', deadline: 'July 15' }
      )
    }
    
    return financialPlan
  }

  const generateNextSteps = () => {
    const nextSteps = [
      {
        title: 'Research Programs',
        description: 'Research specific programs and schools for your chosen path',
        timeline: 'This week',
        priority: 'high'
      },
      {
        title: 'Create Study Schedule',
        description: 'Set up a weekly study schedule based on your time commitment',
        timeline: 'This week',
        priority: 'high'
      },
      {
        title: 'Set Up Learning Environment',
        description: 'Create a dedicated workspace and install necessary tools',
        timeline: 'Next week',
        priority: 'medium'
      },
      {
        title: 'Join Design Communities',
        description: 'Connect with other designers and join relevant communities',
        timeline: 'Next week',
        priority: 'medium'
      }
    ]
    
    return nextSteps
  }

  const calculateCompletionDate = () => {
    const timeline = generateTimeline()
    const startDate = new Date()
    const completionDate = new Date(startDate)
    completionDate.setMonth(completionDate.getMonth() + timeline.totalDuration)
    return completionDate.toLocaleDateString()
  }


  const handleNavigationStateChange = (isCollapsed: boolean, isRailMode: boolean, isMenuOpen?: boolean) => {
    setIsNavCollapsed(isCollapsed)
    setIsNavRailMode(isRailMode)
    if (isMenuOpen !== undefined) {
      setIsMobileMenuOpen(isMenuOpen)
    }
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleChatClose = () => {
    setMobileChatToggled(false)
    setShowChatSidebar(false)
  }

  // Show ChatSidebar on specific pages (desktop only - mobile is controlled by toggle)
  useEffect(() => {
    if (!isNavRailMode) {
      // Desktop: show chat on specific pages
      setShowChatSidebar(activeTab === 'dashboard' || activeTab === 'explore' || activeTab === 'compare' || activeTab === 'education' || activeTab === 'action-plan' || activeTab === 'action-plan-summary' || activeTab === 'action-plan-results' || activeTab === 'my-careers' || activeTab === 'career-action-plan' || activeTab === 'choose-colleges' || activeTab === 'choose-bootcamps' || activeTab === 'choose-apprenticeships' || activeTab === 'financial-aid-planning')
    } else {
      // Mobile: only show if toggled on
      setShowChatSidebar(mobileChatToggled)
    }
  }, [activeTab, isNavRailMode, mobileChatToggled])

  const handleBackNavigation = () => {
    console.log('🔙 Back button clicked!')
    console.log('📍 Current tab:', activeTab)
    console.log('📍 Navigating to dashboard')

    // Clear selected career when going back to dashboard
    setSelectedCareer(null)
    setSpecificCareersToShow([]) // Clear specific careers when going back to dashboard
    setActiveTab('dashboard')
  }





  // Mock AI responses for Orchie suggestions

  const mockAIResponses = {
    lifestyle: {
      question: "What careers would give me the chance to travel or live in different places around the world?",
      response: "There are two main ways to see the world through your career. First, you can choose jobs that involve frequent travel - like international business, journalism, or event management. These careers will have you hopping on planes regularly, sometimes visiting a different city every week!\n\nThe second option is to live abroad for longer periods. Teaching English in other countries is super popular and doesn't require a teaching degree. You could also work for the government as a diplomat, join an international charity, or work remotely in tech from anywhere with WiFi. These jobs let you learn new languages, experience different cultures, and make friends all over the world while building an amazing life story.",
      careerIds: ['international-business-manager', 'foreign-correspondent', 'event-manager', 'esl-teacher-abroad', 'diplomat', 'international-nonprofit-coordinator', 'digital-nomad-developer']
    },
    meaning: {
      question: "What kind of careers could help me feel like I'm building a legacy or doing something that really matters?",
      response: "There are three main paths to meaningful work. You can help people directly through healthcare, education, or social work - where you see the impact of your work every day. You can make discoveries as a scientist, researcher, or inventor creating new medicines, technologies, or solutions to big problems. Or you can create change as an artist, journalist, or community organizer who shapes culture and society.\n\nThe secret is finding work that combines what you're good at with what you care about. For example, if you love technology and want to help people, you could work on apps that help students learn or create tools for people with disabilities. Don't worry about changing the whole world at once - even small actions can have huge impacts over time!",
      careerIds: ['nurse-practitioner', 'teacher', 'home-health-aide', 'dental-hygienist', 'firefighter', 'police-officer', 'customer-success']
    },
    adaptability: {
      question: "Can you show me jobs that combine more than one interest—like art and technology or sports and science?",
      response: "These are called 'hybrid careers' and they're perfect for people who can't pick just one thing to focus on. Popular combinations include art and technology (like game designers or digital artists), sports and science (like sports medicine or data analysis for teams), and writing and technology (like technical writers or content creators). These careers often pay really well because you have skills that most people don't have together.\n\nThe key is figuring out which of your interests you want to be the main focus. For example, if you love both music and coding, you could be a music producer who uses technology, or a programmer who builds music apps. These jobs are usually more creative and flexible than traditional single-focus roles, giving you the best of both worlds.",
      careerIds: ['product-design', 'virtual-world-designer', 'creative-technologist', 'tech-consultant', 'entrepreneur', 'change-management-specialist', 'music-producer']
    },
    future: {
      question: "What are some careers that will still be around and in demand 10-20 years from now?",
      response: "Future-proof careers fall into three main categories. Technology and AI jobs like software development, data science, and cybersecurity are growing super fast and will be needed everywhere. Healthcare careers will be in huge demand as people live longer - we'll need more doctors, nurses, therapists, and healthcare tech specialists. Sustainability careers like renewable energy, environmental science, and green building will be essential as we fight climate change.\n\nThe key is focusing on skills that work WITH technology, not against it. Things like creativity, problem-solving, and working with people will always be valuable. Even if you don't want to be a programmer, learning basic tech skills will help you in almost any career. The future belongs to people who can work alongside AI and technology!",
      careerIds: ['ai-ml-engineer', 'renewable-energy-engineer', 'healthcare-technology-specialist', 'data-scientist', 'cybersecurity-specialist', 'human-ai-interaction-designer', 'privacy-data-protection-officer']
    }
  }

  const handleOrchieSuggestionClick = (suggestionType: keyof typeof mockAIResponses) => {
    const suggestion = mockAIResponses[suggestionType]
    
    // Clear any existing response first
    setShowMainPageResponse(false)
    
    // Don't set the question in the search input - keep it empty
    setSearchQuery('')
    
    // Set the main page response
    setMainPageQuestion(suggestion.question)
    setMainPageResponse(suggestion.response)
    setShowMainPageResponse(true)
    
    // Clear search results to prevent showing careers/topics
    setSearchResults({ careers: [], topics: [] })
    setShowResults(false)
    
    // Set specific careers to show when "View these careers" is clicked
    setSpecificCareersToShow(suggestion.careerIds)
    
    // Add to chat history with the AI response
    const newChatEntry = {
      id: Date.now().toString(),
      query: suggestion.question,
      results: { careers: [], topics: [] },
      timestamp: new Date(),
      aiResponse: suggestion.response
    }
    
    setChatHistory(prev => [...prev, newChatEntry])
  }

  const tabs = [
    { id: 'home', name: 'Home', icon: HomeIcon },
    { id: 'explore', name: 'Explore Jobs', icon: AcademicCapIcon },
    { id: 'dashboard', name: 'Dashboard', icon: ChartBarIcon },
    { id: 'compare', name: 'Compare Careers', icon: ChartBarIcon },
    { id: 'education', name: 'Education Plan', icon: AcademicCapIcon },
    { id: 'plan', name: 'Action Plan', icon: ClipboardDocumentListIcon },
    { id: 'profile', name: 'Profile', icon: UserIcon },
  ]

  return (
    <div className="min-h-screen bg-midnight-medium text-slate-light flex">
      {/* Navigation Sidebar - Always visible */}
        <Navigation
          onOverviewClick={() => setActiveTab('dashboard')}
          onHomeClick={() => setActiveTab('home')}
          onMyCareersClick={() => setActiveTab('my-careers')}
          onCareerActionPlanClick={() => setActiveTab('career-action-plan')}
          onStateChange={handleNavigationStateChange}
          onMenuToggle={handleMobileMenuToggle}
          isMenuOpen={isMobileMenuOpen}
          isExploreComplete={interestedCareers.length > 0 || focusedCareers.length > 0}
          isMyCareersComplete={focusedCareers.length > 0}
          isPlanComplete={actionPlans.length > 0}
          activeTab={activeTab}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${
        isNavRailMode ? '' : (isNavCollapsed ? 'ml-16' : 'ml-80')
      }`}>
        {/* Top Navigation Bar */}
        <header className="bg-midnight-medium border-b border-midnight-light px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Hamburger menu button for mobile */}
              {isNavRailMode && (
                <button
                  onClick={handleMobileMenuToggle}
                  className="p-2 hover:bg-midnight-light rounded-lg transition-colors"
                  aria-label="Toggle menu"
                >
                  <Bars3Icon className="h-6 w-6 text-slate-light" />
                </button>
              )}
              <img src={OrchardLogo} alt="Orchard" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              {/* Chat toggle button */}
              <button
                onClick={() => {
                  if (isNavRailMode) {
                    setMobileChatToggled(!mobileChatToggled)
                    setShowChatSidebar(!showChatSidebar)
                  } else {
                    setShowChatSidebar(!showChatSidebar)
                  }
                }}
                className={`p-2 rounded-lg transition-colors relative ${
                  showChatSidebar 
                    ? 'bg-orchard-blue hover:bg-orchard-blue/80' 
                    : 'hover:bg-midnight-light'
                }`}
                aria-label="Toggle chat"
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
              </button>
              <button 
                className="w-8 h-8 rounded-full bg-orchard-blue hover:bg-orchard-blue/80 transition-colors flex items-center justify-center"
                onClick={() => setActiveTab('profile')}
              >
                <UserIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </header>

      {/* Main Content */}
        <main className={`flex-1 overflow-hidden ${
          activeTab === 'explore' || activeTab === 'dashboard' || activeTab === 'compare' || activeTab === 'education' || activeTab === 'action-plan' || activeTab === 'action-plan-summary' || activeTab === 'action-plan-results' || activeTab === 'my-careers' || activeTab === 'career-action-plan' || activeTab === 'choose-colleges' || activeTab === 'choose-bootcamps' || activeTab === 'choose-apprenticeships' || activeTab === 'financial-aid-planning' ? '' : 'py-6 sm:px-6 lg:px-8'
        }`}>
        <div className={`${activeTab === 'explore' || activeTab === 'dashboard' || activeTab === 'compare' || activeTab === 'education' || activeTab === 'action-plan' || activeTab === 'action-plan-summary' || activeTab === 'action-plan-results' || activeTab === 'my-careers' || activeTab === 'career-action-plan' || activeTab === 'choose-colleges' || activeTab === 'choose-bootcamps' || activeTab === 'choose-apprenticeships' || activeTab === 'financial-aid-planning' ? '' : 'px-4 py-6 sm:px-0'}`}>
          {activeTab === 'home' && (
            <div className="text-center w-full max-w-[80rem] mx-auto">
              {/* Welcome Message */}
              {!dismissedMessages.explore && (
                <div className="mb-6 bg-orchard-green/10 border-2 border-orchard-green rounded-lg p-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-light mb-2">Start Exploring Careers</h3>
                    <p className="text-slate-light text-sm">
                      Discover careers that match your interests and save the ones you're curious about.
                    </p>
                  </div>
                  <button
                    onClick={() => dismissMessage('explore')}
                    className="ml-4 flex-shrink-0 text-slate hover:text-slate-light transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              )}
              {/* AI Greeting Section */}
              <div className="mb-12">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img src={OrchardIcon} alt="Orchie" className="w-16 h-16" />
                </div>
                <h2 className="text-2xl font-medium text-slate-light mb-2">Hello. I'm Orchie.</h2>
                <p className="text-lg text-orchard-green mb-8">Let's explore some careers.</p>
                
                {/* Chat History */}
                {chatHistory.length > 0 && (
                  <div className="mb-8 w-full" data-testid="chat-history-container">
                      <div className="space-y-6">
                      {chatHistory.map((entry) => (
                        <div key={entry.id} className="space-y-4" data-testid={`chat-entry-${entry.id}`}>
                          {/* User Query */}
                          <div className="flex justify-end" data-testid="user-message-container">
                            <div className="bg-midnight-medium p-3 rounded-2xl rounded-br-md max-w-xs user-message border border-midnight-light">
                              <p className="text-slate-light text-sm text-left">{entry.query}</p>
                                </div>
                            </div>
                          
                          {/* AI Response with Results */}
                          <div className="flex justify-start bg-midnight-dark rounded-2xl rounded-bl-md" data-testid="ai-response-container">
                            <div className="p-4 w-full ai-response">
                              {entry.aiResponse ? (
                                <div className="space-y-4" data-testid="ai-response-content">
                                  <div className="text-slate-light whitespace-pre-line leading-relaxed text-left ai-response-text">
                                    {entry.aiResponse}
                                  </div>
                                  <button 
                                    onClick={() => {
                                      setActiveTab('explore')
                                      // Keep the specific careers to show them on explore page
                                    }}
                                    className="mt-4 px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-base font-medium view-careers-button"
                                    data-testid="view-careers-button"
                                  >
                                    Explore these Careers
                                  </button>
                                </div>
                              ) : (
                                <div data-testid="search-results-content">
                                  <p className="text-slate text-sm mb-4 text-left search-results-intro">
                                Here are some careers and topics that match your search:
                              </p>
                            
                            {/* Career Results */}
                            {entry.results.careers.length > 0 && (
                              <div className="mb-4" data-testid="career-results-section">
                            <h3 className="text-lg font-medium text-slate-light mb-4 text-left">Careers</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                  {entry.results.careers.slice(0, 2).map((career, index) => (
                                    <CareerCard
                                      key={career.id}
                                      career={career}
                                      index={index}
                                      onCareerClick={handleCareerClick}
                                      onTopicClick={handleTopicClick}
                                      onToggleInterested={toggleInterestedCareer}
                                      isInterested={isCareerInterested}
                                    />
                                  ))}
                            </div>
                            
                            {/* View All Button */}
                            {entry.results.careers.length > 2 && (
                              <div className="mt-4 text-center">
                                <button
                                  onClick={() => {
                                    setSpecificCareersToShow(entry.results.careers.map(career => career.id))
                                    setActiveTab('explore')
                                  }}
                                  className="px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-sm font-medium"
                                >
                                  +{entry.results.careers.length - 2} more - view all
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                            
                            {/* Topic Results */}
                            {entry.results.topics.length > 0 && (
                              <div data-testid="topic-results-section">
                                <h3 className="text-lg font-medium text-slate-light mb-4 text-left">Career Topics</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                  {entry.results.topics.map((topic) => (
                                    <div 
                                      key={topic.id} 
                                      className="bg-midnight-dark p-4 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue transition-colors"
                                      onClick={() => handleTopicClick(topic)}
                                    >
                                      <h4 className="text-slate-light font-medium mb-2">{topic.name}</h4>
                                      <p className="text-slate text-sm">{topic.description}</p>
                                    </div>
                                  ))}
                                </div>
                      </div>
                    )}

                            {/* No Results Message */}
                            {entry.results.careers.length === 0 && entry.results.topics.length === 0 && (
                              <div className="bg-midnight-dark p-4 rounded-lg text-center" data-testid="no-results-message">
                                <p className="text-slate text-sm text-left">Sorry I don't have a match for that right now</p>
                      </div>
                    )}
                      </div>
                    )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
      </div>
                )}

                {/* AI Input */}
                <div className="w-full max-w-2xl mx-auto">
                  <div className="relative">
                    <div className="overflow-hidden rounded-full border border-midnight-light shadow-sm focus-within:border-orchard-blue focus-within:ring-1 focus-within:ring-orchard-blue bg-midnight-dark">
                      <div className="flex items-center px-4 py-3">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-full p-1 text-slate hover:text-slate-light focus:outline-none"
                        >
                          <PaperClipIcon className="h-5 w-5" />
                        </button>
                        <input
                          type="text"
                          placeholder="Ask Orchie"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="block w-full border-0 py-1.5 px-2 text-slate-light placeholder-slate bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          onClick={handleSearch}
                          className="inline-flex items-center justify-center rounded-full p-1 text-cauliflower bg-orchard-blue hover:bg-orchard-blue/90 focus:outline-none transition-colors"
                        >
                          <ArrowUpIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>


              {/* Prompt Cards Section */}
              <div className="text-left">
                <h3 className="text-lg font-medium text-slate-light mb-2">Need help figuring out where to start?</h3>
                <p className="text-sm text-slate-light mb-8">Consider these aspects beyond job title and salary</p>
                
                <div className="bg-midnight-dark p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-slate-light mb-3">Lifestyle Alignment</h4>
                    <div 
                      className="bg-midnight-dark p-6 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200"
                      onClick={() => handleOrchieSuggestionClick('lifestyle')}
                    >
                      <div className="flex items-start gap-4">
                        <img src={OrchieAgentSuggestion} alt="Orchie suggestion" className="w-8 h-8 flex-shrink-0" />
                        <p className="text-slate">What careers would give me the chance to travel or live in different places around the world?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-light mb-3">Personal Meaning &amp; Fulfillment</h4>
                    <div 
                      className="bg-midnight-dark p-6 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200"
                      onClick={() => handleOrchieSuggestionClick('meaning')}
                    >
                      <div className="flex items-start gap-4">
                        <img src={OrchieAgentSuggestion} alt="Orchie suggestion" className="w-8 h-8 flex-shrink-0" />
                        <p className="text-slate">What kind of careers could help me feel like I'm building a legacy or doing something that really matters?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-light mb-3">Adaptability &amp; Future-Readiness</h4>
                    <div 
                      className="bg-midnight-dark p-6 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200"
                      onClick={() => handleOrchieSuggestionClick('adaptability')}
                    >
                      <div className="flex items-start gap-4">
                        <img src={OrchieAgentSuggestion} alt="Orchie suggestion" className="w-8 h-8 flex-shrink-0" />
                        <p className="text-slate">Can you show me jobs that combine more than one interest—like art and technology or sports and science?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-slate-light mb-3">Long-Term Vision</h4>
                    <div 
                      className="bg-midnight-dark p-6 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200"
                      onClick={() => handleOrchieSuggestionClick('future')}
                    >
                      <div className="flex items-start gap-4">
                        <img src={OrchieAgentSuggestion} alt="Orchie suggestion" className="w-8 h-8 flex-shrink-0" />
                        <p className="text-slate">What are some careers that will still be around and in demand 10-20 years from now?</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>


            </div>
          )}
          
          {activeTab === 'explore' && (
            <div className="h-full flex flex-col">
                    
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                    onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                    onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                    isNavCollapsed={isNavCollapsed}
                    isNavRailMode={isNavRailMode}
                />
                )}
                
                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    {/* Specific Careers List or Career Details or Default Content */}
                    {specificCareersToShow.length > 0 ? (
                      <div className="space-y-6">
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold text-slate-light mb-2">Recommended Careers</h2>
                          <p className="text-slate">Based on your Orchie response, here are some careers that match your interests:</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          {specificCareersToShow.map(careerId => careers.find(c => c.id === careerId)).filter(Boolean).map((career, index) => (
                            <CareerCard
                              key={career!.id}
                              career={career!}
                              index={index}
                              onCareerClick={handleCareerClick}
                              onTopicClick={handleTopicClick}
                              onToggleInterested={toggleInterestedCareer}
                              isInterested={isCareerInterested}
                            />
                          ))}
                        </div>
                      </div>
                    ) : selectedCareer ? (
                      <div className="space-y-8">
                        {/* Career Header */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          {/* Hero Section */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                              {/* Career Icon */}
                              <div className="w-16 h-16 bg-orchard-blue rounded-full flex items-center justify-center">
                                <span className="text-cauliflower font-bold text-sm text-center leading-tight">
                                  {selectedCareer.title.split(' ').slice(0, 2).map((word: string) => word.charAt(0)).join('')}
                                </span>
                              </div>
                              <div>
                                <h1 className="text-3xl font-bold text-slate-light mb-1">{selectedCareer.title}</h1>
                                <p className="text-slate text-sm">3 Videos • 7 Shorts</p>
                              </div>
                            </div>
                            {/* Interested Button */}
                            <button
                              onClick={() => toggleInterestedCareer(selectedCareer)}
                              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                isCareerInterested(selectedCareer)
                                  ? 'bg-orchard-green text-cauliflower hover:bg-orchard-green/90'
                                  : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              }`}
                            >
                              {isCareerInterested(selectedCareer) ? 'Saved to Interested ✓' : 'Save to Interested'}
                            </button>
                          </div>
                          
                          {/* Tabs */}
                          <div className="border-b border-midnight-light">
                            <nav className="-mb-px flex space-x-8">
                              <button
                                onClick={() => setCareerPageTab('overview')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                  careerPageTab === 'overview'
                                    ? 'border-orchard-blue text-orchard-blue'
                                    : 'border-transparent text-slate hover:text-slate-light hover:border-midnight-light'
                                }`}
                              >
                                Overview
                              </button>
                              <button
                                onClick={() => setCareerPageTab('videos')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                  careerPageTab === 'videos'
                                    ? 'border-orchard-blue text-orchard-blue'
                                    : 'border-transparent text-slate hover:text-slate-light hover:border-midnight-light'
                                }`}
                              >
                                Videos
                              </button>
                              <button
                                onClick={() => setCareerPageTab('shorts')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                  careerPageTab === 'shorts'
                                    ? 'border-orchard-blue text-orchard-blue'
                                    : 'border-transparent text-slate hover:text-slate-light hover:border-midnight-light'
                                }`}
                              >
                                Shorts
                              </button>
                            </nav>
                          </div>
                        </div>
                        
                        {/* Tab Content */}
                        {careerPageTab === 'overview' && (
                          <>
                            {/* Overview */}
                            <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                              <h2 className="text-xl font-semibold text-cauliflower mb-4">Overview of {selectedCareer.title}</h2>
                              <p className="text-slate leading-relaxed">{selectedCareer.description}</p>
                            </div>

                        {/* Salary & Requirements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Salary Range</h3>
                            <p className="text-slate text-2xl font-bold">
                              ${selectedCareer.salaryRange.min.toLocaleString()} - ${selectedCareer.salaryRange.max.toLocaleString()}
                            </p>
                            <p className="text-slate text-sm mt-2">{selectedCareer.salaryRange.currency}</p>
      </div>
                    
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Work Environment</h3>
                            <p className="text-slate capitalize">{selectedCareer.workEnvironment.replace('_', ' ')}</p>
                            <div className="mt-2">
                              <span className={`px-2 py-1 rounded text-xs ${
                                selectedCareer.growthOutlook === 'rapidly_growing' ? 'bg-green-500/20 text-green-400' :
                                selectedCareer.growthOutlook === 'growing' ? 'bg-blue-500/20 text-blue-400' :
                                selectedCareer.growthOutlook === 'stable' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {selectedCareer.growthOutlook.replace('_', ' ')} outlook
                              </span>
                            </div>
                          </div>
                    </div>
                    
                        {/* Skills & Education */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Key Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedCareer.skills.map((skill: string, index: number) => (
                                <span key={index} className="px-3 py-1 bg-orchard-blue/20 text-orchard-blue text-sm rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                    </div>
                    
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Education Requirements</h3>
                            <ul className="space-y-2">
                              {selectedCareer.educationRequirements.map((req: string, index: number) => (
                                <li key={index} className="text-slate text-sm">• {req}</li>
                              ))}
                            </ul>
                    </div>
                </div>
                
                        {/* Career Topics */}
                        <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                          <h3 className="text-lg font-semibold text-cauliflower mb-4">Related Topics</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedCareer.topics.map((topicId: string) => {
                              const topic = getCareerTopics().find(t => t.id === topicId)
                              return topic ? (
                                <span key={topicId} className="px-3 py-1 bg-orchard-green/20 text-orchard-green text-sm rounded">
                                  {topic.name}
                                </span>
                              ) : null
                            })}
                  </div>
                </div>
                
                        {/* Placeholder sections for extended details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Roles &amp; Responsibilities</h3>
                            <p className="text-slate text-sm">Detailed role information will be displayed here based on the career data structure.</p>
                      </div>
                          
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Industries</h3>
                            <p className="text-slate text-sm">Industry information will be displayed here based on the career data structure.</p>
                      </div>
                    </div>
                    
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Pros &amp; Cons</h3>
                            <p className="text-slate text-sm">Pros and cons analysis will be displayed here based on the career data structure.</p>
                      </div>
                          
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h3 className="text-lg font-semibold text-cauliflower mb-4">Career Path Opportunities</h3>
                            <p className="text-slate text-sm">Career progression information will be displayed here based on the career data structure.</p>
                      </div>
                    </div>
                    
                        <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                          <h3 className="text-lg font-semibold text-cauliflower mb-4">Resources &amp; Networking</h3>
                          <p className="text-slate text-sm">Resources, networking opportunities, and related careers will be displayed here based on the career data structure.</p>
                        </div>
                          </>
                        )}
                        
                        {careerPageTab === 'videos' && (
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h2 className="text-xl font-semibold text-cauliflower mb-4">Videos</h2>
                            <p className="text-slate">Video content related to {selectedCareer.title} will be displayed here.</p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                              {/* Placeholder video cards */}
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-midnight-dark p-4 rounded-lg border border-midnight-light">
                                  <div className="aspect-video bg-midnight-light rounded mb-3 flex items-center justify-center">
                                    <span className="text-slate text-sm">Video {i}</span>
                                  </div>
                                  <h3 className="text-slate-light font-medium text-sm mb-1">Sample Video Title {i}</h3>
                                  <p className="text-slate text-xs">Sample video description...</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {careerPageTab === 'shorts' && (
                          <div className="bg-midnight-medium p-6 rounded-lg border border-midnight-light">
                            <h2 className="text-xl font-semibold text-cauliflower mb-4">Shorts</h2>
                            <p className="text-slate">Short-form content related to {selectedCareer.title} will be displayed here.</p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              {/* Placeholder short cards */}
                              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="bg-midnight-dark p-3 rounded-lg border border-midnight-light">
                                  <div className="aspect-video bg-midnight-light rounded mb-2 flex items-center justify-center">
                                    <span className="text-slate text-xs">Short {i}</span>
                                  </div>
                                  <h3 className="text-slate-light font-medium text-xs">Short Title {i}</h3>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : selectedTopic ? (
                      <div className="space-y-6">
                        {/* Topic Header */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-orchard-green rounded-full flex items-center justify-center">
                              <span className="text-cauliflower font-bold text-sm">
                                {selectedTopic.name.split(' ').slice(0, 2).map((word: string) => word.charAt(0)).join('')}
                              </span>
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-slate-light">{selectedTopic.name}</h2>
                              <p className="text-slate text-sm">{selectedTopic.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-start">
                            <p className="text-slate text-sm">
                              {getCareersByTopic(selectedTopic.id).length} careers in this topic
                            </p>
                          </div>
                        </div>
                        
                        {/* Careers in Topic */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                          {getCareersByTopic(selectedTopic.id).map((career, index) => (
                            <CareerCard
                              key={career.id}
                              career={career}
                              index={index}
                              onCareerClick={handleCareerClick}
                              onTopicClick={handleTopicClick}
                              onToggleInterested={toggleInterestedCareer}
                              isInterested={isCareerInterested}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                          <img src={OrchardIcon} alt="Orchie" className="w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-medium text-slate-light mb-4">Select a Career to Explore</h2>
                        <p className="text-slate mb-8">Click on any career from your search history to see detailed information.</p>
                        
                        {/* Show search results if available */}
                        {showResults && !showMainPageResponse && (searchResults.careers.length > 0 || searchResults.topics.length > 0) && (
                          <div className="w-full">
                            <h3 className="text-lg font-medium text-slate-light mb-6">Recent Search Results</h3>
                            
                            {/* Career Results */}
                            {searchResults.careers.length > 0 && (
                              <div className="mb-6">
                                <h4 className="text-md font-medium text-slate mb-4">Careers</h4>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                  {searchResults.careers.slice(0, 2).map((career, index) => (
                                    <CareerCard
                                      key={career.id}
                                      career={career}
                                      index={index}
                                      onCareerClick={handleCareerClick}
                                      onTopicClick={handleTopicClick}
                                      onToggleInterested={toggleInterestedCareer}
                                      isInterested={isCareerInterested}
                                    />
                                  ))}
                                </div>
                                
                                {/* View All Button for Search Results */}
                                {searchResults.careers.length > 2 && (
                                  <div className="mt-4 text-center">
                                    <button
                                      onClick={() => {
                                        setSpecificCareersToShow(searchResults.careers.map(career => career.id))
                                      }}
                                      className="px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-sm font-medium"
                                    >
                                      +{searchResults.careers.length - 2} more - view all
                                    </button>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {/* Topic Results */}
                            {searchResults.topics.length > 0 && (
                              <div>
                                <h4 className="text-md font-medium text-slate mb-4">Topics</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                  {searchResults.topics.map((topic) => (
                                    <div 
                                      key={topic.id} 
                                      className="bg-midnight-dark p-4 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-green transition-colors"
                                      onClick={() => handleTopicClick(topic)}
                                    >
                                      <h4 className="text-slate-light font-medium mb-2">{topic.name}</h4>
                                      <p className="text-slate text-sm">{topic.description}</p>
                                      <p className="text-orchard-green text-xs mt-2">
                                        {getCareersByTopic(topic.id).length} careers
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'dashboard' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Main Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `calc(${chatWidth}% + 1rem)` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-7xl mx-auto">
                      <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-light mb-2">Overview</h1>
                        <p className="text-slate text-sm">Track your progress across all phases of your career journey.</p>
                      </div>

                      {/* Overall Progress Hero Card */}
                      {(() => {
                        const completedPhases = [
                          interestedCareers.length > 0 || focusedCareers.length > 0,
                          focusedCareers.length > 0,
                          actionPlans.length > 0
                        ].filter(Boolean).length
                        const totalPhases = 3
                        const progressPercentage = (completedPhases / totalPhases) * 100
                        
                        return (
                          <div className="bg-midnight-dark rounded-lg border border-midnight-light p-8 mb-8">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                              {/* Circular Progress */}
                              <div className="flex-shrink-0">
                                <div className="relative w-32 h-32">
                                  <svg className="transform -rotate-90 w-32 h-32">
                                    <circle
                                      cx="64"
                                      cy="64"
                                      r="56"
                                      stroke="currentColor"
                                      strokeWidth="8"
                                      fill="none"
                                      className="text-midnight-light"
                                    />
                                    <circle
                                      cx="64"
                                      cy="64"
                                      r="56"
                                      stroke="currentColor"
                                      strokeWidth="8"
                                      fill="none"
                                      strokeDasharray={`${2 * Math.PI * 56}`}
                                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - progressPercentage / 100)}`}
                                      strokeLinecap="round"
                                      className="text-orchard-green transition-all duration-500"
                                    />
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                      <div className="text-3xl font-bold text-slate-light">{completedPhases}</div>
                                      <div className="text-slate text-xs">of {totalPhases}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Progress Details */}
                              <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-slate-light mb-4">Your Career Journey Progress</h2>
                                <div className="space-y-3 mb-4">
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-slate-light text-sm font-medium">Explore</span>
                                      <span className="text-slate text-xs">
                                        {interestedCareers.length + focusedCareers.length > 0 ? 'Complete' : 'In Progress'}
                                      </span>
                                    </div>
                                    <div className="h-2 bg-midnight-light rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full transition-all duration-500 ${
                                          interestedCareers.length + focusedCareers.length > 0 ? 'bg-orchard-green' : 'bg-orchard-blue'
                                        }`}
                                        style={{ width: interestedCareers.length + focusedCareers.length > 0 ? '100%' : '50%' }}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-slate-light text-sm font-medium">Compare &amp; Focus</span>
                                      <span className="text-slate text-xs">
                                        {focusedCareers.length > 0 ? 'Complete' : 'In Progress'}
                                      </span>
                                    </div>
                                    <div className="h-2 bg-midnight-light rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full transition-all duration-500 ${
                                          focusedCareers.length > 0 ? 'bg-orchard-green' : 'bg-orchard-blue'
                                        }`}
                                        style={{ width: focusedCareers.length > 0 ? '100%' : focusedCareers.length === 0 && (interestedCareers.length > 0 || focusedCareers.length > 0) ? '50%' : '0%' }}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-slate-light text-sm font-medium">Plan</span>
                                      <span className="text-slate text-xs">
                                        {actionPlans.length > 0 ? 'Complete' : 'In Progress'}
                                      </span>
                                    </div>
                                    <div className="h-2 bg-midnight-light rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full transition-all duration-500 ${
                                          actionPlans.length > 0 ? 'bg-orchard-green' : 'bg-orchard-blue'
                                        }`}
                                        style={{ width: actionPlans.length > 0 ? '100%' : focusedCareers.length > 0 ? '50%' : '0%' }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {progressPercentage === 100 && (
                                  <div className="mt-4 p-3 bg-orchard-green/10 border border-orchard-green/30 rounded-lg">
                                    <p className="text-orchard-green text-sm font-medium">🎉 Congratulations! You've completed all phases!</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })()}

                      {/* Phase Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Explore Phase */}
                        <div className={`rounded-lg border p-6 transition-colors ${
                          interestedCareers.length > 0 || focusedCareers.length > 0
                            ? 'bg-orchard-green/10 border-orchard-green/50 hover:border-orchard-green'
                            : 'bg-midnight-dark border-midnight-light hover:border-orchard-green'
                        }`}>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${
                                interestedCareers.length > 0 || focusedCareers.length > 0
                                  ? 'bg-orchard-green/20'
                                  : 'bg-orchard-blue/20'
                              }`}>
                                <CompassIcon className={`h-6 w-6 ${
                                  interestedCareers.length > 0 || focusedCareers.length > 0
                                    ? 'text-orchard-green'
                                    : 'text-orchard-blue'
                                }`} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light">Explore</h3>
                                <p className="text-slate text-xs">Ask Orchie</p>
                              </div>
                            </div>
                            {interestedCareers.length > 0 || focusedCareers.length > 0 ? (
                              <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-8 w-8 text-orchard-green" />
                              </div>
                            ) : (
                              <div className="h-8 w-8 rounded-full border-2 border-slate flex-shrink-0" />
                            )}
                          </div>
                          <div className="mb-4">
                            <div className="text-3xl font-bold text-slate-light mb-1">
                              {interestedCareers.length + focusedCareers.length}
                            </div>
                            <div className="text-slate text-sm">
                              {interestedCareers.length + focusedCareers.length === 1 ? 'Career' : 'Careers'} Saved
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setActiveTab('home')}
                              className={`flex-1 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                                interestedCareers.length > 0 || focusedCareers.length > 0
                                  ? 'bg-orchard-green text-white hover:bg-orchard-green/90'
                                  : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              }`}
                            >
                              Explore Careers
                            </button>
                            <button
                              onClick={() => setActiveTab('my-careers')}
                              className="flex-1 px-4 py-2 rounded-lg transition-colors text-sm font-medium bg-midnight-light text-slate-light hover:bg-midnight-medium border border-midnight-light"
                            >
                              View My Careers
                            </button>
                          </div>
                        </div>

                        {/* Compare & Focus Phase */}
                        <div className={`rounded-lg border p-6 transition-colors ${
                          focusedCareers.length > 0
                            ? 'bg-orchard-green/10 border-orchard-green/50 hover:border-orchard-green'
                            : 'bg-midnight-dark border-midnight-light hover:border-orchard-green'
                        }`}>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${
                                focusedCareers.length > 0
                                  ? 'bg-orchard-green/20'
                                  : 'bg-orchard-blue/20'
                              }`}>
                                <BriefcaseIcon className={`h-6 w-6 ${
                                  focusedCareers.length > 0
                                    ? 'text-orchard-green'
                                    : 'text-orchard-blue'
                                }`} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light">Compare &amp; Focus</h3>
                                <p className="text-slate text-xs">My Careers</p>
                              </div>
                            </div>
                            {focusedCareers.length > 0 ? (
                              <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-8 w-8 text-orchard-green" />
                              </div>
                            ) : (
                              <div className="h-8 w-8 rounded-full border-2 border-slate flex-shrink-0" />
                            )}
                          </div>
                          <div className="mb-4">
                            <div className="text-3xl font-bold text-slate-light mb-1">
                              {focusedCareers.length}
                            </div>
                            <div className="text-slate text-sm">
                              {focusedCareers.length === 1 ? 'Career' : 'Careers'} Focused
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveTab('my-careers')}
                            className={`w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                              focusedCareers.length > 0
                                ? 'bg-orchard-green text-white hover:bg-orchard-green/90'
                                : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                            }`}
                          >
                            Go to My Careers
                          </button>
                        </div>

                        {/* Plan Phase */}
                        <div className={`rounded-lg border p-6 transition-colors ${
                          actionPlans.length > 0
                            ? 'bg-orchard-green/10 border-orchard-green/50 hover:border-orchard-green'
                            : 'bg-midnight-dark border-midnight-light hover:border-orchard-green'
                        }`}>
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg ${
                                actionPlans.length > 0
                                  ? 'bg-orchard-green/20'
                                  : 'bg-orchard-blue/20'
                              }`}>
                                <ClipboardDocumentCheckIcon className={`h-6 w-6 ${
                                  actionPlans.length > 0
                                    ? 'text-orchard-green'
                                    : 'text-orchard-blue'
                                }`} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light">Plan</h3>
                                <p className="text-slate text-xs">Action Plan</p>
                              </div>
                            </div>
                            {actionPlans.length > 0 ? (
                              <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-8 w-8 text-orchard-green" />
                              </div>
                            ) : (
                              <div className="h-8 w-8 rounded-full border-2 border-slate flex-shrink-0" />
                            )}
                          </div>
                          <div className="mb-4">
                            <div className="text-3xl font-bold text-slate-light mb-1">
                              {actionPlans.length}
                            </div>
                            <div className="text-slate text-sm">
                              {actionPlans.length === 1 ? 'Action Plan' : 'Action Plans'} Created
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveTab('career-action-plan')}
                            className={`w-full px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                              actionPlans.length > 0
                                ? 'bg-orchard-green text-white hover:bg-orchard-green/90'
                                : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                            }`}
                          >
                            Go to Action Plans
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Careers Page */}
          {activeTab === 'my-careers' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Main Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `calc(${chatWidth}% + 1rem)` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-7xl mx-auto">
                    {/* Welcome Message */}
                    {!dismissedMessages.myCareers && (interestedCareers.length > 0 || focusedCareers.length > 0) && (
                      <div className="mb-6 bg-orchard-green/10 border-2 border-orchard-green rounded-lg p-6 flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-light mb-2">Compare and Focus on a Career</h3>
                          <p className="text-slate-light text-sm">
                            You've saved {interestedCareers.length + focusedCareers.length} {interestedCareers.length + focusedCareers.length === 1 ? 'career' : 'careers'}. Compare them side-by-side and star the one you want to focus on.
                          </p>
                        </div>
                        <button
                          onClick={() => dismissMessage('myCareers')}
                          className="ml-4 flex-shrink-0 text-slate hover:text-slate-light transition-colors"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-slate-light mb-2">My Careers</h2>
                      <p className="text-slate text-sm">Manage your saved careers, compare them, or star specific ones to build your action plans.</p>
                    </div>
                    
                    <div className="bg-midnight-dark rounded-lg border border-midnight-light">
                      <div className="px-6 py-4 border-b border-midnight-light">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-3">
                            {(interestedCareers.length > 0 || focusedCareers.length > 0) && (
                              <button 
                                onClick={handleCompareCareers}
                                disabled={selectedCareersForComparison.length === 0}
                                className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${
                                  selectedCareersForComparison.length > 0
                                    ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90 cursor-pointer'
                                    : 'bg-midnight-medium text-slate cursor-not-allowed opacity-50'
                                }`}
                              >
                                Compare Careers
                              </button>
                            )}
                            {focusedCareers.length > 0 && (
                              <button 
                                onClick={handleEducationPlanClick}
                                className="px-4 py-2 rounded-lg bg-orchard-green text-cauliflower hover:bg-orchard-green/90 transition-colors font-medium text-sm"
                              >
                                Create Action Plan
                              </button>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {focusedCareers.length > 0 && (
                              <span className="px-2 py-1 bg-orchard-green/20 text-orchard-green text-xs font-medium rounded">⭐ {focusedCareers.length} Focused</span>
                            )}
                            {(interestedCareers.length > 0 || focusedCareers.length > 0) && (
                              <div className="flex items-center gap-1 bg-midnight-medium rounded-lg p-1">
                                <button
                                  onClick={() => setCareersViewMode('table')}
                                  className={`p-2 rounded transition-colors ${
                                    careersViewMode === 'table'
                                      ? 'bg-midnight-dark text-orchard-blue'
                                      : 'text-slate hover:text-slate-light'
                                  }`}
                                  title="Table view"
                                >
                                  <TableCellsIcon className="h-5 w-5" />
                                </button>
                                <button
                                  onClick={() => setCareersViewMode('card')}
                                  className={`p-2 rounded transition-colors ${
                                    careersViewMode === 'card'
                                      ? 'bg-midnight-dark text-orchard-blue'
                                      : 'text-slate hover:text-slate-light'
                                  }`}
                                  title="Card view"
                                >
                                  <Squares2X2Icon className="h-5 w-5" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {(interestedCareers.length > 0 || focusedCareers.length > 0) ? (
                        (() => {
                          // Helper function to get sorted careers (used in both views)
                          const getSortedCareers = () => {
                            const careerMap = new Map<string, any>()
                            interestedCareers.forEach(career => {
                              if (!careerMap.has(career.id)) {
                                careerMap.set(career.id, career)
                              }
                            })
                            focusedCareers.forEach(career => {
                              careerMap.set(career.id, career)
                            })
                            return Array.from(careerMap.values()).sort((a, b) => {
                              const aStarred = isCareerFocused(a)
                              const bStarred = isCareerFocused(b)
                              if (aStarred && !bStarred) return -1
                              if (!aStarred && bStarred) return 1
                              return a.title.localeCompare(b.title)
                            })
                          }
                          
                          const allCareers = getSortedCareers()
                          
                          if (careersViewMode === 'table') {
                            return (
                              <div className="overflow-hidden">
                                <div className="overflow-x-auto">
                                  <table className="min-w-full divide-y divide-midnight-light">
                                    <thead className="bg-midnight-dark">
                                      <tr>
                                        <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                          <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-midnight-light bg-midnight-dark text-orchard-blue focus:ring-orchard-blue focus:ring-2"
                                            onChange={(e) => {
                                              if (e.target.checked) {
                                                allCareers.forEach(career => {
                                                  if (!isCareerSelectedForComparison(career)) {
                                                    toggleCareerForComparison(career)
                                                  }
                                                })
                                              } else {
                                                allCareers.forEach(career => {
                                                  if (isCareerSelectedForComparison(career)) {
                                                    toggleCareerForComparison(career)
                                                  }
                                                })
                                              }
                                            }}
                                            checked={allCareers.length > 0 && allCareers.every(career => isCareerSelectedForComparison(career))}
                                          />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-light uppercase tracking-wider">
                                          Career
                                        </th>
                                        <th scope="col" className="w-24 px-3 py-3"></th>
                                        <th scope="col" className="w-32 px-3 py-3"></th>
                                        <th scope="col" className="w-16 px-3 py-3"></th>
                                      </tr>
                                    </thead>
                                    <tbody className="bg-midnight-dark divide-y divide-midnight-light">
                                      {allCareers.map((career) => {
                                        const isStarred = isCareerFocused(career)
                                        const isInterested = isCareerInterested(career)
                                        return (
                                          <tr key={career.id} className={`hover:bg-midnight-medium/50 ${isStarred ? 'bg-orchard-green/5' : ''}`}>
                                            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                              <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-midnight-light bg-midnight-dark text-orchard-blue focus:ring-orchard-blue focus:ring-2"
                                                checked={isCareerSelectedForComparison(career)}
                                                onChange={() => toggleCareerForComparison(career)}
                                              />
                                            </td>
                                            <td 
                                              className="px-6 py-4 whitespace-nowrap cursor-pointer hover:bg-midnight-medium/30 transition-colors group"
                                              onClick={() => {
                                                setPreviousTab(activeTab)
                                                setSelectedCareer(career)
                                                setActiveTab('explore')
                                              }}
                                            >
                                              <div className="flex flex-col">
                                                <div className="flex items-center gap-2">
                                                  <div className="text-sm font-medium text-slate-light group-hover:text-orchard-blue group-hover:underline transition-colors">
                                                    {career.title}
                                                  </div>
                                                  {isStarred && (
                                                    <span className="px-2 py-0.5 bg-orchard-green/20 text-orchard-green text-xs font-medium rounded">⭐ Focused</span>
                                                  )}
                                                  {actionPlans.some(plan => plan.careerId === career.id) && (
                                                    <span className="px-2 py-0.5 bg-orchard-blue/20 text-orchard-blue text-xs font-medium rounded">Action Plan</span>
                                                  )}
                                                </div>
                                                <div className="text-sm text-slate group-hover:text-orchard-blue group-hover:underline truncate max-w-xs transition-colors">
                                                  {career.description?.substring(0, 80)}...
                                                </div>
                                              </div>
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  toggleFocusedCareer(career)
                                                  if (!isInterested && !isStarred) {
                                                    toggleInterestedCareer(career)
                                                  }
                                                }}
                                                className={`p-2 rounded transition-colors ${
                                                  isStarred
                                                    ? 'text-orchard-green hover:bg-orchard-green/10'
                                                    : 'text-slate hover:text-orchard-green hover:bg-orchard-green/10'
                                                }`}
                                                title={isStarred ? 'Unstar this career' : 'Star this career'}
                                              >
                                                {isStarred ? (
                                                  <StarIconSolid className="h-5 w-5" />
                                                ) : (
                                                  <StarIcon className="h-5 w-5" />
                                                )}
                                              </button>
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">
                                              <button
                                                onClick={(e) => {
                                                  e.stopPropagation()
                                                  if (isInterested) toggleInterestedCareer(career)
                                                  if (isStarred) toggleFocusedCareer(career)
                                                }}
                                                className="text-slate hover:text-red-400 transition-colors p-2 rounded hover:bg-red-400/10"
                                                title="Remove career"
                                              >
                                                <TrashIcon className="h-5 w-5" />
                                              </button>
                                            </td>
                                          </tr>
                                        )
                                      })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )
                          } else {
                            // Card view
                            return (
                              <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {allCareers.map((career) => {
                                    const isStarred = isCareerFocused(career)
                                    const isInterested = isCareerInterested(career)
                                    const hasActionPlan = actionPlans.some(plan => plan.careerId === career.id)
                                    
                                    return (
                                      <div 
                                        key={career.id} 
                                        className={`bg-midnight-medium rounded-lg border border-midnight-light p-6 hover:border-orchard-blue transition-all cursor-pointer group ${isStarred ? 'bg-orchard-green/5 border-orchard-green/20' : ''}`}
                                        onClick={() => {
                                          setPreviousTab(activeTab)
                                          setSelectedCareer(career)
                                          setActiveTab('explore')
                                        }}
                                      >
                                        {/* Header with title and badges */}
                                        <div className="mb-4">
                                          <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-slate-light group-hover:text-orchard-blue transition-colors flex-1">
                                              {career.title}
                                            </h3>
                                            <div className="flex items-center gap-2 ml-2">
                                              <input
                                                type="checkbox"
                                                onClick={(e) => e.stopPropagation()}
                                                onChange={() => toggleCareerForComparison(career)}
                                                checked={isCareerSelectedForComparison(career)}
                                                className="h-4 w-4 rounded border-midnight-light bg-midnight-dark text-orchard-blue focus:ring-orchard-blue focus:ring-2"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-wrap items-center gap-2 mb-3">
                                            {isStarred && (
                                              <span className="px-2 py-0.5 bg-orchard-green/20 text-orchard-green text-xs font-medium rounded">⭐ Focused</span>
                                            )}
                                            {hasActionPlan && (
                                              <span className="px-2 py-0.5 bg-orchard-blue/20 text-orchard-blue text-xs font-medium rounded">Action Plan</span>
                                            )}
                                          </div>
                                          <p className="text-slate text-sm leading-relaxed line-clamp-3">
                                            {career.description}
                                          </p>
                                        </div>
                                        
                                        {/* Action buttons */}
                                        <div className="flex items-center justify-between pt-4 border-t border-midnight-light">
                                          <div className="flex items-center gap-2">
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                toggleFocusedCareer(career)
                                                if (!isInterested && !isStarred) {
                                                  toggleInterestedCareer(career)
                                                }
                                              }}
                                              className={`p-2 rounded transition-colors ${
                                                isStarred
                                                  ? 'text-orchard-green hover:bg-orchard-green/10'
                                                  : 'text-slate hover:text-orchard-green hover:bg-orchard-green/10'
                                              }`}
                                              title={isStarred ? 'Unstar this career' : 'Star this career'}
                                            >
                                              {isStarred ? (
                                                <StarIconSolid className="h-5 w-5" />
                                              ) : (
                                                <StarIcon className="h-5 w-5" />
                                              )}
                                            </button>
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                if (isInterested) toggleInterestedCareer(career)
                                                if (isStarred) toggleFocusedCareer(career)
                                              }}
                                              className="text-slate hover:text-red-400 transition-colors p-2 rounded hover:bg-red-400/10"
                                              title="Remove career"
                                            >
                                              <TrashIcon className="h-5 w-5" />
                                            </button>
                                          </div>
                                          {hasActionPlan && (
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation()
                                                const plan = actionPlans.find(p => p.careerId === career.id)
                                                if (plan) {
                                                  setCurrentPlanId(plan.id)
                                                  setActiveTab('action-plan-results')
                                                }
                                              }}
                                              className="text-xs text-orchard-blue hover:text-orchard-blue/80 transition-colors font-medium"
                                            >
                                              View Plan →
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          }
                        })()
                      ) : (
                        <div className="text-center py-12">
                          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <img src={OrchardIcon} alt="Orchie" className="w-16 h-16 opacity-50" />
                          </div>
                          <h3 className="text-lg font-medium text-slate-light mb-2">No careers saved yet</h3>
                          <p className="text-slate mb-4">Start exploring to save careers you're interested in!</p>
                          <button 
                            onClick={() => handleNavigation('explore')}
                            className="text-orchard-blue hover:underline transition-colors"
                          >
                            Explore Careers
                          </button>
                        </div>
                      )}
                      
                      <div className="px-6 py-4 border-t border-midnight-light text-center">
                        <button 
                          onClick={() => handleNavigation('explore')}
                          className="text-orchard-blue hover:underline transition-colors"
                        >
                          {(interestedCareers.length > 0 || focusedCareers.length > 0) ? 'Explore More Careers' : 'Get Started'}
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education & Career Action Plan Page */}
          {activeTab === 'career-action-plan' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Main Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `calc(${chatWidth}% + 1rem)` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-7xl mx-auto">
                    {/* Welcome Message */}
                    {!dismissedMessages.careerActionPlan && focusedCareers.length > 0 && (
                      <div className="mb-6 bg-orchard-green/10 border-2 border-orchard-green rounded-lg p-6 flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-light mb-2">Build Your Action Plan</h3>
                          <p className="text-slate-light text-sm">
                            You've focused on {focusedCareers[0]?.title || 'a career'}. Create a personalized education and training plan to reach your goal.
                          </p>
                        </div>
                        <button
                          onClick={() => dismissMessage('careerActionPlan')}
                          className="ml-4 flex-shrink-0 text-slate hover:text-slate-light transition-colors"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-semibold text-slate-light mb-2">My Education &amp; Career Action Plans</h2>
                          <p className="text-slate text-sm">Build your personalized plan by selecting the path that's right for you.</p>
                        </div>
                        {actionPlans.length > 0 && (
                          <button
                            onClick={handleCreatePlanClick}
                            className="bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium text-sm"
                          >
                            + Create New Plan
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {actionPlans.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {actionPlans.map((planWrapper) => {
                          const plan = planWrapper.plan
                          const counts = getStatusCounts(planWrapper.id)
                          return (
                            <div key={planWrapper.id} className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-1 text-xs font-medium rounded bg-orchard-blue/10 text-orchard-blue">Career</span>
                                    <span className="text-slate-light font-semibold">{planWrapper.careerTitle}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 text-xs font-medium rounded bg-orchard-green/10 text-orchard-green">Path</span>
                                    <span className="text-slate text-sm">{plan.selectedPath || '—'}</span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => {
                                    if (confirm('Are you sure you want to delete this plan?')) {
                                      clearActionPlan(planWrapper.id)
                                    }
                                  }}
                                  className="text-red-400 hover:text-red-300 transition-colors p-1"
                                  title="Delete plan"
                                >
                                  <TrashIcon className="h-5 w-5" />
                                </button>
                              </div>

                              {/* Progress Mini Overview */}
                              <div className="grid grid-cols-4 gap-2 mb-4">
                                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-2 text-center">
                                  <div className="text-xl font-bold text-green-400">{counts.completed}</div>
                                  <div className="text-green-400 text-xs mt-1">DONE</div>
                                </div>
                                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-2 text-center">
                                  <div className="text-xl font-bold text-yellow-400">{counts.inProgress}</div>
                                  <div className="text-yellow-400 text-xs mt-1">IN PROG</div>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 text-center">
                                  <div className="text-xl font-bold text-blue-400">{counts.notStarted}</div>
                                  <div className="text-blue-400 text-xs mt-1">NOT STARTED</div>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2 text-center">
                                  <div className="text-xl font-bold text-red-400">{counts.blocked}</div>
                                  <div className="text-red-400 text-xs mt-1">BLOCKED</div>
                                </div>
                              </div>

                              {/* Brief Plan Highlights */}
                              <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Duration</div>
                                  <div className="text-orchard-blue font-semibold text-sm">{plan.timeline?.totalDuration} mo</div>
                                </div>
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Total Cost</div>
                                  <div className="text-orchard-green font-semibold text-sm">${plan.financialPlan?.totalCost?.toLocaleString() || '0'}</div>
                                </div>
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Completion</div>
                                  <div className="text-orchard-blue font-semibold text-xs">{plan.estimatedCompletion}</div>
                                </div>
                              </div>

                              {/* CTA Buttons */}
                              <div className="flex gap-2">
                                <button
                                  onClick={() => {
                                    setCurrentPlanId(planWrapper.id)
                                    setActiveTab('action-plan-results')
                                  }}
                                  className="flex-1 bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium text-sm"
                                >
                                  View Plan
                                </button>
                                <button
                                  onClick={() => {
                                    loadExistingPlanIntoForm(planWrapper.id)
                                    setActiveTab('action-plan')
                                  }}
                                  className="flex-1 bg-midnight-medium text-slate-light border border-midnight-light px-4 py-2 rounded-lg hover:bg-midnight-light transition-colors font-medium text-sm"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="bg-midnight-dark rounded-lg border border-midnight-light p-12 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                          <img src={OrchardIcon} alt="Orchie" className="w-16 h-16 opacity-50" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-light mb-2">No action plans yet</h3>
                        <p className="text-slate text-sm mb-4">Build your personalized plan by selecting the path that's right for you.</p>
                        <button 
                          onClick={handleCreatePlanClick}
                          className="bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors"
                        >
                          Get Started
                        </button>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'compare' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}

                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `calc(${chatWidth}vw + 1rem)` : '0'
                  }}
                >
                  <div className="p-4">
                    {selectedCareersForComparison.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                          <img src={OrchardIcon} alt="Orchie" className="w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-medium text-slate-light mb-4">Compare Careers</h2>
                        <p className="text-slate mb-6">It looks like you haven't marked any careers you're interested in.</p>
                        <button 
                          onClick={() => setActiveTab('explore')}
                          className="px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg font-medium hover:bg-orchard-blue/90 transition-colors"
                        >
                          Start Exploring Careers
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Add More Careers Button */}
                        <div className="flex justify-end">
                          <button
                            onClick={() => setShowAddCareersModal(true)}
                            className="px-4 py-2 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium text-sm flex items-center gap-2"
                          >
                            + Add More Careers
                          </button>
                        </div>
                        
                        {/* Career Comparison Grid - Horizontal Scroll */}
                        <div className="overflow-x-auto pb-4">
                          <div className="flex gap-4 min-w-max">
                          {selectedCareersForComparison.map((career, index) => {
                            const comparisonData = getComparisonData(career.id)
                            return (
                            <div key={career.id} className="bg-midnight-dark rounded-lg border border-midnight-light p-4 flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ width: '500px' }}>
                              <div className="flex items-center justify-between mb-5 pb-4 border-b border-midnight-light">
                                <h3 className="text-xl font-bold text-slate-light leading-tight">{career.title}</h3>
                                {selectedCareersForComparison.length > 1 && (
                                  <div className="flex items-center">
                                    <input
                                      type="checkbox"
                                      id={`remove-${career.id}`}
                                      checked={true}
                                      onChange={() => removeCareerFromComparison(career)}
                                      className="h-4 w-4 text-orchard-blue bg-midnight-dark border-midnight-light rounded focus:ring-orchard-blue focus:ring-2"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Personal Alignment & Values (The "Fit" Check) */}
                              <div className="mb-4 bg-midnight-medium rounded-lg border border-orchard-green/60 p-4 shadow-sm">
                                <h4 className="text-base font-semibold text-slate-light mb-3">
                                  Personal Alignment & Values
                                </h4>
                                
                                {/* Core Work Activity */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Core Work Activity</h5>
                                  <p className="text-slate text-sm">What will I do all day?</p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {comparisonData.coreWorkActivity.map((activity, idx) => (
                                      <span 
                                        key={idx} 
                                        onClick={() => handlePillClick(activity, career.title)}
                                        className="px-3 py-1 bg-orchard-green/10 text-orchard-green text-sm rounded-full border border-orchard-green/30 cursor-pointer hover:bg-orchard-green/20 hover:border-orchard-green/50 transition-colors"
                                      >
                                        {activity}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Required Personality Traits */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Required Personality Traits</h5>
                                  <p className="text-slate text-sm">What kind of person thrives here?</p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {comparisonData.personalityTraits.map((trait, idx) => (
                                      <span 
                                        key={idx} 
                                        onClick={() => handlePillClick(trait, career.title)}
                                        className="px-3 py-1 bg-orchard-green/10 text-orchard-green text-sm rounded-full border border-orchard-green/30 cursor-pointer hover:bg-orchard-green/20 hover:border-orchard-green/50 transition-colors"
                                      >
                                        {trait}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Meaning & Impact */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Meaning &amp; Impact</h5>
                                  <p className="text-slate text-sm">How does this job help people/the world?</p>
                                  <p className="text-slate text-sm mt-2">{comparisonData.meaningImpact}</p>
                                </div>

                                {/* Work Environment */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Work Environment</h5>
                                  <p className="text-slate text-sm">Where will I be?</p>
                                  <div className="mt-2">
                                    <span 
                                      onClick={() => handlePillClick(career.workEnvironment?.replace('_', ' ') || 'Office/Remote/Hybrid', career.title)}
                                      className="px-3 py-1 bg-orchard-green/10 text-orchard-green text-sm rounded-full border border-orchard-green/30 capitalize cursor-pointer hover:bg-orchard-green/20 hover:border-orchard-green/50 transition-colors"
                                    >
                                      {career.workEnvironment?.replace('_', ' ') || 'Office/Remote/Hybrid'}
                                    </span>
                                  </div>
                                  <p className="text-slate text-xs mt-2">{comparisonData.workEnvironmentNote}</p>
                                </div>
                              </div>

                              {/* Career Development Trajectory (The "Future" Check) */}
                              <div className="mb-4 bg-midnight-medium rounded-lg border border-orchard-blue/60 p-4 shadow-sm">
                                <h4 className="text-base font-semibold text-slate-light mb-3">
                                  Career Development Trajectory
                                </h4>

                                {/* Typical Entry Path */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Typical Entry Path</h5>
                                  <p className="text-slate text-sm">What is the most common first job title?</p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {comparisonData.typicalEntryPath.map((path, idx) => (
                                      <span 
                                        key={idx} 
                                        onClick={() => handlePillClick(path, career.title)}
                                        className="px-3 py-1 bg-orchard-blue/10 text-orchard-blue text-sm rounded-full border border-orchard-blue/30 cursor-pointer hover:bg-orchard-blue/20 hover:border-orchard-blue/50 transition-colors"
                                      >
                                        {path}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Advancement & Skills Pivot */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Advancement &amp; Skills Pivot</h5>
                                  <p className="text-slate text-sm">Where do people go from here?</p>
                                  <p className="text-slate text-sm mt-2">{comparisonData.advancement}</p>
                                </div>

                                {/* Experience Required Before Degree */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Experience Required Before Degree</h5>
                                  <p className="text-slate text-sm">What high school experiences matter most?</p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {comparisonData.experienceBeforeDegree.map((exp, idx) => (
                                      <span 
                                        key={idx} 
                                        onClick={() => handlePillClick(exp, career.title)}
                                        className="px-3 py-1 bg-orchard-blue/10 text-orchard-blue text-sm rounded-full border border-orchard-blue/30 cursor-pointer hover:bg-orchard-blue/20 hover:border-orchard-blue/50 transition-colors"
                                      >
                                        {exp}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Risk of AI Impact */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Risk of AI Impact</h5>
                                  <p className="text-slate text-sm">Is my job safe from automation?</p>
                                  <div className="bg-midnight-dark p-3 rounded-lg mt-2">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-slate text-sm">Automation Risk</span>
                                      <span className="text-orange-400 font-medium">{comparisonData.aiRisk.level}</span>
                                    </div>
                                    <div className="w-full bg-midnight-dark rounded-full h-2">
                                      <div className="bg-orange-400 h-2 rounded-full" style={{ width: `${comparisonData.aiRisk.percentage}%` }}></div>
                                    </div>
                                    <p className="text-slate text-xs mt-2">{comparisonData.aiRisk.description}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Education & Compensation (The "Investment" Check) */}
                              <div className="mb-4 bg-midnight-medium rounded-lg border border-yellow-500/60 p-4 shadow-sm">
                                <h4 className="text-base font-semibold text-slate-light mb-3">
                                  Education & Compensation
                                </h4>

                                {/* Salary Range */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Salary Range</h5>
                                  <p className="text-slate text-xs mb-2">Median annual wage</p>
                                  <p className="text-orchard-blue font-semibold text-base">
                                    ${career.salaryRange?.min?.toLocaleString() || '80,000'} - ${career.salaryRange?.max?.toLocaleString() || '120,000'}
                                  </p>
                                </div>

                                {/* Total Compensation / Benefits */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Total Compensation / Benefits</h5>
                                  <p className="text-slate text-sm">What else comes with the job?</p>
                                  <div className="mt-3 bg-midnight-dark p-3 rounded-lg">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h6 className="text-slate-light text-xs font-medium mb-2">Pros</h6>
                                        <div className="space-y-1">
                                          {comparisonData.benefits.pros.map((pro, idx) => (
                                            <div key={idx} className="flex items-center text-green-400 text-xs">
                                              <span className="mr-2">✓</span>
                                              <span>{pro}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h6 className="text-slate-light text-xs font-medium mb-2">Cons</h6>
                                        <div className="space-y-1">
                                          {comparisonData.benefits.cons.map((con, idx) => (
                                            <div key={idx} className="flex items-center text-red-400 text-xs">
                                              <span className="mr-2">✗</span>
                                              <span>{con}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Popular Education Paths */}
                                <div className="mb-3">
                                  <h5 className="text-slate-light text-sm font-medium mb-2">Popular Education Paths</h5>
                                  <div className="space-y-2">
                                    {comparisonData.educationPaths.map((path, idx) => (
                                      <div key={idx} className="bg-midnight-dark p-3 rounded-lg">
                                        <div className="flex justify-between items-start mb-2">
                                          <h6 className="text-slate-light font-medium text-sm">{path.name}</h6>
                                          <span className="bg-midnight-medium text-slate text-xs px-2 py-1 rounded">{path.duration}</span>
                                        </div>
                                        <p className="text-slate text-sm mb-2">{path.description}</p>
                                        <p className="text-orchard-blue text-sm font-medium mb-2">{path.cost}</p>
                                        <div className="space-y-1">
                                          <div className="flex items-center text-green-400 text-xs">
                                            <span className="mr-2">↑</span>
                                            <span>{path.pros}</span>
                                          </div>
                                          <div className="flex items-center text-red-400 text-xs">
                                            <span className="mr-2">↓</span>
                                            <span>{path.cons}</span>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Notes */}
                              <div className="mb-4">
                                <h4 className="text-base font-medium text-slate-light mb-2">Notes</h4>
                                <textarea
                                  placeholder="Type away..."
                                  className="w-full bg-midnight-medium text-slate px-4 py-3 rounded-lg border border-midnight-light focus:outline-none focus:border-orchard-blue resize-none"
                                  rows={3}
                                />
            </div>

                              {/* Focus Career Button */}
                              <div className="text-center">
                                <button 
                                  onClick={() => toggleFocusedCareer(career)}
                                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-colors ${
                                    isCareerFocused(career)
                                      ? 'bg-orchard-green text-cauliflower hover:bg-orchard-green/90'
                                      : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                                  }`}
                                >
                                  {isCareerFocused(career) ? 'Focused ✓' : 'Focus Career'}
                                </button>
                              </div>
                            </div>
                            )
                          })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'plan' && (
            <div>
              <h2 className="text-2xl font-bold text-cauliflower mb-4">Action Plan</h2>
              <p className="text-slate">Action plan builder will go here</p>
            </div>
          )}

          {activeTab === 'action-plan' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      {/* Header with Selected Path */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              {isEditingPlan ? 'Edit your action plan' : 'To help us get started with your action plan, tell us about yourself'}
                            </h1>
                            <p className="text-slate">
                              {isEditingPlan 
                                ? 'Update your preferences to regenerate your personalized plan.'
                                : `Help us create your personalized ${selectedCareerForEducation?.title || 'Product Design'} journey.`
                              }
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab(previousTab || 'education')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                        
                        {/* Selected Career Reminder */}
                        {selectedCareerForEducation && (
                          <div className="bg-orchard-green/10 border border-orchard-green/20 rounded-lg p-4 mb-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-orchard-green rounded-full flex items-center justify-center">
                                  <span className="text-cauliflower font-bold text-sm">✓</span>
                                </div>
                                <div>
                                  <p className="text-slate-light font-medium">Building plan for: {selectedCareerForEducation.title}</p>
                                  <p className="text-slate text-sm">You can change this anytime</p>
                                </div>
                              </div>
                              {focusedCareers.length > 1 && (
                                <button
                                  onClick={() => {
                                    setShowEducationModal(true)
                                  }}
                                  className="text-orchard-green hover:text-orchard-green/80 transition-colors text-sm font-medium"
                                >
                                  Choose different career
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Form */}
                      <div className="space-y-6">
                        <form className="space-y-6">
                          {/* Section 1: Personal Information */}
                          <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                            <h2 className="text-xl font-semibold text-slate-light mb-6">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-medium text-slate-light mb-2">Your name</label>
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) => handleInputChange('name', e.target.value)}
                                  placeholder="Enter your name"
                                  className="w-full px-4 py-3 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue focus:border-orchard-blue"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-light mb-2">Graduation year</label>
                                <input
                                  type="text"
                                  value={formData.graduationYear}
                                  onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                                  placeholder="e.g., 2030"
                                  className="w-full px-4 py-3 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue focus:border-orchard-blue"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-light mb-2">Current grade</label>
                                <select 
                                  value={formData.currentGrade}
                                  onChange={(e) => handleInputChange('currentGrade', e.target.value)}
                                  className="w-full px-4 py-3 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue focus:border-orchard-blue"
                                >
                                  <option value="">Select your grade</option>
                                  <option value="Junior in Highschool (11th grade)">Junior in Highschool (11th grade)</option>
                                  <option value="Senior in Highschool (12th grade)">Senior in Highschool (12th grade)</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-slate-light mb-2">Home state</label>
                                <select 
                                  value={formData.homeState}
                                  onChange={(e) => handleInputChange('homeState', e.target.value)}
                                  className="w-full px-4 py-3 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue focus:border-orchard-blue"
                                >
                                  <option value="">Select your state</option>
                                  <option value="California">California</option>
                                  <option value="New York">New York</option>
                                  <option value="Texas">Texas</option>
                                  <option value="Florida">Florida</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Section 2: Career Interest & Learning Preferences */}
                          <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                            <h2 className="text-xl font-semibold text-slate-light mb-6">Career Interest &amp; Learning Preferences</h2>
                            <div className="space-y-6">
                              {/* Design Experience */}
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light mb-4">Design Experience</h3>
                                <div className="flex flex-wrap gap-3">
                                  {['None', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                    <button
                                      key={level}
                                      type="button"
                                      onClick={() => handleInputChange('designExperience', level)}
                                      className={`px-4 py-2 rounded-lg border transition-colors ${
                                        formData.designExperience === level
                                          ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                          : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                      }`}
                                    >
                                      {level}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Design Interests */}
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light mb-4">Design Interests</h3>
                                <div className="flex flex-wrap gap-3">
                                  {['UI/UX Design', 'Interaction Design', 'Visual Design', 'User Research', 'Design Systems', '+ add'].map((interest) => (
                                    <button
                                      key={interest}
                                      type="button"
                                      onClick={() => interest !== '+ add' && handleMultiSelect('designInterests', interest)}
                                      className={`px-4 py-2 rounded-lg border transition-colors ${
                                        formData.designInterests.includes(interest)
                                          ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                          : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                      }`}
                                    >
                                      {interest}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Learning Style */}
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light mb-4">Learning Style</h3>
                                <div className="flex flex-wrap gap-3">
                                  {['Visual', 'Hands-on', 'Independent', 'Structured'].map((style) => (
                                    <button
                                      key={style}
                                      type="button"
                                      onClick={() => handleInputChange('learningStyle', style)}
                                      className={`px-4 py-2 rounded-lg border transition-colors ${
                                        formData.learningStyle === style
                                          ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                          : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                      }`}
                                    >
                                      {style}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Preferred Learning Environment */}
                              <div>
                                <h3 className="text-lg font-semibold text-slate-light mb-4">Preferred Learning Environment</h3>
                                <div className="flex flex-wrap gap-3">
                                  {['Online', 'In-Person', 'Hybrid'].map((env) => (
                                    <button
                                      key={env}
                                      type="button"
                                      onClick={() => handleInputChange('learningEnvironment', env)}
                                      className={`px-4 py-2 rounded-lg border transition-colors ${
                                        formData.learningEnvironment === env
                                          ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                          : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                      }`}
                                    >
                                      {env}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Next Button */}
                          <div className="pt-6">
                            <button
                              type="button"
                              onClick={() => {
                                // Navigate to learning path selection page
                                setPreviousTab(activeTab)
                                setActiveTab('education')
                              }}
                              className="w-full bg-orchard-blue text-cauliflower px-6 py-4 rounded-lg hover:bg-orchard-blue/90 transition-colors font-semibold text-lg"
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Plan Summary Page */}
          {activeTab === 'action-plan-summary' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              Take time to review your selections
                            </h1>
                            <p className="text-slate">
                              Review your personal information and selected learning path before creating your action plan.
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              // Go back to education tab (learning path selection)
                              setActiveTab('education')
                            }}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      {/* Personal Information Summary - Clickable */}
                      <div 
                        onClick={() => {
                          setPreviousTab(activeTab)
                          setActiveTab('action-plan')
                        }}
                        className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xl font-semibold text-slate-light">Personal Information</h2>
                          <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-slate text-sm mb-1">Name</div>
                            <div className="text-slate-light font-medium">{formData.name || 'Not provided'}</div>
                          </div>
                          <div>
                            <div className="text-slate text-sm mb-1">Graduation Year</div>
                            <div className="text-slate-light font-medium">{formData.graduationYear || 'Not provided'}</div>
                          </div>
                          <div>
                            <div className="text-slate text-sm mb-1">Current Grade</div>
                            <div className="text-slate-light font-medium">{formData.currentGrade || 'Not provided'}</div>
                          </div>
                          <div>
                            <div className="text-slate text-sm mb-1">Home State</div>
                            <div className="text-slate-light font-medium">{formData.homeState || 'Not provided'}</div>
                          </div>
                          {formData.designExperience && (
                            <div>
                              <div className="text-slate text-sm mb-1">Design Experience</div>
                              <div className="text-slate-light font-medium">{formData.designExperience}</div>
                            </div>
                          )}
                          {formData.designInterests.length > 0 && (
                            <div>
                              <div className="text-slate text-sm mb-1">Design Interests</div>
                              <div className="flex flex-wrap gap-2">
                                {formData.designInterests.map((interest) => (
                                  <span key={interest} className="px-2 py-1 bg-orchard-blue/10 text-orchard-blue text-xs rounded">
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {formData.learningStyle && (
                            <div>
                              <div className="text-slate text-sm mb-1">Learning Style</div>
                              <div className="text-slate-light font-medium">{formData.learningStyle}</div>
                            </div>
                          )}
                          {formData.learningEnvironment && (
                            <div>
                              <div className="text-slate text-sm mb-1">Learning Environment</div>
                              <div className="text-slate-light font-medium">{formData.learningEnvironment}</div>
                            </div>
                          )}
                          {formData.timeCommitment && (
                            <div>
                              <div className="text-slate text-sm mb-1">Time Commitment</div>
                              <div className="text-slate-light font-medium">{formData.timeCommitment}</div>
                            </div>
                          )}
                          {formData.financialAid && (
                            <div>
                              <div className="text-slate text-sm mb-1">Financial Aid</div>
                              <div className="text-slate-light font-medium">{formData.financialAid}</div>
                            </div>
                          )}
                          {formData.additionalSupport.length > 0 && (
                            <div>
                              <div className="text-slate text-sm mb-1">Additional Support</div>
                              <div className="flex flex-wrap gap-2">
                                {formData.additionalSupport.map((support) => (
                                  <span key={support} className="px-2 py-1 bg-orchard-green/10 text-orchard-green text-xs rounded">
                                    {support}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Learning Path Summary - Clickable */}
                      {selectedEducationPath ? (() => {
                        // Get path details
                        const getPathDetails = (path: string) => {
                          const details: Record<string, { outcome: string; description: string }> = {
                            'Traditional College': { outcome: "Bachelor's Degree", description: 'B.A./B.S. in Design, HCI, or related field' },
                            'Design Bootcamp': { outcome: 'Certificate', description: 'UX/UI Design Bootcamp' },
                            'Self-Taught': { outcome: 'Portfolio-based', description: 'Online Courses & Projects' },
                            'Apprenticeship': { outcome: 'Portfolio/Experience', description: 'Design Apprenticeship' }
                          }
                          return details[path] || { outcome: 'N/A', description: path }
                        }
                        
                        const pathDetails = getPathDetails(selectedEducationPath)
                        const timeline = generateTimeline()
                        const durationMonths = timeline.totalDuration
                        const completionDate = calculateCompletionDate()
                        
                        return (
                          <div 
                            onClick={() => {
                              setPreviousTab(activeTab)
                              setActiveTab('education')
                            }}
                            className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="px-2 py-1 text-xs font-medium rounded bg-orchard-blue/10 text-orchard-blue">Career</span>
                                  <span className="text-slate-light font-semibold">{selectedCareerForEducation?.title || '—'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-1 text-xs font-medium rounded bg-orchard-green/10 text-orchard-green">Path</span>
                                  <span className="text-slate text-sm">{selectedEducationPath}</span>
                                </div>
                              </div>
                              <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                            </div>
                            
                            {/* Brief Plan Highlights */}
                            <div className="grid grid-cols-3 gap-3">
                              <div className="bg-midnight-medium rounded-lg p-3">
                                <div className="text-slate text-xs mb-1">Duration &amp; Completion</div>
                                <div className="text-orchard-blue font-semibold text-sm">
                                  {durationMonths} mo • {completionDate}
                                </div>
                              </div>
                              <div className="bg-midnight-medium rounded-lg p-3">
                                <div className="text-slate text-xs mb-1">Outcome</div>
                                <div className="text-orchard-green font-semibold text-sm">{pathDetails.outcome}</div>
                              </div>
                              <div className="bg-midnight-medium rounded-lg p-3">
                                <div className="text-slate text-xs mb-1">Total Cost</div>
                                <div className="text-orchard-green font-semibold text-sm">
                                  {(() => {
                                    const financialPlan = generateFinancialPlan()
                                    return `$${financialPlan.totalCost.toLocaleString()}`
                                  })()}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })() : null}

                      {/* Selected College - Only for Traditional College Path */}
                      {selectedEducationPath === 'Traditional College' && selectedCollege && (
                        <div 
                          onClick={() => {
                            setPreviousTab(activeTab)
                            setActiveTab('choose-colleges')
                          }}
                          className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-slate-light">Selected College</h2>
                            <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-slate text-sm mb-1">College Name</div>
                              <div className="text-slate-light font-medium">{selectedCollege.name}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Location</div>
                              <div className="text-slate-light font-medium">{selectedCollege.location}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Degree Program</div>
                              <div className="text-slate-light font-medium">{selectedCollege.degree}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Estimated Cost</div>
                              <div className="text-orchard-green font-medium">{selectedCollege.cost}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Selected Bootcamp - Only for Bootcamp Path */}
                      {selectedEducationPath === 'Design Bootcamp' && selectedBootcamp && (
                        <div 
                          onClick={() => {
                            setPreviousTab(activeTab)
                            setActiveTab('choose-bootcamps')
                          }}
                          className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-slate-light">Selected Bootcamp</h2>
                            <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-slate text-sm mb-1">Bootcamp Name</div>
                              <div className="text-slate-light font-medium">{selectedBootcamp.name}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Cost</div>
                              <div className="text-orchard-green font-medium">{selectedBootcamp.cost}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Duration</div>
                              <div className="text-slate-light font-medium">{selectedBootcamp.duration}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Review Score</div>
                              <div className="text-slate-light font-medium">{selectedBootcamp.reviewScore} ({selectedBootcamp.reviewSource})</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Selected Apprenticeship - Only for Apprenticeship Path */}
                      {selectedEducationPath === 'Apprenticeship' && selectedApprenticeship && (
                        <div 
                          onClick={() => {
                            setPreviousTab(activeTab)
                            setActiveTab('choose-apprenticeships')
                          }}
                          className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-slate-light">Selected Apprenticeship</h2>
                            <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-slate text-sm mb-1">Company Name</div>
                              <div className="text-slate-light font-medium">{selectedApprenticeship.name}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Compensation</div>
                              <div className={`font-medium ${selectedApprenticeship.paid ? 'text-orchard-green' : 'text-yellow-400'}`}>
                                {selectedApprenticeship.paid ? 'Paid' : 'Unpaid'}
                              </div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Duration</div>
                              <div className="text-slate-light font-medium">{selectedApprenticeship.duration}</div>
                            </div>
                            <div>
                              <div className="text-slate text-sm mb-1">Apprenticeship Outcome</div>
                              <div className="text-slate-light font-medium text-sm">{selectedApprenticeship.hiringOutcome}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Financial Aid & Planning - Only for Traditional College Path */}
                      {selectedEducationPath === 'Traditional College' && (formData.financialAid || formData.additionalSupport.length > 0 || formData.timeCommitment) && (
                        <div 
                          onClick={() => {
                            setPreviousTab(activeTab)
                            setActiveTab('financial-aid-planning')
                          }}
                          className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6 cursor-pointer hover:border-orchard-blue transition-colors"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-slate-light">Financial Aid &amp; Planning</h2>
                            <span className="text-orchard-blue text-sm font-medium">Click to edit</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {formData.financialAid && (
                              <div>
                                <div className="text-slate text-sm mb-1">Financial Aid</div>
                                <div className="text-slate-light font-medium">{formData.financialAid}</div>
                              </div>
                            )}
                            {formData.timeCommitment && (
                              <div>
                                <div className="text-slate text-sm mb-1">Time Commitment</div>
                                <div className="text-slate-light font-medium">{formData.timeCommitment}</div>
                              </div>
                            )}
                            {formData.additionalSupport.length > 0 && (
                              <div className="md:col-span-2">
                                <div className="text-slate text-sm mb-1">Additional Support</div>
                                <div className="flex flex-wrap gap-2">
                                  {formData.additionalSupport.map((support) => (
                                    <span key={support} className="px-2 py-1 bg-orchard-green/10 text-orchard-green text-xs rounded">
                                      {support}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Create Action Plan Button */}
                      <div className="pt-6">
                        <button
                          type="button"
                          onClick={generateActionPlan}
                          disabled={!selectedEducationPath || !selectedCareerForEducation || (selectedEducationPath === 'Traditional College' && !selectedCollege) || (selectedEducationPath === 'Design Bootcamp' && !selectedBootcamp) || (selectedEducationPath === 'Apprenticeship' && !selectedApprenticeship)}
                          className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-colors ${
                            selectedEducationPath && selectedCareerForEducation && (selectedEducationPath !== 'Traditional College' || selectedCollege) && (selectedEducationPath !== 'Design Bootcamp' || selectedBootcamp) && (selectedEducationPath !== 'Apprenticeship' || selectedApprenticeship)
                              ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              : 'bg-midnight-light text-slate cursor-not-allowed'
                          }`}
                        >
                          Create Action Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Choose Colleges Page - Traditional College Path */}
          {activeTab === 'choose-colleges' && (
            <div className="h-full flex flex-col">
              <div className="flex flex-1 overflow-hidden">
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              Choose Colleges
                            </h1>
                            <p className="text-slate">
                              Select colleges that support {selectedCareerForEducation?.title || 'this career'} or similar degree programs.
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab('education')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      {/* College Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {(() => {
                          const careerTitle = selectedCareerForEducation?.title || 'Product Design'
                          const colleges = [
                            {
                              name: 'Rhode Island School of Design',
                              location: 'Providence, RI',
                              population: '2,500',
                              degree: `BFA in ${careerTitle}`,
                              cost: '$58,000/year',
                              duration: '4 years',
                              summary: 'RISD is one of the premier art and design schools in the country, known for its rigorous curriculum and strong emphasis on hands-on learning. The program combines traditional design principles with modern digital tools.',
                              website: 'https://www.risd.edu'
                            },
                            {
                              name: 'Carnegie Mellon University',
                              location: 'Pittsburgh, PA',
                              population: '14,000',
                              degree: `BS in Human-Computer Interaction with focus on ${careerTitle}`,
                              cost: '$61,000/year',
                              duration: '4 years',
                              summary: 'CMU\'s HCI program is consistently ranked #1 in the nation. The program integrates computer science, design, and psychology to create well-rounded designers who understand both the technical and human aspects of design.',
                              website: 'https://www.cmu.edu'
                            },
                            {
                              name: 'ArtCenter College of Design',
                              location: 'Pasadena, CA',
                              population: '2,000',
                              degree: `BFA in ${careerTitle}`,
                              cost: '$47,000/year',
                              duration: '4 years',
                              summary: 'ArtCenter is known for its industry-focused approach and strong connections to design agencies and tech companies. The program emphasizes portfolio development and real-world project experience.',
                              website: 'https://www.artcenter.edu'
                            },
                            {
                              name: 'University of Washington',
                              location: 'Seattle, WA',
                              population: '48,000',
                              degree: `BA in Design with specialization in ${careerTitle}`,
                              cost: '$39,000/year (in-state), $58,000/year (out-of-state)',
                              duration: '4 years',
                              summary: 'UW offers a comprehensive design program with strong ties to the Seattle tech industry. The program balances theoretical knowledge with practical skills and offers excellent internship opportunities.',
                              website: 'https://www.washington.edu'
                            },
                            {
                              name: 'Parsons School of Design',
                              location: 'New York, NY',
                              population: '4,200',
                              degree: `BFA in Communication Design with focus on ${careerTitle}`,
                              cost: '$54,000/year',
                              duration: '4 years',
                              summary: 'Parsons is located in the heart of New York City, providing unparalleled access to design agencies and tech companies. The program emphasizes innovation, sustainability, and social impact in design.',
                              website: 'https://www.newschool.edu/parsons'
                            }
                          ]
                          
                          return colleges.map((college, index) => (
                            <div key={index} className={`bg-midnight-dark rounded-lg border p-6 transition-colors ${
                              selectedCollege?.name === college.name 
                                ? 'border-orchard-green bg-orchard-green/10' 
                                : 'border-midnight-light hover:border-orchard-blue'
                            }`}>
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold text-slate-light">{college.name}</h3>
                                    {selectedCollege?.name === college.name && (
                                      <span className="px-2 py-1 bg-orchard-green text-cauliflower text-xs font-medium rounded">Selected</span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-slate text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                      </svg>
                                      {college.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                      </svg>
                                      {college.population} students
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    window.open(college.website, '_blank')
                                  }}
                                  className="px-4 py-2 bg-midnight-medium text-slate-light border border-midnight-light rounded-lg hover:bg-midnight-light transition-colors text-sm font-medium"
                                >
                                  Visit Website
                                </button>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="text-slate-light font-medium mb-2">Degree Program</h4>
                                <p className="text-slate text-sm">{college.degree}</p>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Estimated Cost</div>
                                  <div className="text-orchard-green font-semibold text-sm">{college.cost}</div>
                                </div>
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Duration</div>
                                  <div className="text-orchard-blue font-semibold text-sm">{college.duration}</div>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="text-slate-light font-medium mb-2">About</h4>
                                <p className="text-slate text-sm leading-relaxed">{college.summary}</p>
                              </div>
                              
                              <button
                                onClick={() => setSelectedCollege(college)}
                                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                                  selectedCollege?.name === college.name
                                    ? 'bg-orchard-green text-cauliflower hover:bg-orchard-green/90'
                                    : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                                }`}
                              >
                                {selectedCollege?.name === college.name ? 'Selected' : 'Choose College'}
                              </button>
                            </div>
                          ))
                        })()}
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => setActiveTab('education')}
                          className="px-6 py-3 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-light/80 transition-colors font-medium"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setActiveTab('financial-aid-planning')}
                          disabled={!selectedCollege}
                          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                            selectedCollege
                              ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              : 'bg-midnight-light text-slate cursor-not-allowed'
                          }`}
                        >
                          Continue
                        </button>
                      </div>
                      {!selectedCollege && (
                        <p className="text-center text-slate text-sm mt-2">Please select a college to continue</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Choose Bootcamps Page - Bootcamp Path */}
          {activeTab === 'choose-bootcamps' && (
            <div className="h-full flex flex-col">
              <div className="flex flex-1 overflow-hidden">
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              Choose Bootcamps
                            </h1>
                            <p className="text-slate">
                              Select bootcamps that support {selectedCareerForEducation?.title || 'this career'}.
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab('education')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      {/* Bootcamp Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {(() => {
                          const bootcamps = [
                            {
                              name: 'General Assembly',
                              cost: '$16,450',
                              duration: '12 weeks (full-time) or 24 weeks (part-time)',
                              cohortSize: '15-20 students',
                              reviewScore: '4.5/5',
                              reviewSource: 'Google Reviews',
                              description: 'General Assembly offers a comprehensive UX Design Immersive program with strong industry connections. The curriculum covers user research, wireframing, prototyping, and portfolio development. Graduates have access to career services and a robust alumni network.',
                              website: 'https://generalassemb.ly'
                            },
                            {
                              name: 'Flatiron School',
                              cost: '$16,900',
                              duration: '15 weeks (full-time)',
                              cohortSize: '12-18 students',
                              reviewScore: '4.7/5',
                              reviewSource: 'G2 Reviews',
                              description: 'Flatiron School\'s UX/UI Design program emphasizes hands-on learning with real client projects. The program includes 1-on-1 mentorship, career coaching, and a job guarantee. Known for its rigorous curriculum and high job placement rates.',
                              website: 'https://flatironschool.com'
                            },
                            {
                              name: 'Springboard',
                              cost: '$9,900',
                              duration: '6 months (self-paced)',
                              cohortSize: '1-on-1 mentorship',
                              reviewScore: '4.6/5',
                              reviewSource: 'Google Reviews',
                              description: 'Springboard offers a flexible, mentor-guided UX Design Bootcamp that can be completed at your own pace. Includes career coaching, portfolio reviews, and a job guarantee. Great for those who need flexibility while maintaining structure.',
                              website: 'https://www.springboard.com'
                            },
                            {
                              name: 'Designlab',
                              cost: '$6,249',
                              duration: '4 months (part-time)',
                              cohortSize: '1-on-1 mentorship',
                              reviewScore: '4.8/5',
                              reviewSource: 'G2 Reviews',
                              description: 'Designlab focuses on practical, project-based learning with personalized mentorship. The program is designed for working professionals and includes portfolio development, design critiques, and career support. Known for its strong design community.',
                              website: 'https://designlab.com'
                            },
                            {
                              name: 'BrainStation',
                              cost: '$15,000',
                              duration: '12 weeks (full-time)',
                              cohortSize: '20-25 students',
                              reviewScore: '4.4/5',
                              reviewSource: 'Google Reviews',
                              description: 'BrainStation offers a UX Design Diploma program with a focus on digital product design. The curriculum includes industry-standard tools, real-world projects, and networking opportunities. Strong connections to tech companies and design agencies.',
                              website: 'https://brainstation.io'
                            }
                          ]
                          
                          return bootcamps.map((bootcamp, index) => (
                            <div key={index} className={`bg-midnight-dark rounded-lg border p-6 transition-colors ${
                              selectedBootcamp?.name === bootcamp.name 
                                ? 'border-orchard-green bg-orchard-green/10' 
                                : 'border-midnight-light hover:border-orchard-blue'
                            }`}>
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold text-slate-light">{bootcamp.name}</h3>
                                    {selectedBootcamp?.name === bootcamp.name && (
                                      <span className="px-2 py-1 bg-orchard-green text-cauliflower text-xs font-medium rounded">Selected</span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-slate text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                      </svg>
                                      {bootcamp.reviewScore} ({bootcamp.reviewSource})
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                      </svg>
                                      {bootcamp.cohortSize.includes('students') ? `${bootcamp.cohortSize} (class size)` : bootcamp.cohortSize}
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    window.open(bootcamp.website, '_blank')
                                  }}
                                  className="px-4 py-2 bg-midnight-medium text-slate-light border border-midnight-light rounded-lg hover:bg-midnight-light transition-colors text-sm font-medium"
                                >
                                  Visit Website
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Cost</div>
                                  <div className="text-orchard-green font-semibold text-sm">{bootcamp.cost}</div>
                                </div>
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Duration</div>
                                  <div className="text-orchard-blue font-semibold text-sm">{bootcamp.duration}</div>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="text-slate-light font-medium mb-2">About</h4>
                                <p className="text-slate text-sm leading-relaxed">{bootcamp.description}</p>
                              </div>
                              
                              <button
                                onClick={() => setSelectedBootcamp(bootcamp)}
                                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                                  selectedBootcamp?.name === bootcamp.name
                                    ? 'bg-orchard-green text-cauliflower hover:bg-orchard-green/90'
                                    : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                                }`}
                              >
                                {selectedBootcamp?.name === bootcamp.name ? 'Selected' : 'Choose Bootcamp'}
                              </button>
                            </div>
                          ))
                        })()}
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => setActiveTab('education')}
                          className="px-6 py-3 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-light/80 transition-colors font-medium"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setActiveTab('action-plan-summary')}
                          disabled={!selectedBootcamp}
                          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                            selectedBootcamp
                              ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              : 'bg-midnight-light text-slate cursor-not-allowed'
                          }`}
                        >
                          Continue
                        </button>
                      </div>
                      {!selectedBootcamp && (
                        <p className="text-center text-slate text-sm mt-2">Please select a bootcamp to continue</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Choose Apprenticeships Page - Apprenticeship Path */}
          {activeTab === 'choose-apprenticeships' && (
            <div className="h-full flex flex-col">
              <div className="flex flex-1 overflow-hidden">
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              Choose Apprenticeship Programs
                            </h1>
                            <p className="text-slate">
                              Select companies that offer apprenticeship programs in {selectedCareerForEducation?.title || 'this field'}.
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab('education')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      {/* Apprenticeship Company Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {(() => {
                          const careerTitle = selectedCareerForEducation?.title || 'Product Design'
                          const companies = [
                            {
                              name: 'Adobe',
                              employees: '29,000+',
                              paid: true,
                              duration: '12-18 months',
                              hiringOutcome: 'High conversion rate - 85% of apprentices hired full-time',
                              description: 'Adobe offers a comprehensive design apprenticeship program focused on product design, UX/UI, and design systems. Apprentices work on real products alongside senior designers, gaining hands-on experience with industry-standard tools and methodologies.',
                              website: 'https://www.adobe.com'
                            },
                            {
                              name: 'Figma',
                              employees: '1,200+',
                              paid: true,
                              duration: '6-12 months',
                              hiringOutcome: 'Strong hiring pipeline - 90% conversion to full-time roles',
                              description: 'Figma\'s apprenticeship program provides immersive experience in collaborative design tools and design systems. Apprentices work directly with the product team, contributing to features used by millions of designers worldwide.',
                              website: 'https://www.figma.com'
                            },
                            {
                              name: 'IDEO',
                              employees: '800+',
                              paid: true,
                              duration: '12 months',
                              hiringOutcome: 'Portfolio-focused - Strong portfolio and network for future opportunities',
                              description: 'IDEO offers a prestigious design apprenticeship program emphasizing human-centered design and innovation. Apprentices participate in client projects, design thinking workshops, and build a strong portfolio of real-world design work.',
                              website: 'https://www.ideo.com'
                            },
                            {
                              name: 'Airbnb',
                              employees: '6,800+',
                              paid: true,
                              duration: '9-12 months',
                              hiringOutcome: 'Competitive hiring - 70% conversion rate with excellent portfolio outcomes',
                              description: 'Airbnb\'s design apprenticeship focuses on hospitality and experience design. Apprentices work on features that impact millions of users, learning about design at scale, A/B testing, and data-driven design decisions.',
                              website: 'https://www.airbnb.com'
                            },
                            {
                              name: 'Design Studio Collective',
                              employees: '50-100',
                              paid: false,
                              duration: '6-9 months',
                              hiringOutcome: 'Portfolio and experience focused - Excellent for building design portfolio',
                              description: 'A boutique design studio offering unpaid apprenticeships with intensive mentorship. Perfect for building a strong portfolio and gaining diverse project experience. Apprentices work on real client projects across various industries.',
                              website: 'https://www.designstudiocollective.com'
                            }
                          ]
                          
                          return companies.map((company, index) => (
                            <div key={index} className={`bg-midnight-dark rounded-lg border p-6 transition-colors ${
                              selectedApprenticeship?.name === company.name 
                                ? 'border-orchard-green bg-orchard-green/10' 
                                : 'border-midnight-light hover:border-orchard-blue'
                            }`}>
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold text-slate-light">{company.name}</h3>
                                    {selectedApprenticeship?.name === company.name && (
                                      <span className="px-2 py-1 bg-orchard-green text-cauliflower text-xs font-medium rounded">Selected</span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-4 text-slate text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                      </svg>
                                      {company.employees} employees
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    window.open(company.website, '_blank')
                                  }}
                                  className="px-4 py-2 bg-midnight-medium text-slate-light border border-midnight-light rounded-lg hover:bg-midnight-light transition-colors text-sm font-medium"
                                >
                                  Visit Website
                                </button>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Duration</div>
                                  <div className="text-orchard-blue font-semibold text-sm">{company.duration}</div>
                                </div>
                                <div className="bg-midnight-medium rounded-lg p-3">
                                  <div className="text-slate text-xs mb-1">Compensation</div>
                                  <div className={`font-semibold text-sm ${company.paid ? 'text-orchard-green' : 'text-yellow-400'}`}>
                                    {company.paid ? 'Paid' : 'Unpaid'}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="text-slate-light font-medium mb-2">Apprenticeship Outcome</h4>
                                <p className="text-slate text-sm leading-relaxed">{company.hiringOutcome}</p>
                              </div>
                              
                              <div className="mb-4">
                                <h4 className="text-slate-light font-medium mb-2">About</h4>
                                <p className="text-slate text-sm leading-relaxed">{company.description}</p>
                              </div>
                              
                              <button
                                onClick={() => setSelectedApprenticeship(company)}
                                className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                                  selectedApprenticeship?.name === company.name
                                    ? 'bg-orchard-green text-cauliflower hover:bg-orchard-green/90'
                                    : 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                                }`}
                              >
                                {selectedApprenticeship?.name === company.name ? 'Selected' : 'Choose Apprenticeship'}
                              </button>
                            </div>
                          ))
                        })()}
                      </div>
                      
                      {/* Navigation Buttons */}
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => setActiveTab('education')}
                          className="px-6 py-3 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-light/80 transition-colors font-medium"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setActiveTab('action-plan-summary')}
                          disabled={!selectedApprenticeship}
                          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                            selectedApprenticeship
                              ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                              : 'bg-midnight-light text-slate cursor-not-allowed'
                          }`}
                        >
                          Continue
                        </button>
                      </div>
                      {!selectedApprenticeship && (
                        <p className="text-center text-slate text-sm mt-2">Please select an apprenticeship program to continue</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Financial Aid & Planning Page - Traditional College Path */}
          {activeTab === 'financial-aid-planning' && (
            <div className="h-full flex flex-col">
              <div className="flex flex-1 overflow-hidden">
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">
                              Financial Aid &amp; Planning
                            </h1>
                            <p className="text-slate">
                              Tell us about your financial aid needs and planning preferences.
                            </p>
                          </div>
                          <button
                            onClick={() => setActiveTab('choose-colleges')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Financial Aid & Planning Form */}
                      <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6 mb-6">
                        <h2 className="text-xl font-semibold text-slate-light mb-6">Financial Aid &amp; Planning</h2>
                        <div className="space-y-6">
                          {/* Financial Aid */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-light mb-4">Financial Aid</h3>
                            <div className="flex flex-wrap gap-3">
                              {['Self-Funded', 'Partial Support', 'Full Support Needed'].map((aid) => (
                                <div key={aid} className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => handleInputChange('financialAid', aid)}
                                    className={`px-4 py-2 rounded-lg border transition-colors ${
                                      formData.financialAid === aid
                                        ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                        : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                    }`}
                                  >
                                    {aid}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleFinancialAidInfoClick(aid)
                                    }}
                                    className="p-1.5 hover:bg-orchard-blue/10 transition-colors rounded"
                                    title={`Learn more about ${aid}`}
                                  >
                                    <img src={OrchieAgentSuggestion} alt="Ask Orchie" className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Additional Support */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-light mb-4">Additional Support</h3>
                            <div className="flex flex-wrap gap-3">
                              {['Scholarships', 'Grants', 'Student Loans', '+ add'].map((support) => (
                                <div key={support} className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => support !== '+ add' && handleMultiSelect('additionalSupport', support)}
                                    className={`px-4 py-2 rounded-lg border transition-colors ${
                                      formData.additionalSupport.includes(support)
                                        ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                        : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                    }`}
                                  >
                                    {support}
                                  </button>
                                  {support !== '+ add' && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleFinancialAidInfoClick(support)
                                      }}
                                      className="p-1.5 hover:bg-orchard-blue/10 transition-colors rounded"
                                      title={`Learn more about ${support}`}
                                    >
                                      <img src={OrchieAgentSuggestion} alt="Ask Orchie" className="h-4 w-4" />
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Time Commitment */}
                          <div>
                            <h3 className="text-lg font-semibold text-slate-light mb-4">Time Commitment</h3>
                            <div className="flex flex-wrap gap-3">
                              {['Flexible', 'Part Time', 'Full Time'].map((time) => (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => handleInputChange('timeCommitment', time)}
                                  className={`px-4 py-2 rounded-lg border transition-colors ${
                                    formData.timeCommitment === time
                                      ? 'border-orchard-blue bg-orchard-blue/10 text-orchard-blue'
                                      : 'border-midnight-light bg-midnight-medium text-slate hover:border-orchard-blue'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => setActiveTab('choose-colleges')}
                          className="px-6 py-3 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-light/80 transition-colors font-medium"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setActiveTab('action-plan-summary')}
                          className="px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Plan Results Page */}
          {activeTab === 'action-plan-results' && getCurrentPlan() && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}
                
                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="max-w-6xl mx-auto">
                    {/* Welcome Message */}
                    {!dismissedMessages.actionPlanResults && getCurrentPlan() && (
                      <div className="mb-6 bg-orchard-green/10 border-2 border-orchard-green rounded-lg p-6 flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-light mb-2">Start Your Plan</h3>
                          <p className="text-slate-light text-sm">
                            We've created your plan! Time to tackle the first steps: Research Programs & Create Study Schedule.
                          </p>
                        </div>
                        <button
                          onClick={() => dismissMessage('actionPlanResults')}
                          className="ml-4 flex-shrink-0 text-slate hover:text-slate-light transition-colors"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                      {/* Header */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h1 className="text-3xl font-bold text-slate-light mb-2">Your Personalized Action Plan</h1>
                            <p className="text-slate">Created for {getCurrentPlan()?.plan.personalInfo?.name || 'Orchie PH'}</p>
                          </div>
                          <button
                            onClick={() => setActiveTab(previousTab || 'action-plan')}
                            className="text-slate hover:text-slate-light transition-colors"
                          >
                            <XMarkIcon className="h-6 w-6" />
                          </button>
                        </div>
                      </div>

                      {/* Long-Term Career Goal */}
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-slate-light mb-4">Long-Term Career Goal</h2>
                        {isEditingCareerGoal ? (
                          <div className="bg-gradient-to-r from-orchard-blue/10 to-orchard-green/10 rounded-lg border-2 border-orchard-blue/30 p-6">
                            <textarea
                              value={editingCareerGoalText}
                              onChange={(e) => setEditingCareerGoalText(e.target.value)}
                              rows={3}
                              className="w-full px-4 py-3 bg-midnight-dark/50 border border-orchard-blue/30 rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue focus:border-orchard-blue mb-3 text-lg"
                              placeholder="Enter your career goal..."
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => {
                                  if (!currentPlanId) return
                                  setActionPlans(prev => prev.map(p => 
                                    p.id === currentPlanId 
                                      ? { ...p, plan: { ...p.plan, careerGoal: editingCareerGoalText } }
                                      : p
                                  ))
                                  setIsEditingCareerGoal(false)
                                }}
                                className="px-4 py-2 bg-orchard-green text-cauliflower rounded-lg hover:bg-orchard-green/90 transition-colors font-medium text-sm"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => {
                                  setIsEditingCareerGoal(false)
                                  setEditingCareerGoalText('')
                                }}
                                className="px-4 py-2 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-medium transition-colors font-medium text-sm"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div 
                            onClick={() => {
                              const currentGoal = getCurrentPlan()?.plan.careerGoal || generateCareerGoal(
                                getCurrentPlan()?.plan.selectedPath || null,
                                getCurrentPlan()?.careerTitle || 'your chosen career',
                                getCurrentPlan()?.plan.timeline?.totalDuration || 0
                              )
                              setEditingCareerGoalText(currentGoal)
                              setIsEditingCareerGoal(true)
                            }}
                            className="bg-gradient-to-r from-orchard-blue/10 to-orchard-green/10 rounded-lg border-2 border-orchard-blue/30 p-8 cursor-pointer hover:border-orchard-blue hover:from-orchard-blue/15 hover:to-orchard-green/15 transition-all group shadow-lg shadow-orchard-blue/10"
                          >
                            <div className="flex items-start justify-between">
                              <p className="text-slate-light text-xl font-medium flex-1 leading-relaxed">
                                {getCurrentPlan()?.plan.careerGoal || generateCareerGoal(
                                  getCurrentPlan()?.plan.selectedPath || null,
                                  getCurrentPlan()?.careerTitle || 'your chosen career',
                                  getCurrentPlan()?.plan.timeline?.totalDuration || 0
                                )}
                              </p>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const currentGoal = getCurrentPlan()?.plan.careerGoal || generateCareerGoal(
                                    getCurrentPlan()?.plan.selectedPath || null,
                                    getCurrentPlan()?.careerTitle || 'your chosen career',
                                    getCurrentPlan()?.plan.timeline?.totalDuration || 0
                                  )
                                  setEditingCareerGoalText(currentGoal)
                                  setIsEditingCareerGoal(true)
                                }}
                                className="ml-4 p-2 text-slate hover:text-orchard-blue transition-colors rounded hover:bg-orchard-blue/20 opacity-0 group-hover:opacity-100"
                                title="Edit goal"
                              >
                                <PencilIcon className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-8">
                        {/* Timeline Overview & Financial Plan */}
                        <div>
                          <h2 className="text-2xl font-semibold text-slate-light mb-6">Timeline Overview &amp; Financial Plan</h2>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Timeline Section */}
                            <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="p-2 bg-orchard-blue/10 rounded-lg">
                                  <ClockIcon className="h-6 w-6 text-orchard-blue" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-light">Timeline</h3>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="bg-midnight-medium rounded-lg p-4 border border-midnight-light">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 bg-orchard-blue/20 rounded-lg">
                                        <CalendarIcon className="h-5 w-5 text-orchard-blue" />
                                      </div>
                                      <div>
                                        <p className="text-slate text-sm">Total Duration</p>
                                        <p className="text-slate-light font-semibold text-xl">{getCurrentPlan()?.plan.timeline.totalDuration} months</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bg-midnight-medium rounded-lg p-4 border border-midnight-light">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 bg-orchard-green/20 rounded-lg">
                                        <CalendarIcon className="h-5 w-5 text-orchard-green" />
                                      </div>
                                      <div>
                                        <p className="text-slate text-sm">Completion Date</p>
                                        <p className="text-slate-light font-semibold text-xl">{getCurrentPlan()?.plan.estimatedCompletion}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Financial Plan Section */}
                            <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="p-2 bg-orchard-green/10 rounded-lg">
                                  <CurrencyDollarIcon className="h-6 w-6 text-orchard-green" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-light">Financial Plan</h3>
                              </div>
                              
                              <div className="space-y-4 mb-6">
                                <div className="bg-midnight-medium rounded-lg p-4 border border-midnight-light">
                                  <p className="text-slate text-sm mb-2">Total Estimated Cost</p>
                                  <div className="flex items-end gap-3">
                                    <p className="text-orchard-blue font-bold text-3xl">${getCurrentPlan()?.plan.financialPlan.totalCost.toLocaleString()}</p>
                                    <p className="text-slate text-xs mb-1">
                                      ~${Math.round((getCurrentPlan()?.plan.financialPlan.totalCost || 0) / (getCurrentPlan()?.plan.timeline.totalDuration || 1)).toLocaleString()}/month
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="bg-midnight-medium rounded-lg p-4 border border-midnight-light">
                                  <p className="text-slate text-sm mb-3">Funding Sources</p>
                                  <div className="flex flex-wrap gap-2">
                                    {getCurrentPlan()?.plan.financialPlan.fundingSources.map((source: string, index: number) => (
                                      <span 
                                        key={index}
                                        className="px-3 py-1 bg-orchard-green/10 text-orchard-green text-xs font-medium rounded-full border border-orchard-green/20"
                                      >
                                        {source}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {getCurrentPlan()?.plan.financialPlan.scholarships.length > 0 && (
                                <div className="border-t border-midnight-light pt-4">
                                  <h4 className="text-base font-semibold text-slate-light mb-4">Available Scholarships</h4>
                                  <div className="space-y-3">
                                    {getCurrentPlan()?.plan.financialPlan.scholarships.map((scholarship: any, index: number) => (
                                      <div key={index} className="bg-midnight-medium rounded-lg p-4 border border-midnight-light">
                                        <div className="flex justify-between items-start">
                                          <div className="flex-1">
                                            <h5 className="text-slate-light font-medium mb-1">{scholarship.name}</h5>
                                            <p className="text-slate text-xs">Deadline: {scholarship.deadline}</p>
                                          </div>
                                          <p className="text-orchard-green font-bold text-lg ml-4">{scholarship.amount}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Key Milestones */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h2 className="text-2xl font-semibold text-slate-light mb-2">Key Milestones</h2>
                              <p className="text-slate text-sm">Click on a milestone to track your progress (Not Started → In Progress → Completed → Blocked)</p>
                            </div>
                            <button
                              onClick={addMilestone}
                              className="flex items-center gap-2 px-4 py-2 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium text-sm"
                            >
                              <PlusIcon className="h-5 w-5" />
                              Add Milestone
                            </button>
                          </div>
                          <div className="space-y-4 mt-6">
                            {getCurrentPlan()?.plan.milestones.map((milestone: any, index: number) => {
                              const status = getMilestoneStatus(milestone.title, currentPlanId || undefined)
                              const isEditing = editingMilestoneIndex === index
                              const isDragging = draggedMilestoneIndex === index
                              const isDragOver = dragOverIndex === index
                              
                              return (
                              <div 
                                key={index} 
                                draggable={!isEditing}
                                onDragStart={() => !isEditing && handleDragStart(index)}
                                onDragOver={(e) => !isEditing && handleDragOver(e, index)}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => !isEditing && handleDrop(e, index)}
                                onDragEnd={handleDragEnd}
                                className={`bg-midnight-dark rounded-lg border p-6 transition-all ${
                                  isDragging ? 'opacity-50 border-orchard-blue' :
                                  isDragOver ? 'border-orchard-green border-2' :
                                  'border-midnight-light'
                                } ${!isEditing ? 'cursor-move hover:border-orchard-blue/50' : ''}`}
                              >
                                {isEditing ? (
                                  <div className="space-y-4">
                                    <div>
                                      <label className="block text-sm font-medium text-slate-light mb-2">Title</label>
                                      <input
                                        type="text"
                                        value={editingMilestone?.title || ''}
                                        onChange={(e) => setEditingMilestone(prev => prev ? { ...prev, title: e.target.value } : null)}
                                        className="w-full px-4 py-2 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-slate-light mb-2">Description</label>
                                      <textarea
                                        value={editingMilestone?.description || ''}
                                        onChange={(e) => setEditingMilestone(prev => prev ? { ...prev, description: e.target.value } : null)}
                                        rows={3}
                                        className="w-full px-4 py-2 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-slate-light mb-2">Timeline</label>
                                      <input
                                        type="text"
                                        value={editingMilestone?.timeline || ''}
                                        onChange={(e) => setEditingMilestone(prev => prev ? { ...prev, timeline: e.target.value } : null)}
                                        placeholder="e.g., Month 1-2"
                                        className="w-full px-4 py-2 bg-midnight-medium border border-midnight-light rounded-lg text-slate-light focus:outline-none focus:ring-2 focus:ring-orchard-blue"
                                      />
                                    </div>
                                    <div className="flex gap-2">
                                      <button
                                        onClick={saveMilestone}
                                        className="px-4 py-2 bg-orchard-green text-cauliflower rounded-lg hover:bg-orchard-green/90 transition-colors font-medium"
                                      >
                                        Save
                                      </button>
                                      <button
                                        onClick={cancelEditingMilestone}
                                        className="px-4 py-2 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-medium transition-colors font-medium"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex items-start gap-4">
                                    {/* Reorder buttons on the left */}
                                    <div className="flex flex-col gap-1 pt-1">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          moveMilestone(index, 'up')
                                        }}
                                        disabled={index === 0}
                                        className={`p-1.5 rounded transition-colors ${
                                          index === 0 
                                            ? 'opacity-30 cursor-not-allowed' 
                                            : 'hover:bg-midnight-light hover:text-orchard-blue'
                                        }`}
                                        title="Move up"
                                      >
                                        <ArrowUpIcon className="h-4 w-4 text-slate" />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          moveMilestone(index, 'down')
                                        }}
                                        disabled={index === (getCurrentPlan()?.plan.milestones.length || 0) - 1}
                                        className={`p-1.5 rounded transition-colors ${
                                          index === (getCurrentPlan()?.plan.milestones.length || 0) - 1 
                                            ? 'opacity-30 cursor-not-allowed' 
                                            : 'hover:bg-midnight-light hover:text-orchard-blue'
                                        }`}
                                        title="Move down"
                                      >
                                        <ArrowDownIcon className="h-4 w-4 text-slate" />
                                      </button>
                                    </div>
                                    
                                    {/* Content in the middle */}
                                    <div className="flex-1">
                                      <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-slate-light font-semibold text-lg">{milestone.title}</h3>
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => toggleMilestoneStatus(milestone.title, status, currentPlanId || undefined)}
                                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                              status === 'completed' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' :
                                              status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' :
                                              status === 'blocked' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' :
                                              'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                                            }`}
                                          >
                                            {status === 'completed' ? '✓ Completed' : 
                                             status === 'in-progress' ? '⟳ In Progress' :
                                             status === 'blocked' ? '✖ Blocked' :
                                             '○ Not Started'}
                                          </button>
                                          <span className="text-orchard-blue text-sm font-medium bg-orchard-blue/10 px-3 py-1 rounded-full">{milestone.timeline}</span>
                                        </div>
                                      </div>
                                      <p className="text-slate text-sm leading-relaxed">{milestone.description}</p>
                                    </div>
                                    
                                    {/* Edit and Delete buttons on the far right */}
                                    <div className="flex items-center gap-2 pt-1">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          startEditingMilestone(index)
                                        }}
                                        className="p-2 text-slate hover:text-orchard-blue transition-colors rounded hover:bg-midnight-light"
                                        title="Edit milestone"
                                      >
                                        <PencilIcon className="h-5 w-5" />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          if (confirm('Are you sure you want to delete this milestone?')) {
                                            deleteMilestone(index)
                                          }
                                        }}
                                        className="p-2 text-slate hover:text-red-400 transition-colors rounded hover:bg-midnight-light"
                                        title="Delete milestone"
                                      >
                                        <TrashIcon className="h-5 w-5" />
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )})}
                          </div>
                        </div>

                        {/* Additional Resources */}
                        <div className="mt-12 pt-8 border-t-2 border-midnight-light">
                          <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                              <h2 className="text-2xl font-semibold text-slate-light">Additional Resources</h2>
                              <button
                                onClick={() => {
                                  // Generate query and AI response about resources
                                  const careerTitle = getCurrentPlan()?.careerTitle || 'this career'
                                  const query = `Tell me more about resources for ${careerTitle}`
                                  
                                  // Generate AI response about resources
                                  const resourceResponses = [
                                    `Great question! For ${careerTitle}, there are many excellent resources to help you learn and grow. I'd recommend starting with online courses that cover the fundamentals, then moving to hands-on projects. Don't forget to explore industry tools and platforms that professionals actually use. Building a strong portfolio and connecting with others in the field through communities can also be incredibly valuable.`,
                                    `When it comes to resources for ${careerTitle}, I suggest a multi-pronged approach. Start with structured learning through courses and bootcamps, then practice with real-world tools. Join online communities, attend virtual events, and consider finding a mentor. The key is combining theoretical knowledge with practical experience.`,
                                    `For ${careerTitle}, the best resources combine learning platforms, professional tools, and community support. I'd recommend starting with courses that match your learning style, then getting hands-on with industry-standard tools. Don't underestimate the value of connecting with others who are on the same path - their insights can be invaluable!`
                                  ]
                                  
                                  const randomIndex = Math.floor(Math.random() * resourceResponses.length)
                                  const aiResponse = resourceResponses[randomIndex]
                                  
                                  // Add directly to chat history with AI response
                                  const newChatEntry = {
                                    id: Date.now().toString(),
                                    query: query,
                                    results: { careers: [], topics: [] },
                                    timestamp: new Date(),
                                    aiResponse: aiResponse
                                  }
                                  
                                  setChatHistory(prev => [...prev, newChatEntry])
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-midnight-dark border border-midnight-light rounded-lg hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200 text-slate-light"
                              >
                                <img src={OrchieAgentSuggestion} alt="Orchie" className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm font-medium">Ask Orchie</span>
                              </button>
                            </div>
                            <p className="text-slate text-sm">These resources can help you learn more about this potential career</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-xl font-semibold text-slate-light mb-4">Courses</h3>
                              <div className="space-y-4">
                                {getCurrentPlan()?.plan.resources.courses.slice(0, 3).map((course: any, index: number) => (
                                  <div key={index} className="bg-midnight-dark rounded-lg border border-midnight-light p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h4 className="text-slate-light font-medium">{course.name}</h4>
                                        <p className="text-slate text-sm">{course.provider}</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-orchard-blue font-medium">{course.cost}</p>
                                        <p className="text-slate text-xs">{course.duration}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-semibold text-slate-light mb-4">Tools</h3>
                              <div className="space-y-4">
                                {getCurrentPlan()?.plan.resources.tools.slice(0, 3).map((tool: any, index: number) => (
                                  <div key={index} className="bg-midnight-dark rounded-lg border border-midnight-light p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h4 className="text-slate-light font-medium">{tool.name}</h4>
                                        <p className="text-slate text-sm">{tool.description}</p>
                                      </div>
                                      <p className="text-orchard-blue font-medium">{tool.cost}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="mt-12 flex gap-4 justify-center">
                        <button
                          onClick={() => {
                            loadExistingPlanIntoForm()
                            setActiveTab('action-plan')
                          }}
                          className="px-8 py-4 bg-midnight-light text-slate-light rounded-lg hover:bg-midnight-light/80 transition-colors font-semibold"
                        >
                          Edit Plan
                        </button>
                        <button
                          onClick={() => {
                            // Plan is already saved to localStorage via useEffect
                            setToastMessage('Action plan saved successfully!')
                            setShowToast(true)
                            setTimeout(() => setShowToast(false), 3000)
                            // Navigate back to action plan dashboard
                            setActiveTab('career-action-plan')
                          }}
                          className="px-8 py-4 bg-orchard-green text-cauliflower rounded-lg hover:bg-orchard-green/90 transition-colors font-semibold"
                        >
                          Save Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold text-cauliflower mb-4">Your Profile</h2>
              <p className="text-slate">User profile management will go here</p>
            </div>
          )}

          {/* Education & Training Plan Page */}
          {activeTab === 'education' && (
            <div className="h-full flex flex-col">
              {/* Main Content Area */}
              <div className="flex flex-1 overflow-hidden">
                {/* ChatSidebar - Fixed positioned */}
                {showChatSidebar && (
                <ChatSidebar
                  chatWidth={chatWidth}
                  isResizing={isResizing}
                  onResizeStart={handleResizeStart}
                  chatHistory={chatHistory}
                  showChatHistoryMenu={showChatHistoryMenu}
                  onToggleChatHistoryMenu={() => setShowChatHistoryMenu(!showChatHistoryMenu)}
                  searchQuery={searchQuery}
                  onSearchQueryChange={setSearchQuery}
                  onSearch={handleSearch}
                  onKeyPress={handleKeyPress}
                  onCareerClick={handleCareerClick}
                  onTopicClick={handleTopicClick}
                  onViewCareers={() => setActiveTab('explore')}
                  onViewSpecificCareers={(careerIds) => {
                    setSpecificCareersToShow(careerIds)
                    setActiveTab('explore')
                  }}
                  dummyChatHistory={dummyChatHistory}
                  formatTimestamp={formatTimestamp}
                  isNavCollapsed={isNavCollapsed}
                  isNavRailMode={isNavRailMode}
                  onClose={handleChatClose}
                />
                )}

                {/* Right Content Area */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{
                    marginLeft: showChatSidebar ? `${chatWidth}%` : '0'
                  }}
                >
                  <div className="p-6">
                    <div className="space-y-8">
                      {/* Education Pathways Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Traditional College */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-light">Traditional College</h3>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">Most Common</span>
                              <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">4 Years</span>
                            </div>
                          </div>
                          <p className="text-slate text-sm mb-4">B.A./B.S. in Design, HCI, or related field</p>
                          
                          {/* Cost, Degree, Location Boxes */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Cost</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">$40k - $120k</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Outcome</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Bachelor's Degree</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Location</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">In-Person</div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Entry Roles</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Junior Product Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UX Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Interaction Designer</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Key Skills</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UX Research</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">wireframing</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">prototyping</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">user testing</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">design systems</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">visual design</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-green-400 text-sm font-medium mb-1">Pros</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Comprehensive education</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Strong theoretical foundation</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Networking opportunities</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Internship access</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-red-400 text-sm font-medium mb-1">Cons</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Higher cost</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Longer time to start working</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Less practical experience</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <button 
                              onClick={() => handleChoosePath('Traditional College')}
                              className="w-full bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium"
                            >
                              Choose Path
                            </button>
                          </div>
                        </div>

                        {/* Design Bootcamp */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-light">Design Bootcamp</h3>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Trending</span>
                              <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">3-6 Months</span>
                            </div>
                          </div>
                          <p className="text-slate text-sm mb-4">UX/UI Design Bootcamp</p>
                          
                          {/* Cost, Degree, Location Boxes */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Cost</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">$10k - $20k</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Outcome</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Certificate</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Location</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Online or hybrid</div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Entry Roles</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Junior Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UX Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UI Designer</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Key Skills</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Figma</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UI design</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">usability testing</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">design systems</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">prototyping</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-green-400 text-sm font-medium mb-1">Pros</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Faster entry to workforce</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Practical skills</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Industry-focused curriculum</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Career support</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-red-400 text-sm font-medium mb-1">Cons</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Intensive pace</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Less theoretical knowledge</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>May need additional training</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <button 
                              onClick={() => handleChoosePath('Design Bootcamp')}
                              className="w-full bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium"
                            >
                              Choose Path
                            </button>
                          </div>
                        </div>

                        {/* Self-Taught */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-light">Self-Taught</h3>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">6-12 Months</span>
                            </div>
                          </div>
                          <p className="text-slate text-sm mb-4">Online Courses &amp; Projects</p>
                          
                          {/* Cost, Degree, Location Boxes */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Cost</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">$0 - $10k</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Outcome</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Portfolio-based</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Location</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Fully online</div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Entry Roles</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Freelance Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Design Intern</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Junior Designer</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Key Skills</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UI design</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">design tools</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">prototyping</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">user research</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">visual design</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-green-400 text-sm font-medium mb-1">Pros</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Lowest cost</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Flexible schedule</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Learn at own pace</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Build portfolio while learning</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-red-400 text-sm font-medium mb-1">Cons</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Requires discipline</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>No formal credential</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Limited networking</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Need to be self-motivated</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <button 
                              onClick={() => handleChoosePath('Self-Taught')}
                              className="w-full bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium"
                            >
                              Choose Path
                            </button>
                          </div>
                        </div>

                        {/* Apprenticeship */}
                        <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-slate-light">Apprenticeship</h3>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">6-12 Months</span>
                            </div>
                          </div>
                          <p className="text-slate text-sm mb-4">Design Apprenticeship</p>
                          
                          {/* Cost, Outcome, Location Boxes */}
                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Cost</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Paid</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Outcome</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Portfolio/Experience</div>
                            </div>
                            <div className="bg-midnight-medium rounded-lg p-3 text-center">
                              <div className="text-slate text-xs font-medium mb-2">Location</div>
                              <div className="w-6 h-6 mx-auto mb-2 text-slate">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                              </div>
                              <div className="text-slate text-sm font-medium">Hybrid</div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-4">
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Entry Roles</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Junior Product Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UX Designer</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">Interaction Designer</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-slate-light text-sm font-medium mb-2">Key Skills</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">UX Research</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">wireframing</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">prototyping</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">user testing</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">design systems</span>
                                <span className="px-2 py-1 bg-midnight-light text-slate text-xs rounded">visual design</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-green-400 text-sm font-medium mb-1">Pros</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Earn while you learn</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Real-world experience</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Mentorship</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-green-400">↑</span>
                                  <span>Potential for full-time role</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-red-400 text-sm font-medium mb-1">Cons</h4>
                              <ul className="text-slate text-xs space-y-1">
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Limited programs</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>Competitive entry</span>
                                </li>
                                <li className="flex items-center gap-1">
                                  <span className="text-red-400">↓</span>
                                  <span>May require relocation</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6">
                            <button 
                              onClick={() => handleChoosePath('Apprenticeship')}
                              className="w-full bg-orchard-blue text-cauliflower px-4 py-2 rounded-lg hover:bg-orchard-blue/90 transition-colors font-medium"
                            >
                              Choose Path
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </main>

      {/* Education Career Selection Modal */}
      {showEducationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-light">Choose which career we should start building an education and training plan for</h2>
              <button
                onClick={() => setShowEducationModal(false)}
                className="text-slate hover:text-slate-light transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {focusedCareers.map((career) => (
                <div
                  key={career.id}
                  onClick={() => handleEducationCareerSelect(career)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedCareerForEducation?.id === career.id
                      ? 'border-orchard-green bg-orchard-green/10'
                      : 'border-midnight-light hover:border-orchard-blue'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-slate-light font-medium">{career.title}</h3>
                      <p className="text-slate text-sm mt-1">{career.description?.substring(0, 100)}...</p>
                    </div>
                    {selectedCareerForEducation?.id === career.id && (
                      <div className="ml-4">
                        <div className="w-6 h-6 bg-orchard-green rounded-full flex items-center justify-center">
                          <span className="text-cauliflower text-sm">✓</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleEducationContinue}
                disabled={!selectedCareerForEducation}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCareerForEducation
                    ? 'bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90'
                    : 'bg-midnight-light text-slate cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Careers to Comparison Modal */}
      {showAddCareersModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-midnight-dark rounded-lg border border-midnight-light p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-light">Add Careers to Compare</h2>
              <button
                onClick={() => setShowAddCareersModal(false)}
                className="text-slate hover:text-slate-light transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-slate text-sm">Select careers from your saved list to add to the comparison.</p>
            </div>
            
            {(() => {
              // Get all saved careers (deduplicated by ID)
              const careerMap = new Map<string, any>()
              interestedCareers.forEach(career => careerMap.set(career.id, career))
              focusedCareers.forEach(career => careerMap.set(career.id, career))
              const allSavedCareers = Array.from(careerMap.values())
              
              // Filter out careers already in comparison
              const availableCareers = allSavedCareers.filter(career => 
                !isCareerSelectedForComparison(career)
              )
              
              if (availableCareers.length === 0) {
                return (
                  <div className="text-center py-8">
                    <p className="text-slate">All your saved careers are already being compared.</p>
                  </div>
                )
              }
              
              return (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {availableCareers.map((career) => {
                      const isStarred = isCareerFocused(career)
                      return (
                        <div
                          key={career.id}
                          onClick={() => toggleCareerForComparison(career)}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            isCareerSelectedForComparison(career)
                              ? 'border-orchard-blue bg-orchard-blue/10'
                              : 'border-midnight-light hover:border-orchard-blue'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-slate-light font-medium">{career.title}</h3>
                                {isStarred && (
                                  <span className="px-2 py-0.5 bg-orchard-green/20 text-orchard-green text-xs font-medium rounded">⭐ Focused</span>
                                )}
                                {actionPlans.some(plan => plan.careerId === career.id) && (
                                  <span className="px-2 py-0.5 bg-orchard-blue/20 text-orchard-blue text-xs font-medium rounded">Action Plan</span>
                                )}
                              </div>
                              <p className="text-slate text-sm">{career.description?.substring(0, 100)}...</p>
                            </div>
                            {isCareerSelectedForComparison(career) && (
                              <div className="ml-4 flex-shrink-0">
                                <div className="w-6 h-6 bg-orchard-blue rounded-full flex items-center justify-center">
                                  <span className="text-cauliflower text-sm">✓</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowAddCareersModal(false)}
                      className="px-6 py-2 rounded-lg font-medium transition-colors bg-midnight-light text-slate-light hover:bg-midnight-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowAddCareersModal(false)}
                      className="px-6 py-2 rounded-lg font-medium transition-colors bg-orchard-blue text-cauliflower hover:bg-orchard-blue/90"
                    >
                      Done
                    </button>
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-blue-600 border border-blue-500 rounded-lg p-4 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-white text-sm">{toastMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  )
}

export default App
