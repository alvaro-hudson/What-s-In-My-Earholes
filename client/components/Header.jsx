import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <h1>My Albums</h1>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/"><button>Friends</button></Link>
      </nav>
    </header>
  )
}

export default Header