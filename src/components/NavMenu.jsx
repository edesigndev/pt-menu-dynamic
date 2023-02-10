import React, { useState } from 'react'
import { arrayHasElements } from '../utils'
import { TEXT } from '../constants'

export const NavMenu = ({ menu }) => {
  function renderSub (subitems) {
    if (arrayHasElements(subitems)) {
      return (
        <ul className='child'>
          {subitems.map((item) => {
            return (
              <li
                className='parent'
                key={item.name}
              >
                <a
                  href='#'
                  className='sub-menu-link'
                  style={{ textDecoration: 'none' }}
                ><span>{TEXT[item.name]}</span>
                </a>

                {!!item.child && renderSub(item.child)}
              </li>
            )
          })}
        </ul>
      )
    }
  }

  return (
    !!menu && (
      <nav className='container-nav'>
        {arrayHasElements(menu) &&
          <ul className='menu'>
            {menu.map((item) => {
              return (
                <li
                  className='parent'
                  key={item.name}
                >
                  <a href='#'>
                    <span>{TEXT[item.name]}</span>
                  </a>
                  {!!item.child && renderSub(item.child)}
                </li>
              )
            })}
          </ul>}
      </nav>
    )
  )
}
