import React from "react"
import './Menu.css'
import Button from "../Button";

const Menu = ({ open, links, onToogleOpen }) => {
  return <nav className="menu">
      <Button
        label="Hamburger"
        onClick={onToogleOpen}
        style={{
          width: '150px'
        }}
      />
      {
        open && (
          <ul className="menu__links" style={{
            display: open ? 'block' : 'none'
          }}>
            {links.map(link => (
              <li key={link.label} className="menu__links__link">
                <a href={link.href} alt={link.label}>{link.label}</a>
              </li>
            ))}
          </ul>
        )
      }
  </nav>
}

export default Menu