import React from 'react';
import TopNav from './TopNav.js';
import Footer from './Footer.js';
import {
  useQuery
} from '@apollo/client';
import { QUERY_DOGS } from '../utils/queries';
import PetList from './PetList'

export default function StateProvider() {
  const {loading, data, error} = useQuery(QUERY_DOGS);
  if (data) {console.log(data)};

  return (
    <>
    <TopNav />
     {/*  <AppRouter /> */}
     <PetList response={{loading, data, error}} />
    <Footer />
    </>
  )
}