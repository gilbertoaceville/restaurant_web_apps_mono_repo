import React from "react";
import { useState,useEffect } from "react";
import { 
  DrawerWrapper, 
  LogoWrapper, 
  DrawerLogo, 
  ListIcon, 
  ListText, 
  List, 
} from "./drawer.styles";
import { MdDashboard, MdFeedback } from "react-icons/md";
import { BsFillBagCheckFill as Bag } from "react-icons/bs";
import { IoIosPeople as People, } from "react-icons/io";
import { GiExitDoor as Exit, GiCookingPot } from "react-icons/gi";
import Link from "next/link";
import Logo from '../../../lib/assets/logo/logo.png'
import { IoMegaphoneSharp } from 'react-icons/io5'
import { FlexibleDiv } from "../../../lib/components/Box/styles";
import { useRouter } from "next/router";
import {FaPeopleCarry as PeopleCarry} from 'react-icons/fa'

const ListData = [
  {
    name: 'Dashboard',
    icon: <MdDashboard />,
    href: "/admin/dashboard/dashboard",
  },
  {
    name: 'Restaurant',
    icon: <GiCookingPot />,
    href: '/admin/dashboard/restaurant',
  },
  {
    name: 'Customer',
    icon: <People />,
    href: '/admin/dashboard/customers',
  },
  {
    name: 'Dispatcher',
    icon: <PeopleCarry />,
    href: '/admin/dashboard/dispatcher',
  },
  {
    name: 'Deliveries',
    icon: <People />,
    href: '/admin/dashboard/deliveries',
  },
  {
    name: 'Order',
    icon: <Bag />,
    href: '/admin/dashboard/order',
  },
  {
    name: 'Promotion',
    icon: <IoMegaphoneSharp />,
    href: '/admin/dashboard/promotion',
  },
  {
    name: 'Complaints',
    icon: <MdFeedback />,
    href: '/admin/dashboard/complaints',
  },
  {
    name: 'Sign Out',
    icon: <Exit />,
    href: '/',
  },

]
const Drawer = () => {
  
  const [active, setActive] = useState('Dashboard');
  
  const isActive = (nowActive) => {
    setActive(nowActive);
  }

  const router = useRouter();

  useEffect(() => 
  // prefetch the pages for easy routing. This mostly good for pages with few data. 
  // 
  {
    router.prefetch("/admin/dashboard/dashboard");
    router.prefetch("/admin/dashboard/restaurant");
    router.prefetch("/admin/dashboard/customer");
    router.prefetch("/admin/dashboard/order");
    router.prefetch("/admin/dashboard/deliveries");
    router.prefetch("/admin/dashboard/promotion");
    router.prefetch("/admin/dashboard/complaints");
  }
  
  );

  return (
    <DrawerWrapper>
      <LogoWrapper>
        <FlexibleDiv
          height={'100%'}
          width={'60%'}
          objectFit={'cover'}
        >
          <DrawerLogo src={Logo.src} alt="Logo" />
        </FlexibleDiv>
      </LogoWrapper>
      {
        ListData.map(({ name, icon, href }, idx) => (
          <React.Fragment>
            <div onClick={()=> router.push(href)} key={idx}>
              {name !== 'Sign Out' ?
                <>
                  <List
                    onClick={() => isActive('Dashboard')}
                    style={active === name ?
                      {
                        color: '#F38B1C',
                        background: '#fff',
                      } : null
                    }
                  >
                    <ListIcon>
                      {icon}
                    </ListIcon>
                    <ListText>{name}</ListText>
                  </List>
                </> : ''
              }
            </div>
            {
              name === 'Sign Out' ?
                <div className="sign-out">
                  <Link href={"/"}>
                    <List style={{ width: '100%' }}>
                      <ListIcon>
                        {icon}
                      </ListIcon>
                      <ListText>{name}</ListText>
                    </List>
                  </Link>
                </div> : ''
            }
          </React.Fragment>
        ))
      }
    </DrawerWrapper>
  );
};

export default Drawer;
