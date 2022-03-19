/*
*This Is a MiniHeader for the Dashboard Pages, different
from the main dashboard Header.

It has 2 properties expected to be passed across
1. SearchBar: Indicates you want to display the search bar
2. AddDish: indicates you want to display the addDish button

*/

import React from 'react';
import {
  BodyHead,
  AddDishButton,
  SearchBarDiv,
  SearchBarContainer,
  MessageAll
} from './miniHeader.styles'
import { MdSearch } from 'react-icons/md';

const MiniHeader = ({ onClick, searchBar, addDish, searchText }) => {
  return (
    <BodyHead>
      <div className={'mainWrapper'}>
        {searchBar || searchText ? (
          <React.Fragment>
            <SearchBarContainer searchText={searchText}>
              <SearchBarDiv
                type={'text'}
                placeholder={'Search my dish...'}
              />
              <MdSearch />
            </SearchBarContainer >
            {
            searchBar?
            <AddDishButton
              type='button'
              value='+ -'
            />
            : searchText?
              <MessageAll>Message All</MessageAll>
             :null
             }
          </React.Fragment>
        )
          :
          ""}

        {
          addDish ?
            <AddDishButton
              type='button'
              value='+ Add Dish'
              onClick={onClick}
            />
            :
            ""}
      </div>
    </BodyHead>
  );
}

export default MiniHeader;

