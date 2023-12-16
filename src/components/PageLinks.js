import React from 'react';
import PageLink from './PageLink';
import { pageLinks } from '../data';

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
          {pageLinks.map((link) => (
              <PageLink key={link.id} link={link} itemClass={itemClass}/>
        ))}
    </ul>
  )
}

export default PageLinks