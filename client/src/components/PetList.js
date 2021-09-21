import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup
} from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import { saveDogIds, getSavedDogIds } from "../utils/localStorage";

import Auth from "../utils/auth";

const PetList = ({ response }) => {
  // create state for holding returned google api data
  const [allDogs, setallDogs] = useState([]);
  // create state to hold saved dogId values
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());

  const [saveDog, { error }] = useMutation(SAVE_DOG);

  // set up useEffect hook to save `savedDogIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });

  // create function to handle saving a dog to our database
  const handleSaveDog = async (id) => {
    // find the dog in `allDogs` state by the matching id
    const dogToSave = allDogs.find((dog) => dog.id === id);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveDog({
        variables: { dogData: { ...dogToSave } },
      });
      console.log(savedDogIds);
      setSavedDogIds([...savedDogIds, dogToSave.id]);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(response?.data);
  return (
    <>
        <Container>
          <Row>
          <h1>Adopt or Sponsor one of these beauties!</h1>

    
        <h3>
          {allDogs.length
            ? `We currently have ${allDogs.length} up for Adoption:`
            : `Find out more by clicking on the each dog's picture.`}
        </h3>
        </Row>
          <Row> <Col>
        <CardGroup>
          {
            response.loading
            ? <div>unloading</div>
            : response.data.dogs.map((dog) => {
            return (
              <Card key={dog.id} >
              <Card.Header >
              <h3 className="d-flex d-flex justify-content-between">{dog.name}
               <LikeBtn />
              </h3>
           
              </Card.Header>
        <div className="content">
          
                        <div className="content-overlay"></div>
                {dog.image ? (
                  <Card.Img
                    src={dog.image}
                    alt={`The picture for ${dog.name}`}
                    variant="top"
                    className="img-fluid"
                    
                  />
                ) : null}
                 <div className="content-details fadeIn-bottom">
                          <p>
                            {dog.description}
                          </p>
                          </div>
                </div>
                <Card.Body>
                  <Card.Title>Breed: {dog.breed}</Card.Title>
                 

                </Card.Body>
                <Card.Footer>
                <div className="button">
                                 {/*  {Auth.loggedIn() && (
                    <Button
                      disabled={savedDogIds?.some(
                        (savedId) => savedId === dog.id
                      )}
                      className="btn btn-info"
                      onClick={() => handleSaveDog(dog.id)}
                    >
                      {savedDogIds?.some((savedId) => savedId === dog.id)
                        ? `${dog.name} is already saved!`
                        : "Save This dog!"}
                    </Button>
                  )} */}
                  <Link to="pet" className="btn btn-dog btn-sm">
                    <i class="fad fa-hands-heart fa-2x"></i>
                    Adopt Me
                  </Link>                  <Link to="pet" className="btn btn-success btn-sm">
                    <i class="fad fa-hand-holding-usd fa-2x"></i>
                    Sponsor Me
                  </Link>
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
        </Col>
        </Row>
      </Container>
    
    </>
  );
};

export default PetList;
