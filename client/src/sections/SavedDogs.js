import React from 'react';
import {
  Container,
  CardColumns,
  Card,
  Button,
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_DOG } from '../utils/mutations';
import { removeDogId } from '../utils/localStorage';

import Auth from '../utils/auth';

const SavedDogs = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeDog, { error }] = useMutation(REMOVE_DOG);

  const userData = data?.me || {};

  // create function that accepts the dog's mongo _id value as param and deletes the dog from the database
  const handleDeleteDog = async (dogId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeDog({
        variables: { dogId },
      });

      // upon success, remove dog's id from localStorage
      removeDogId(dogId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
        <Container>
          <h1>Viewing {userData.username}'s dogs!</h1>
        </Container>
      <Container>
        <h2>
          {userData.savedDogs?.length
            ? `Viewing ${userData.savedDogs.length} saved ${
                userData.savedDogs.length === 1 ? 'dog' : 'dogs'
              }:`
            : 'You have no saved dogs!'}
        </h2>
        <CardColumns>
          {userData.savedDogs?.map((dog) => {
            return (
              <Card key={dog.dogId} border="dark">
                {dog.image ? (
                  <Card.Img
                    src={dog.image}
                    alt={`The cover for ${dog.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{dog.title}</Card.Title>
                  <p className="small">Authors: {dog.authors}</p>
                  <Card.Text>{dog.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteDog(dog.dogId)}
                  >
                    Delete this Dog!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedDogs;
