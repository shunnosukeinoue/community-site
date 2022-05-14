import React from 'react'
import SidebarOption from './SidebarOption'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      Sidebar
      <SidebarOption text="〜コミュニティ" />
      <SidebarOption text="〇〇コミュニティ" />
    </div>
  )
}

export default Sidebar