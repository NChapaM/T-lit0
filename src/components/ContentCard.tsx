import React from 'react'

interface ContentCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ContentCard: React.FC<ContentCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-4 cursor-pointer hover:bg-blue-100 transition-colors">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-lg font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default ContentCard