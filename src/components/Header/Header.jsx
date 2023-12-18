import React, { useEffect, useState } from 'react';
import "./Header.css";
import Logo from "../../assets/logos/villa.png";
const Header = () => {
  const date = new Date();
  const a = date.toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(a);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000)

  return (
    <div className='header'>
      <div className='img-blk'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='date-display'>
        <span className='date'>
          <strong>Date:</strong>
          &nbsp;{date.toLocaleDateString()}&nbsp;{currentTime}
        </span>
      </div>
    </div>
  )
}
export default Header;