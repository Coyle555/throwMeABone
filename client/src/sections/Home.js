import React from 'react';
import {
  useQuery
} from '@apollo/client';
import { QUERY_DOGS } from '../utils/queries';
import PetList from '../components/PetList.js';
import {
  Container,


} from 'react-bootstrap';

const Home = () => {
    const {loading, data, error} = useQuery(QUERY_DOGS);
  if (data) {console.log(data)};
  return (
    <>

<Container>
  <PetList response={{loading, data, error}} />
</Container>
    </>
  );
}

export default Home;
