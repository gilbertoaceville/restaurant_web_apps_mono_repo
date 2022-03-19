/**
 * This is MiniheaderOutline with two major props
 * Navigation and Settings
 * pass anyone you'd like to make use of to the component whenever you call it.
 * Also pass the title for the navigation as a prop
 */
import React, { Component } from 'react'
import { useState, useEffect } from "react";
import {
    DashboardMiniHead,
    OrderRequestHeader,
    Navigation,
    Settings
} from "./miniheaderoutline.styles"
import { BiArrowBack, BiTrash } from 'react-icons/bi';
import { MdEdit } from 'react-icons/md';
import NavLink from "next/link";
import { useRouter } from 'next/router';



const MiniHeaderOutline = ({
    orderRequest,
    onClick,
    navigation,
    settings,
    title = 'category' }) => {
    // const [state, setState] = useState({
    //     // activeTab: ['New Orders', 'On Delivery', 'Delivered', 'Canceled'],
    //     activeTab: '',
    //     navList: [...orderRequest]
    // });
    const [activeTab, setactiveTab] = useState("");

    const handleActive = (key) => {
        setactiveTab(key);
    };
    const router = useRouter();

    useEffect(() => {
        // Prefetch the  page as the user will go there on click
        router.prefetch('/restaurant/dashboard/OrderRequest/NewOrders');
        router.prefetch('/restaurant/dashboard/OrderRequest/OnDelivery');
        router.prefetch('/restaurant/dashboard/OrderRequest/Delivered');
        router.prefetch('/restaurant/dashboard/OrderRequest/Canceled');
    }, []);

    return (
        <DashboardMiniHead>
            {navigation ?
                <Navigation onClick={onClick}>
                    <BiArrowBack />
                    <span>{title}</span>
                </Navigation>
                :
                null}
            {settings ?
                <Settings>
                    <MdEdit />
                    <BiTrash />
                </Settings>
                :
                orderRequest ?
                    orderRequest.map(({ active, tab, href }, idx) => {
                        return (
                            <OrderRequestHeader key={'navigation' + idx}>
                                <li
                                    onClick={() => {router.push(href),(active ? handleActive(`${tab}`) : "")}}
                                    className={`${
                                        activeTab && activeTab === tab
                                          ? "li active"
                                          : "li"
                                        }`}
                                >

                                    {tab}
                                </li>
                            </OrderRequestHeader>
                        )
                    })

                    : null}
        </DashboardMiniHead>
    )
}
export default MiniHeaderOutline


//  class MiniHeaderOutline extends Component {

//     constructor(props) {
//               super(props);
//               this.state = {
//                 activeClass: 'New Orders'
//               };

//               this.isActive = this.isActive.bind(this);
//             }


//             isActive(newClass,event) {
//                 event.preventDefault()
//                       this.setState(function() {
//                         return {
//                           activeClass: newClass
//                         }
//                       });
//                     }
//     render() {
//         const NavList = [
//             {
//               tab: 'New Orders',
//               href: '/restaurant/dashboard/OrderRequest/NewOrders'
//             },
//             {
//               tab: 'On Delivery',
//               href: '/restaurant/dashboard/OrderRequest/OnDelivery'
//             },
//             {
//               tab: 'Delivered',
//               href: '/restaurant/dashboard/OrderRequest/Delivered'
//             },
//             {
//               tab: 'Canceled',
//               href: '/restaurant/dashboard/OrderRequest/Canceled'
//             },

//           ]

//         return (
//             <DashboardMiniHead>
//             {this.props.navigation ?
//                 <Navigation onClick={this.props.onClick}>
//                     <BiArrowBack />
//                     <span>{this.props.title}</span>
//                 </Navigation>
//                 :
//                 null}
//             {this.props.settings ?
//                 <Settings>
//                     <MdEdit />
//                     <BiTrash />
//                 </Settings>
//                 :
//                 this.props.orderRequest ?
//                 NavList.map(({ tab, href }, idx) =>{
//                         // console.log(tab, href);
//                         return (
//                             <OrderRequestHeader key={'navigation' + idx}>
//                                 <Link  href={href}>
//                                     <span 
//                                     style={tab === this.state.activeClass ?
//                                         {
//                                             color: '#F38B1C',
//                                             borderBottom: '1px solid #F38B1C' ,
//                                         }:null
//                                     }
//                                     onClick={this.isActive.bind(null, tab)}
//                                     >
//                                         {tab}
//                                     </span>
//                                 </Link>
//                             </OrderRequestHeader>
//                         )
//                     })

//                     : null}
//         </DashboardMiniHead>
//         )
//     }
// }

// export default MiniHeaderOutline

