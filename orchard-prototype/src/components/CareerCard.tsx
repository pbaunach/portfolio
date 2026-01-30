import React from 'react';
import { getCareerTopics } from '../utils/dataService';

interface CareerCardProps {
  career: {
    id: string;
    title: string;
    description: string;
    topics: string[];
    salaryRange: {
      min: number;
      max: number;
      currency: string;
    };
    workEnvironment: string;
  };
  index: number;
  onCareerClick: (career: any) => void;
  onTopicClick: (topic: any) => void;
  onToggleInterested: (career: any) => void;
  isInterested: (career: any) => boolean;
  showVideoThumbnail?: boolean;
  showTopics?: boolean;
  showSalary?: boolean;
  showWorkEnvironment?: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({
  career,
  index,
  onCareerClick,
  onTopicClick,
  onToggleInterested,
  isInterested,
  showVideoThumbnail = true,
  showTopics = true,
  showSalary = false,
  showWorkEnvironment = false
}) => {
  const screenshotImages = [
    '/src/assets/short-screenshot.png',
    '/src/assets/short-screenshot-1.png',
    '/src/assets/short-screenshot-2.png',
    '/src/assets/short-screenshot-3.png'
  ];
  const randomScreenshot = screenshotImages[index % screenshotImages.length];
  

  return (
    <div 
      key={career.id}
      className="bg-midnight-dark rounded-lg border border-midnight-light cursor-pointer hover:border-orchard-blue transition-all duration-200 group overflow-hidden"
      onClick={() => onCareerClick(career)}
    >
      <div className="flex">
        {/* Video Thumbnail - Left Side */}
        {showVideoThumbnail && (
          <div className="relative w-24 bg-midnight-light flex-shrink-0 overflow-hidden self-stretch">
            <img 
              src={randomScreenshot} 
              alt="Video Short" 
              className="w-full h-full object-cover object-center"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="w-6 h-6 bg-orchard-blue rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-cauliflower ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* Career Info - Right Side */}
        <div className="flex-1 p-4 text-left">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-slate-light font-medium group-hover:text-orchard-blue transition-colors text-base">
              {career.title}
            </h4>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleInterested(career)
              }}
              className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                isInterested(career)
                  ? 'bg-orchard-green text-cauliflower'
                  : 'bg-midnight-light text-slate hover:bg-orchard-blue hover:text-cauliflower'
              }`}
            >
              {isInterested(career) ? 'Saved ✓' : 'Save'}
            </button>
          </div>
          
          <p className="text-slate text-sm mb-3 line-clamp-3">{career.description}</p>
          
          {/* Career Topics - Clickable */}
          {showTopics && (
            <div className="flex flex-wrap gap-1 mb-3">
              {career.topics.map((topicId) => {
                const topic = getCareerTopics().find(t => t.id === topicId)
                return topic ? (
                  <span 
                    key={topicId} 
                    className="px-1.5 py-0.5 bg-orchard-blue/20 text-orchard-blue text-xs rounded hover:bg-orchard-blue/30 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      onTopicClick(topic)
                    }}
                  >
                    {topic.name}
                  </span>
                ) : null
              })}
            </div>
          )}
          
          {/* Salary and Work Environment - Optional */}
          {(showSalary || showWorkEnvironment) && (
            <div className="flex items-center justify-between text-xs text-slate">
              {showSalary && (
                <span>${career.salaryRange.min.toLocaleString()} - ${career.salaryRange.max.toLocaleString()}</span>
              )}
              {showWorkEnvironment && (
                <span className="capitalize">{career.workEnvironment}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
