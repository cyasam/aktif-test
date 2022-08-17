import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header({navData}) {
  const router = useRouter();
  const {locale} = router

  const handleLocaleChange = async (event) => {
    const value = event.target.value;

    const {default:localeNavData} = await import(`../locales/${value}/navigation.json`);

    router.push(router.route, localeNavData[router.pathname].path, {
      locale: value,
    });
  };

  if(!navData) return null;

  return (
    <header style={{width: "300px",display: "flex", justifyContent: "space-between",alignItems:"center"}}>
      <ul>
        {Object.values(navData).map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path} locale={locale}>
              <a style={{"color": "#f00"}}>{nav.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <select onChange={handleLocaleChange} value={router.locale}>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
    </header>
  )
}

export default Header