import React, { useState } from 'react'
import { PlusIcon, ClockIcon, PaperClipIcon, ArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline'
import OrchieAgentSuggestion from '../assets/orchie-agent-suggestion.svg'
import { careers } from '../data/dummyData'

interface ChatHistory {
  id: string
  query: string
  results: {
    careers: any[]
    topics: any[]
  }
  timestamp: Date
  aiResponse?: string
}

interface DummyChat {
  id: string
  title: string
  preview: string
  timestamp: string
}

interface ChatSidebarProps {
  chatWidth: number
  isResizing: boolean
  onResizeStart: (e: React.MouseEvent) => void
  chatHistory: ChatHistory[]
  showChatHistoryMenu: boolean
  onToggleChatHistoryMenu: () => void
  searchQuery: string
  onSearchQueryChange: (query: string) => void
  onSearch: () => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onCareerClick: (career: any) => void
  onTopicClick: (topic: any) => void
  onViewCareers: () => void
  onViewSpecificCareers: (careerIds: string[]) => void
  dummyChatHistory: DummyChat[]
  formatTimestamp: (timestamp: string) => string
  isNavCollapsed: boolean
  isNavRailMode: boolean
  onClose?: () => void
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chatWidth,
  isResizing,
  onResizeStart,
  chatHistory,
  showChatHistoryMenu,
  onToggleChatHistoryMenu,
  searchQuery,
  onSearchQueryChange,
  onSearch,
  onKeyPress,
  onCareerClick,
  onTopicClick,
  onViewCareers,
  onViewSpecificCareers,
  dummyChatHistory,
  formatTimestamp,
  isNavCollapsed,
  isNavRailMode,
  onClose
}) => {
  const [selectedVideoCareer, setSelectedVideoCareer] = useState<any>(null)
  const [showVideoModal, setShowVideoModal] = useState(false)
  
  // Video thumbnail images
  const videoThumbnails = [
    '/src/assets/short-screenshot.png',
    '/src/assets/short-screenshot-1.png',
    '/src/assets/short-screenshot-2.png',
    '/src/assets/short-screenshot-3.png'
  ]
  
  return (
    <div 
      className="bg-midnight-dark flex flex-col fixed top-16 h-[calc(100vh-4rem)] z-30"
      style={{ 
        left: isNavRailMode ? '0' : (isNavCollapsed ? '4rem' : '20rem'),
        width: isNavRailMode ? '100%' : `${chatWidth}%`,
        minWidth: isNavRailMode ? '0' : '300px',
        maxWidth: isNavRailMode ? '100%' : 'none'
      }}
    >
      {/* Resize Handle - Hidden on mobile */}
      {!isNavRailMode && (
        <div
          className="absolute right-0 top-0 bottom-0 w-1 bg-midnight-light hover:bg-orchard-blue cursor-col-resize z-10"
          onMouseDown={onResizeStart}
        />
      )}
      
      {/* Chat Header */}
      <div className="p-4 border-b border-midnight-light">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-light">Chat History</h2>
          <div className="flex items-center gap-3">
            {/* Close button for mobile */}
            {isNavRailMode && onClose && (
              <button 
                className="p-2 hover:bg-midnight-light rounded-lg transition-colors"
                onClick={onClose}
                aria-label="Close chat"
              >
                <XMarkIcon className="h-5 w-5 text-slate" />
              </button>
            )}
            <button 
              className="p-2 hover:bg-midnight-light rounded-lg transition-colors relative group"
              title="New Chat"
            >
              <PlusIcon className="h-5 w-5 text-slate" />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-midnight-dark text-slate-light text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                New Chat
              </div>
            </button>
            <button 
              className="p-2 hover:bg-midnight-light rounded-lg transition-colors relative group"
              title="Chat History"
              onClick={onToggleChatHistoryMenu}
            >
              <ClockIcon className="h-5 w-5 text-slate" />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-midnight-dark text-slate-light text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                Chat History
              </div>
              
              {/* Chat History Menu */}
              {showChatHistoryMenu && (
                <div 
                  className="absolute top-full right-0 mt-2 w-80 bg-midnight-dark border border-midnight-light rounded-lg shadow-lg z-20"
                  data-chat-history-menu
                >
                  <div className="p-3 border-b border-midnight-light">
                    <h3 className="text-sm font-semibold text-slate-light">Recent Chats</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {dummyChatHistory.map((chat) => (
                      <div key={chat.id} className="p-3 hover:bg-midnight-light cursor-pointer border-b border-midnight-light last:border-b-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-sm font-medium text-slate-light truncate flex-1 mr-2">
                            {chat.title}
                          </h4>
                          <span className="text-xs text-slate flex-shrink-0">
                            {formatTimestamp(chat.timestamp)}
                          </span>
                        </div>
                        <p className="text-xs text-slate line-clamp-2">
                          {chat.preview}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-midnight-light">
                    <button className="w-full px-4 py-2 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-sm font-medium text-center">
                      View all chats
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scrollable Chat Content */}
      <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
        <div className="space-y-4">
          {chatHistory.length === 0 ? (
            <div className="text-center text-slate py-8">
              <p className="text-sm">Let's explore careers!</p>
            </div>
          ) : (
            chatHistory.map((entry) => (
              <div key={entry.id} className="space-y-3">
                {/* User Query */}
                <div className="flex justify-end" data-testid="user-message-container">
                  <div className="bg-midnight-medium p-3 rounded-2xl rounded-br-md max-w-xs user-message border border-midnight-light">
                    <p className="text-slate-light text-sm text-left">{entry.query}</p>
                  </div>
                </div>
                
                {/* AI Response with Results */}
                <div className="flex justify-start" data-testid="ai-response-container">
                  <div className="bg-midnight-dark p-3 rounded-2xl rounded-bl-md max-w-full ai-response">
                    {entry.aiResponse ? (
                      <div className="space-y-3" data-testid="ai-response-content">
                        <div className="text-slate-light text-sm whitespace-pre-line leading-relaxed text-left ai-response-text">
                          {entry.aiResponse}
                        </div>
                        <button 
                          onClick={onViewCareers}
                          className="mt-3 px-6 py-3 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-base font-medium view-careers-button"
                          data-testid="view-careers-button"
                        >
                          Explore these Careers
                        </button>
                      </div>
                    ) : (
                      <div data-testid="search-results-content">
                        <p className="text-slate text-xs mb-3 text-left search-results-intro">
                          Here are some careers and topics that match your search:
                        </p>
                    
                    {/* Career Results */}
                    {entry.results.careers.length > 0 && (
                      <div className="mb-3" data-testid="career-results-section">
                        <h4 className="text-slate-light text-xs font-medium mb-2 text-left">Careers Found:</h4>
                        <div className="space-y-2">
                          {entry.results.careers.slice(0, 2).map((career, index) => {
                            const randomThumbnail = videoThumbnails[index % videoThumbnails.length]
                            return (
                              <div 
                                key={career.id}
                                className="bg-midnight-dark p-2 rounded-lg border border-midnight-light hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200 group cursor-pointer"
                                onClick={() => onCareerClick(career)}
                              >
                                <div className="flex items-center gap-2">
                                  <div className="flex-shrink-0">
                                    <div 
                                      className="relative w-12 h-8 bg-midnight-light rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        setSelectedVideoCareer(career)
                                        setShowVideoModal(true)
                                      }}
                                    >
                                      <img 
                                        src={randomThumbnail} 
                                        alt="Video Short" 
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-orchard-blue rounded-full flex items-center justify-center">
                                          <svg className="w-2.5 h-2.5 text-cauliflower ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-slate-light text-sm font-medium group-hover:text-orchard-blue transition-colors truncate">{career.title}</p>
                                    <p className="text-slate text-xs mt-1 line-clamp-1">{career.description}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        
                        {/* View All Button for Side Chat */}
                        {entry.results.careers.length > 2 && (
                          <div className="mt-2 text-center">
                            <button
                              onClick={() => {
                                onViewSpecificCareers(entry.results.careers.map(career => career.id))
                              }}
                              className="px-4 py-2 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-xs font-medium"
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
                        <h4 className="text-slate-light text-xs font-medium mb-2 text-left">Topics Found:</h4>
                        <div className="space-y-2">
                          {entry.results.topics.map((topic) => (
                            <div 
                              key={topic.id}
                              className="bg-midnight-dark p-3 rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue hover:bg-midnight-light transition-all duration-200 group"
                              onClick={() => onTopicClick(topic)}
                            >
                              <p className="text-slate-light text-sm font-medium group-hover:text-orchard-blue transition-colors">{topic.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* No Results Message */}
                    {entry.results.careers.length === 0 && entry.results.topics.length === 0 && (
                      <p className="text-slate text-xs text-left" data-testid="no-results-message">Sorry, I don't have a match for that right now. Try a different search term or explore our suggested prompts!</p>
                    )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Sticky Search Input */}
      <div className="p-4 border-t border-midnight-light bg-midnight-dark">
        <div className="relative">
          <div className="overflow-hidden rounded-full border border-midnight-light shadow-sm focus-within:border-orchard-blue focus-within:ring-1 focus-within:ring-orchard-blue">
            <div className="flex items-center px-4 py-2">
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
                onChange={(e) => onSearchQueryChange(e.target.value)}
                onKeyPress={onKeyPress}
                className="block w-full border-0 py-1.5 px-2 text-slate-light placeholder-slate bg-transparent focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                onClick={onSearch}
                className="inline-flex items-center justify-center rounded-full p-1 text-cauliflower bg-orchard-blue hover:bg-orchard-blue/90 focus:outline-none transition-colors"
              >
                <ArrowUpIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideoModal && selectedVideoCareer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-midnight-dark rounded-lg border border-midnight-light w-full max-w-sm mx-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-midnight-light">
              <h3 className="text-slate-light font-medium text-sm">{selectedVideoCareer.title}</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate hover:text-slate-light transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            
            {/* Video Placeholder */}
            <div className="p-4">
              <div className="relative w-full h-48 bg-midnight-light rounded-lg overflow-hidden mb-4">
                <img 
                  src={videoThumbnails[0]} 
                  alt="Video Short" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 bg-orchard-blue rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-cauliflower ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="text-slate text-xs mb-4">{selectedVideoCareer.description}</p>
              
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowVideoModal(false)
                    onCareerClick(selectedVideoCareer)
                  }}
                  className="flex-1 px-4 py-2 bg-orchard-blue text-cauliflower rounded-lg hover:bg-orchard-blue/90 transition-colors text-sm font-medium"
                >
                  View Full Details
                </button>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="px-4 py-2 bg-midnight-light text-slate rounded-lg hover:bg-midnight-light/80 transition-colors text-sm font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatSidebar
