import React from 'react'
import Contact from './ContactPage/Contact';
import { Box } from '@chakra-ui/react';
import Settlement from '../components/CollectionComponent/Settlement'
import Legal from '../components/CollectionComponent/Legal'
import Sarfaesi from '../components/CollectionComponent/Sarfaesi'
import Applicant from '../components/CollectionComponent/Applicant'
import Asset from '../components/CollectionComponent/Asset'
import Notepad from '../components/CollectionComponent/Notepad'
import Document from '../components/CollectionComponent/Document'




const Content = ({isActive}) => {
    const renderComponent = (active)=> {
        switch (active) {
            case "Contact":
              return <Contact />;
            case "Settlement":
              return <Settlement/>;
            case "Legal":
              return <Legal />;
            case "Sarfaesi":
              return <Sarfaesi />;
            case "Applicant":
              return <Applicant />;
            case "Asset":
              return <Asset />;
            case "Notepad":
              return <Notepad />;
            case "Document":
              return <Document />;
            default:
              return null;
          }
    }
  return <Box>{renderComponent(isActive)}</Box>;
}

export default Content