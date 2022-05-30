import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Timeline from './timeline/Timeline'
import "./Home.css"

function Home() {
  return (
    <div className="home">
        {/* Sidebar */}
        <Sidebar />
        {/* Timeline */}
        <Timeline />
    </div>
  )
}

export default Home