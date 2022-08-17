import fsPromises from 'fs/promises';
import Link from 'next/link';
import path from 'path';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), './data/nav.json');
  const jsonData = await fsPromises.readFile(filePath);
  const navData = JSON.parse(jsonData);

  return {
    props: { navData },
  };
}

export default function Home({ navData }) {
  return (
    <div>
      <ul>
        {navData.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path}>
              <a style={{"color": "#f00"}}>{nav.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
