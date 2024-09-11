import SideBar from '@/components/shared/SideBar'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <main className='root'>
      {/* Sidebar */}
      <SideBar />
      {/* MobileNav */}
      <div className='root-container'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
