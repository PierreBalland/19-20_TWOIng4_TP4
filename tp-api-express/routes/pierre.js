const express = require('express');
const hostname = 'localhost';
const router = express.Router();
const port =3000;
const _ = require('lodash');

const axios = require('axios');

let users = [{
  user: "Pierre",
  id: "0"
}];
let movies = [{
  movie: "Pierre",
  id: "0"
}];

/*GET users listing.
router.get('/:id', (req, res) => {
  // Get List of user and return JSON
 res.status(200).json({ users });
  const { id } = req.params;
  const string = 'http://www.omdbapi.com/?t='+ id +'&apikey=b3d7a4f5';
  axios.get(string)
    .then(function (response) {
      // handle success
let use =response;
      console.log(use);


    // res.status(200).json({ use });
    })
    .catch(function (error) {
      // handle error

      console.log(error);

    })
    .finally(function () {
      // always executed
    });

});
*/
/* PUT new movie. */
router.put('/:moviename', (req, res) => {
  // Get the data from request from request

 const movie = req.params;
console.log("bonjour");
console.log(movie);
//console.log(req.body);
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  movies.push({ movie, id });
  // Return message
  res.json({message: `Just added ${id}`, movie: { movie, id } });
});
	/*
	router.get('/:id', (req, res) => {
      const { id } = req.params;
      // Find user in DB
      const user = _.find(users, ["id", id]);
      // Return user
      res.status(200).json({
        message: 'User found!',
        user
      });
    });
*/


module.exports = router;