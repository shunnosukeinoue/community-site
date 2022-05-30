import React from 'react'
import SidebarOption from './SidebarOption'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      Sidebar
      <br></br>
      <Link to={"/about"}>初めての方はこちらから</Link>
      <SidebarOption text="〜コミュニティ" />
      <SidebarOption text="〇〇コミュニティ" />
    </div>
  )
}

export default Sidebar