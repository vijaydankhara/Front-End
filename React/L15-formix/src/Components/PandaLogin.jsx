import React, { useState, useEffect } from 'react';
import './PandaLogin.css'; // Ensure this CSS file contains the styles

const PandaLogin = () => {
  const [isUp, setIsUp] = useState(false);
  const [wrongEntry, setWrongEntry] = useState(false);
  const [eyePosition, setEyePosition] = useState({ width: '0px', height: '0px' });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const dw = document.documentElement.clientWidth / 15;
      const dh = document.documentElement.clientHeight / 15;
      const x = event.pageX / dw;
      const y = event.pageY / dh;
      setEyePosition({ width: `${x}px`, height: `${y}px` });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleFocus = () => setIsUp(true);
  const handleBlur = () => setIsUp(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setWrongEntry(true);
    setTimeout(() => {
      setWrongEntry(false);
    }, 3000);
  };

  return (
    <div className={`form-container ${wrongEntry ? 'wrong-entry' : ''}`}>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball" style={eyePosition}></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball" style={eyePosition}></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form className={isUp ? 'up' : ''} onSubmit={handleSubmit}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Panda Login</h1>
        <div className="form-group">
          <input required="required" className="form-control" />
          <label className="form-label">Username</label>
        </div>
        <div className="form-group">
          <input id="password" type="password" required="required" className="form-control" onFocus={handleFocus} onBlur={handleBlur} />
          <label className="form-label">Password</label>
          <p className="alert">Invalid Credentials..!!</p>
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default PandaLogin;
