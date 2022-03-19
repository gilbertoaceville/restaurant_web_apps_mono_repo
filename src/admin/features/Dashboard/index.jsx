import React from 'react';
import {
  DashboardWrapper,
  DrawerDiv,
  Display,
} from './dashboard.styles'
import Drawer from '../../component/Drawer'
import SearchBar from '../../component/SearchBar';
import Header from '../../component/HeaderTwo/header.component';

const Index = ({ children }) => {
  return (
    <DashboardWrapper>
      <div className={"dashboard-body"}>
        <DrawerDiv>
          <Drawer />
        </DrawerDiv>
        <div className={'whitespace'} />
        <Display>
          <div className={"dashboard-header"}>
            {/* <Header /> */}
          </div>
          <div className={'dashboard-content'}>
            {children}
          </div>
        </Display>
      </div>
    </DashboardWrapper>
  );
}

export default Index;