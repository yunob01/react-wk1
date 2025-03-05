import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <nav className="nav" id="nav">
          <div className="nav-container">
            <div className="nav-logo">
              <a href="index.html"><img src="img/logo.PNG" alt="LOGO"/></a>
            </div>
            <ul className="nav-list">
              <li className="nav-item-hide"><a href="index.html" className="nav-link">首頁</a></li>
              <li className="nav-item"><a href="show.html" className="nav-link">音樂節目</a></li>
              <li className="nav-item"><a href="vote.html" className="nav-link">投票教學</a></li>
              <li className="nav-item">
                <a href="index.html" className="nav-link"><img src="img/logo.PNG" alt="Center Logo"
                  className="nav-center-logo"/></a>
              </li>
              <li className="nav-item"><a href="award.html" className="nav-link">年末專區</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">關於我們</a></li>
            </ul>
            <span className="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>

        <section className="container">
          <img src="img/背景.png" alt="background"/>
            <div className="title">
              <h1>關於我們</h1>
            </div>
        </section>
        <div className="scroll">
          <p>SCROLL</p>
          <a href="#time"><img src="img/arrow.png"/></a>
        </div>
      </header>


      <div className="main-container" id="time">
        <div className="about">
          <div className="about_us">
            <div className="us">
              <img src="img/小彭.JPG"/>
            </div>
            <div className="introduction">
              <h2>彭巧</h2>
              <p>希望買到波捏豆演唱會門票的彭巧 <br/>最愛BOYNEXTDOOR</p>
            </div>
          </div>
          <div className="about_us">
            <div className="us">
              <img src="img/黑熊.jpg"/>
            </div>
            <div className="introduction">
              <h2>黑熊</h2>
              <p>一隻只想躺平的黑熊<br/>喜歡GFRIEND&ATEEZ</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="social">
          <a href="#"><img src="img/icon_instagram.png"/></a>
          <a href="#"><img src="img/icon_facebook.png"/></a>
          <a href="#"><img src="img/icon_youtube.png"/></a>
        </div>
        <p>Copyright © YUNOB ｜ BLACKBEAR</p>
      </footer>
    </div>
  )
}

export default App
