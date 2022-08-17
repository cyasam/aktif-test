import React from 'react'
import Link from 'next/link';

function Header({navData}) {
  return (
    <ul>
        {navData.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path}>
              <a style={{"color": "#f00"}}>{nav.name}</a>
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default Header