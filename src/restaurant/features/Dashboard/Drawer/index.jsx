import { useState } from "react";
import { DrawerWrapper, List, ListIcon, ListText } from "./drawer.styles";
import { MdDashboard } from "react-icons/md";
import { BsTruck as DeliveryVan, BsBagCheck as Bag } from "react-icons/bs";
import { BiDish as Dishes } from "react-icons/bi";
import { IoIosPeople as People, } from "react-icons/io";
import { GiExitDoor as Exit } from "react-icons/gi";
import Link from "next/link";


const Drawer = () => {
const [active, setActive] = useState('Dashboard');
const isActive = (nowActive,) =>  {
  setActive(nowActive);
}


  return (
    <DrawerWrapper>
      <Link href={"/restaurant/dashboard/Dashboard"}>
        <List 
        onClick={()=>isActive('Dashboard')}
        style={active ===  'Dashboard' ? 
            {
             color: '#F38B1C',
             background:  '#fff' ,
            }:null
        }
             >
          <ListIcon>
            <MdDashboard />
          </ListIcon>
          <ListText>{"Dashboard"}</ListText>
        </List>
      </Link>
      <Link href={"/restaurant/dashboard/MyDishes"}>
        <List
        onClick={()=>isActive('MyDishes')}
        style={active ===  'MyDishes' ? 
            {
             color: '#F38B1C',
             background:  '#fff' ,
            }:null
        }
        >
          <ListIcon>
            <Dishes />
          </ListIcon>
          <ListText>{"My Dishes"}</ListText>
        </List>
      </Link>
      <Link href={"/restaurant/dashboard/OrderRequest"}>
        <List>
          <ListIcon>
            <Bag />
          </ListIcon>
          <ListText>{"Order Request"}</ListText>
        </List>
      </Link>
      <Link href={"/restaurant/dashboard/Delivery"}>
        <List>
          <ListIcon>
            <DeliveryVan />
          </ListIcon>
          <ListText>{"Delivery"}</ListText>
        </List>
      </Link>
      <Link href={"/restaurant/dashboard/Customers"}>
        <List>
          <ListIcon>
            <People />
          </ListIcon>
          <ListText>{"Customer"}</ListText>
        </List>
      </Link>
      <div className="sign-out">
        <Link href={"/"}>
          <List style={{ width: '100%' }}>
            <ListIcon>
              <Exit />
            </ListIcon>
            <ListText>{"Sign Out"}</ListText>
          </List>
        </Link>
      </div>
    </DrawerWrapper>
  );
};

export default Drawer;
