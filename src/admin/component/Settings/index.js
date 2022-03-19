/**
 * Settings Component
 * see Text page for usage
 * 
 * Use the settingListItem props to pass the dropdown items as an array of objects
 * each of object consist the Text and the icon.
 */

import React from 'react'
import { SettingsWrapper,Settings,Icon,Text} from './settings.styles'
import {IoIosSettings} from "react-icons/io";

import { DropDownMenu as SettingsDropDown } from "../../component/Dropdown";

const Index = ({SettingsListItem}) => {
 

  return (
    <SettingsWrapper>
      <Settings>
          <Icon>
            <IoIosSettings />
          </Icon>
          <Text>{"Settings"}
            <SettingsDropDown
              _style={{ left: '-40px' }}
              listItem={SettingsListItem}
            />
          </Text>
        </Settings>
    </SettingsWrapper>
  )
}

export default Index
