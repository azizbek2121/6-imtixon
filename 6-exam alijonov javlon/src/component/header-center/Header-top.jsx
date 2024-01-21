import React from 'react'
import './Header-top.scss'
import img from '../header-center/img/image 2.png'
import { Link } from 'react-router-dom'

const HeaderTop = () => {
  
  return (
    <div className='header'>
      <div className="header-top">
        <div className="text">
          <h3>Товары</h3>
          <p>Главная / Товары</p>
        </div>
        <button>
          <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
          Выйти
          </Link>
        </button>
      </div>
      <div className="header-center">
        <div className="center-card">
          <h1>Вы пока не создали ни одного товара</h1>
          <img src={img}   width={310} height={240} alt="" />
          <Link to="/add">Создать первый товар</Link>
        </div>
        <div className="date">
          <h4>© Anymarket 2022</h4>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop