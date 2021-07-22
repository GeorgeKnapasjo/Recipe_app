import React, { useEffect } from 'react';
import { Wrapper, CuisineWrapper } from './MainMenu.styled';
import { Link } from 'react-router-native';
import { Text } from 'react-native';

export const MainMenu = () => {
  return (

    <Wrapper>
        <CuisineWrapper to='/cuisine/italian'>
          <Text>Italian</Text>
        </CuisineWrapper>
        <CuisineWrapper to='/cuisine/indian'>
          <Text>Indian</Text>
        </CuisineWrapper>
        <CuisineWrapper to='/cuisine/japanese'>
          <Text>Japenese</Text>
        </CuisineWrapper>
        <CuisineWrapper to='/cuisine/korean'>
          <Text>Korean</Text>
        </CuisineWrapper>
        <CuisineWrapper to='/cuisine/thai'>
          <Text>Thai</Text>
        </CuisineWrapper>
        <CuisineWrapper to='/cuisine/vietnamese'>
          <Text>Vietnamese</Text>
        </CuisineWrapper>
    </Wrapper>
  )
}

export default MainMenu