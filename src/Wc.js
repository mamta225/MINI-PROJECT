import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

function Wc() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Wc
