import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Cuisine from './components/Cuisine';
import MainMenu from './components/MainMenu';
import {HomeWrapper} from './App.styled'

export default function App() {
  
  return (
    <HomeWrapper>
    <NativeRouter>
      <Route exact path='/' component={MainMenu} />
      <Route path='/cuisine/:cuisine' component={Cuisine}/>
    </NativeRouter>
    </HomeWrapper>
  );
}
