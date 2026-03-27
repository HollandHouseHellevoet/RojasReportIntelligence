import React from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: ContainerSize
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
}

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
