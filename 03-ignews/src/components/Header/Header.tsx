import React from 'react'
import SignInButton from '../SignInButton/SignInButton'
import style from "./style.module.scss"
const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
          <img src="/imgs/logo.svg" alt="ig.news" />
          <nav>
              <a className={style.active} href="/">Home</a>
              <a href="/">Posts</a>
          </nav>
          <SignInButton />
      </div>
    </header>
  )
}

export default Header
