import React from 'react'
import Info from './info';
import Profile from './Profile';

function Home() {
  return (
    <div className="center">
    <h1 className='heading'>Hello World!</h1>
    <Profile />
    <Info /> </div>
  )
}

export default Home