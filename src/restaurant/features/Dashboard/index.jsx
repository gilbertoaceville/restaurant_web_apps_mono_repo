import React from 'react';
import {
  DashboardWrapper,
  DrawerDiv,
  Display,
} from './dashboard.styles'
import Header from './Header'
import Drawer from './Drawer'
// import MiniHeader from '../../component/MiniHeader'


const Dashboard = ({ children }) => {
  return (
    <DashboardWrapper>
      <div className="dashboard-header">
        <Header />
      </div>
      <div className="dashboard-body">
        <DrawerDiv>
          <Drawer />
        </DrawerDiv>
        <div className='whitespace' />
        <Display>
          {children}
        </Display>
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;