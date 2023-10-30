import React from 'react';
import Page from '../Page/Page';
import poisk from '../../misc/PoiskIcon.png';
import personal from '../../misc/PersonalIcon.png';
import kontragents from '../../misc/KontragentsIcon.png';
import remonty from '../../misc/RemontyIcon.png';
import wareHouseIcon from '../../misc/WareHouseIcon.png';
import Subpage from '../Subpage/Subpage';
import './Pages.css';

const Pages = () => {
  const pages = [
    {
      logo: <img src={poisk} alt="" />,
      title: 'Поиск',
      subpages: [],
    },
    {
      logo: <img src={kontragents} alt="" />,
      title: 'Контрагенты',
      subpages: [],
    },
    {
      logo: <img src={personal} alt="" />,
      title: 'Персонал',
      subpages: [],
    },

    {
      logo: <img src={remonty} alt="" />,
      title: 'Ремонты',
      subpages: [],
    },
    {
      logo: <img src={wareHouseIcon} alt="" />,
      title: 'Warehouse',
      subpages: ['Entities', 'Dictionaries', 'Schema', 'Heap', 'Queries'],
    },
  ];
  const renderedPages = pages.map((page) => {
    let renderedSubpages;
    if (page.subpages.size !== 0) {
      renderedSubpages = page.subpages.map((subpage) => {
        return <Subpage key={subpage} title={subpage} />;
      });
    }
    return (
      <div className="pages-block" key={page.title}>
        <Page title={page.title} logo={page.logo} subpages={page.subpages} />
        <div className="pages-rendered-subpages">{renderedSubpages}</div>
      </div>
    );
  });

  return <div className="pages">{renderedPages}</div>;
};
export default Pages;
