import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Home() {

  return (
    <>
      <Header />
      <div className='home'>
        <Link to="/myalbums">
          <button>My Albums</button>
        </Link>
      </div>
    </>
  )
}

export default Home