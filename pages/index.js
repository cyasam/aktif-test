import fsPromises from 'fs/promises';
import path from 'path';
import Header from '../components/Header';

export async function getServerSideProps() {
  const filePath = path.join('./data/nav.json');
  const jsonData = await fsPromises.readFile(filePath);
  const navData = JSON.parse(jsonData);

  return {
    props: { navData },
  };
}

export default function Home({ navData }) {
  return (
    <div>
      <Header navData={navData} />
      <div>
        Home
      </div>
    </div>
  );
}
