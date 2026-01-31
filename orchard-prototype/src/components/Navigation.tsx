import React, { useState, useEffect } from 'react'
import { UserIcon, Bars3Icon, XMarkIcon, ChartBarIcon, ChevronLeftIcon, BriefcaseIcon, ClipboardDocumentCheckIcon, HomeIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import OrchardLogo from '../assets/orchard-logo.svg'

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

// Simple circle component for incomplete state
const EmptyCircle = ({ className }: { className?: string }) => (
  <div className={`rounded-full border border-slate ${className || 'h-4 w-4'}`} />
)

interface NavigationProps {
  showBackButton?: boolean
  onBackClick?: () => void
  onOverviewClick?: () => void
  onHomeClick: () => void
  onMyCareersClick?: () => void
  onCareerActionPlanClick?: () => void
  onStateChange?: (isCollapsed: boolean, isRailMode: boolean, isMenuOpen?: boolean) => void
  onMenuToggle?: () => void
  isMenuOpen?: boolean
  isExploreComplete?: boolean
  isMyCareersComplete?: boolean
  isPlanComplete?: boolean
  activeTab?: string
}

const Navigation: React.FC<NavigationProps> = ({
  showBackButton = false,
  onBackClick,
  onOverviewClick,
  onHomeClick,
  onMyCareersClick,
  onCareerActionPlanClick,
  onStateChange,
  onMenuToggle,
  isMenuOpen: externalIsMenuOpen,
  isExploreComplete = false,
  isMyCareersComplete = false,
  isPlanComplete = false,
  activeTab = ''
}) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const isMenuOpen = externalIsMenuOpen !== undefined ? externalIsMenuOpen : internalMenuOpen
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Load collapsed state from localStorage, default to true (collapsed)
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('orchard-sidebar-collapsed')
        return saved ? JSON.parse(saved) : true
      } catch (error) {
        console.warn('Failed to load sidebar state from localStorage:', error)
        return true
      }
    }
    return true
  })
  const [isRailMode, setIsRailMode] = useState(false)

  // Save collapsed state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('orchard-sidebar-collapsed', JSON.stringify(isCollapsed))
      } catch (error) {
        console.warn('Failed to save sidebar state to localStorage:', error)
      }
    }
  }, [isCollapsed])

  // Notify parent component of state changes
  useEffect(() => {
    onStateChange?.(isCollapsed, isRailMode, isMenuOpen)
  }, [isCollapsed, isRailMode, isMenuOpen, onStateChange])

  // Handle window resize to determine rail mode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsRailMode(true)
        setIsCollapsed(false)
      } else {
        setIsRailMode(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMenuToggle = () => {
    if (isRailMode) {
      if (onMenuToggle) {
        onMenuToggle()
      } else {
        setInternalMenuOpen(!isMenuOpen)
      }
    } else {
      setIsCollapsed(!isCollapsed)
    }
  }

  const handleMenuClose = () => {
    if (onMenuToggle) {
      // If external control, we need to close it through the parent
      // The parent will handle closing via onMenuToggle
    } else {
      setInternalMenuOpen(false)
    }
  }

  const handleOverviewClick = () => {
    onOverviewClick?.()
    if (isRailMode) {
      if (onMenuToggle) {
        onMenuToggle() // Close menu via parent
      } else {
        setInternalMenuOpen(false)
      }
    }
  }

  const handleHomeClick = () => {
    onHomeClick()
    if (isRailMode) {
      if (onMenuToggle) {
        onMenuToggle() // Close menu via parent
      } else {
        setInternalMenuOpen(false)
      }
    }
  }

  const handleMyCareersClick = () => {
    onMyCareersClick?.()
    if (isRailMode) {
      if (onMenuToggle) {
        onMenuToggle() // Close menu via parent
      } else {
        setInternalMenuOpen(false)
      }
    }
  }

  const handleCareerActionPlanClick = () => {
    onCareerActionPlanClick?.()
    if (isRailMode) {
      if (onMenuToggle) {
        onMenuToggle() // Close menu via parent
      } else {
        setInternalMenuOpen(false)
      }
    }
  }

  return (
    <>
      {/* Backdrop Overlay for Mobile Drawer */}
      {isMenuOpen && isRailMode && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            if (onMenuToggle) {
              onMenuToggle()
            } else {
              setInternalMenuOpen(false)
            }
          }}
        />
      )}
      
      {/* Navigation Drawer/Rail */}
      <div className={`bg-midnight-light border-r border-midnight-light transition-all duration-300 ease-out ${
        isRailMode 
          ? `fixed top-0 left-0 h-full w-80 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`
          : `fixed top-0 left-0 h-full ${isCollapsed ? 'w-16' : 'w-80'} z-40`
      }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 h-16">
          <div className="flex items-center">
            {!isRailMode && (
              <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-midnight-medium rounded-lg transition-colors group mr-2"
              >
                <ChevronLeftIcon className={`h-5 w-5 text-slate group-hover:text-slate-light transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
              </button>
            )}
            
            {isRailMode && (
              <button 
                onClick={() => {
                  if (onMenuToggle) {
                    onMenuToggle()
                  } else {
                    setInternalMenuOpen(false)
                  }
                }}
                className="p-2 hover:bg-midnight-medium rounded-lg transition-colors group mr-2"
              >
                <XMarkIcon className="h-5 w-5 text-slate group-hover:text-slate-light" />
              </button>
            )}
          </div>
          
          <div className="flex-1" />
        </div>
        
        {/* Navigation Items */}
        <nav className={isCollapsed ? "p-2" : "p-4"}>
          <div className="space-y-2">
            <button
              onClick={handleOverviewClick}
              className={`w-full flex items-center transition-all duration-200 text-left group relative ${
                isCollapsed ? 'justify-center p-3 rounded-lg hover:bg-midnight-medium' : 'space-x-3 p-3 rounded-lg hover:bg-midnight-medium'
              } ${activeTab === 'dashboard' ? 'bg-midnight-medium' : ''}`}
              title={isCollapsed ? 'Overview' : ''}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-orchard-blue/30' 
                  : 'bg-orchard-blue/20 group-hover:bg-orchard-blue/30'
              }`}>
                <HomeIcon className={`h-5 w-5 ${
                  activeTab === 'dashboard' 
                    ? 'text-orchard-blue' 
                    : 'text-orchard-blue'
                }`} />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col flex-1">
                  <span className="text-slate-light font-medium">Overview</span>
                  <span className="text-slate text-sm">View Progress</span>
                </div>
              )}
            </button>
            
            <button
              onClick={handleHomeClick}
              className={`w-full flex items-center transition-all duration-200 text-left group relative ${
                isCollapsed ? 'justify-center p-3 rounded-lg hover:bg-midnight-medium' : 'space-x-3 p-3 rounded-lg hover:bg-midnight-medium'
              } ${activeTab === 'home' ? 'bg-midnight-medium' : ''}`}
              title={isCollapsed ? 'Explore' : ''}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeTab === 'home' 
                  ? 'bg-orchard-blue/30' 
                  : 'bg-orchard-blue/20 group-hover:bg-orchard-blue/30'
              }`}>
                <CompassIcon className={`h-5 w-5 ${
                  activeTab === 'home' 
                    ? 'text-orchard-blue' 
                    : 'text-orchard-blue'
                }`} />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col flex-1">
                  <span className="text-slate-light font-medium">Explore</span>
                  <span className="text-slate text-sm">Ask Orchie</span>
                </div>
              )}
            </button>
            
            <button
              onClick={handleMyCareersClick}
              className={`w-full flex items-center transition-all duration-200 text-left group relative ${
                isCollapsed ? 'justify-center p-3 rounded-lg hover:bg-midnight-medium' : 'space-x-3 p-3 rounded-lg hover:bg-midnight-medium'
              } ${activeTab === 'my-careers' ? 'bg-midnight-medium' : ''}`}
              title={isCollapsed ? 'Compare & Focus' : ''}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeTab === 'my-careers' 
                  ? 'bg-orchard-blue/30' 
                  : 'bg-orchard-blue/20 group-hover:bg-orchard-blue/30'
              }`}>
                <BriefcaseIcon className={`h-5 w-5 ${
                  activeTab === 'my-careers' 
                    ? 'text-orchard-blue' 
                    : 'text-orchard-blue'
                }`} />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col flex-1">
                  <span className="text-slate-light font-medium">Compare & Focus</span>
                  <span className="text-slate text-sm">My Careers</span>
                </div>
              )}
            </button>
            
            <button
              onClick={handleCareerActionPlanClick}
              className={`w-full flex items-center transition-all duration-200 text-left group relative ${
                isCollapsed ? 'justify-center p-3 rounded-lg hover:bg-midnight-medium' : 'space-x-3 p-3 rounded-lg hover:bg-midnight-medium'
              } ${activeTab === 'career-action-plan' ? 'bg-midnight-medium' : ''}`}
              title={isCollapsed ? 'Plan' : ''}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                activeTab === 'career-action-plan' 
                  ? 'bg-orchard-blue/30' 
                  : 'bg-orchard-blue/20 group-hover:bg-orchard-blue/30'
              }`}>
                <ClipboardDocumentCheckIcon className={`h-5 w-5 ${
                  activeTab === 'career-action-plan' 
                    ? 'text-orchard-blue' 
                    : 'text-orchard-blue'
                }`} />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col flex-1">
                  <span className="text-slate-light font-medium">Plan</span>
                  <span className="text-slate text-sm">Action Plan</span>
                </div>
              )}
            </button>
          </div>
        </nav>
      </div>

    </>
  )
}

export default Navigation
