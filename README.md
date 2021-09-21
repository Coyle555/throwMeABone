# Throw Me A Bone

## Description
This application supports animal welfare organizations by providing them with a platform to communicate their needs to the animal lovers in the world. The , I want to see the description, location, and reviews of the specific happening. I want to be able to share the information about an event interested in attending. Due to the pandemic, I would also want to see any required or recommended safety protocalls relevant to the event as well.

This week, you’ll take starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. 

To complete the assignment, you’ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas. Use the [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) walkthrough for instructions.


## User Story

```md

There are two user types:
[1] The animal welfare operator
	As a shelter operator, I WANT an engaging and easy-to-implement platform to encourage animal lovers to support the shelter.

[2] The end user
	As a USER and animal lover, I WANT an easy way to lend my support whether or not I am ready to adopt.
	I WANT to search for dogs at my favorite shelter
	SO THAT I can either adopt, foster, or sponsor.
```

## Acceptance Criteria

```md
GWHEN I load the application
THEN I am presented with a list of current pets with the options
•	Login/Signup 
•	Card Components with pictures and short description of each pet.
•	Each pet has a clickable picture that will rotate to provide more detail about the pet – and a link to more details (the story)
•	Each pet has 3 button:
o	Adopt
o	Foster
o	Sponsor
o	Like 
o	Share

WHEN I click on the PET picture, it will rotate;
THEN I am presented with an more detail about the pet and the buttons are still visible;
WHEN I click the ADOPT button
THEN I am presented with 
•	more information about the pet on the left side of the screen 
•	requirements for adoption below
•	and a form to complete to apply for adoption.

WHEN I click the FOSTER button
THEN I am presented with 
•	more information about the pet on the left side of the screen 
•	requirements for fostering below
•	and a form to complete to apply for fostering.

WHEN I click the SPONSOR button
THEN I am presented with 
•	more information about the pet on the left side of the screen 
•	options for sponsorship level above
o	one-time (sponsors this dog)
o	recurring (sponsorships are for the shelter once the dog is adopted)
•	User is redirected to STRIPE.

