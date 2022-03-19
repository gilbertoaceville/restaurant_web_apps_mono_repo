/**
 * Notifications Component
 * see Text page for usage
 * 
 */

import React from 'react'
import { 
  NotificationsWrapper,
  Notifications,
  Messages,
  Icon,
  Text,
} from './notifications.styles'
import {IoIosNotifications} from "react-icons/io";

const Index = ({onClick, notificationMessages}) => {
 

  return (
    <NotificationsWrapper>
      <Notifications onClick={onClick}>
          <Icon>
            <Messages>{notificationMessages || 3}</Messages>
            <IoIosNotifications />
          </Icon>
          <Text>{"Notification"}</Text>
        </Notifications>
    </NotificationsWrapper>
  )
}

export default Index
