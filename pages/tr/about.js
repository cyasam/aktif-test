import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path';
import Header from '../../components/Header'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(),'data/nav.json');
  console.log(path.join(process.cwd(),'data/nav.json'))
  const jsonData = await fsPromises.readFile(filePath);
  const navData = JSON.parse(jsonData);

  return {
    props: { navData },
  };
}

function about({navData}) {
  return (
    <div>
      <Header navData={navData} />
      <div>
        Hakkımda
      </div>
    </div>
  )
}

export default about