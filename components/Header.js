import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getNavigationGraphQl } from '../api/getNavigation';

function Header({ navData }) {
  const router = useRouter();
  const { locale } = router;

  const handleLocaleChange = async (event) => {
    const value = event.target.value;
    const { result: navData } = await getNavigationGraphQl(value)

    const navItem = navData.find(item => item.path === router.pathname)

    if (navItem) {
      return router.push(router.pathname, navItem.path, {
        locale: value,
      });
    }

    router.push(value, value, { locale: value })
  };

  if (!navData) return null;

  if (navData.error) {
    return <p>{navData.error}</p>
  }

  return (
    <header
      style={{
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ul>
        {navData?.result?.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path} locale={locale}>
              <a style={{ color: '#f00' }}>{nav.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <select onChange={handleLocaleChange} value={locale}>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
