import React, { useRef } from 'react';
import './card.css'

function Card(props) {

  const video = useRef();

  const play = () => {
    video.current.play();
  };

  const stop = () => {
    video.current.pause();
  };


  return (
    <div className='whole'>
      <div onMouseEnter={play} onMouseLeave={stop} className="wrapper">
        <video loop ref={video} className='video' muted src={props.video.video}></video>
      </div>
      <div className="text">{props.video.title}</div>
    </div>
  )
}

export default Card