import React from 'react'

export default function Navigation({ activeId, onNavClick }) {
  const navItems = ['work', 'about']

  return (
    <nav className="reveal-on-load fixed bottom-7 left-10 right-10 z-50 flex items-center justify-between">
      <span className="text-sm font-bold text-body tracking-[-0.01em]">
        Sudeshna Gangoli
      </span>
      <div className="flex gap-80 relative">
        {navItems.map((id) => (
          <a 
            key={id}
            href={`#${id}`}
            onClick={(e) => onNavClick(e, id)}
            className={`text-sm font-bold tracking-[-0.01em] no-underline transition-colors duration-500 relative ${
              activeId === id ? 'text-brand' : 'text-body hover:text-brand'
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  )
}
