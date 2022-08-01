import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='home'>
      <div className='about-info'>
        <h1>RECENT ALBUMS</h1>
        <p>Always keep track of what albums you and you&apos;re friends have on the go.</p>
        <p>Avoid getting bogged down in Spotify playlists and go back to finding and sharing albums with the people you know.</p>
      </div>
      <div className='home-btns'>
        <button className='friends-btn'><span>See Friend&apos;s Albums</span></button>
        <Link to="/myalbums"><button className='my-btn'><span>My Albums</span></button></Link>
      </div>
    </div>
  )
}

export default Home