import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-native';
import {Wrapper, CuisineWrapper, PageLayout, StyledLink} from './Cuisine.styled'
import {Text} from 'react-native'

export const Cuisine = (props) => {
    const key = '4874d98c022c482a8b1f6c02ddb4a614';
    const cuisine = props.match.params.cuisine
    const [loading, setLoading] = useState();
    const [data, setData] = useState()
  useEffect(()=>{
      const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${key}`
      console.log(url)
    },[])
    return(
        <CuisineWrapper
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          }]}>
          <PageLayout>
            <StyledLink to='/'><Text>Back</Text></StyledLink>
            </PageLayout>
        </CuisineWrapper>
    )
}

export default Cuisine