const express = require('express');
const hostname = 'localhost';
const router = express.Router();
const port =3000;

const axios = require('axios');


let users = [{
  user: "Pierre",
  id: "0"
}];

/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  res.status(200).json({ users });
  axios.get('http://www.omdbapi.com/?t=inception&apikey=b3d7a4f5')
    .then(function (response) {
      // handle success

      console.log(response);

    })
    .catch(function (error) {
      // handle error

      console.log(error);

    })
    .finally(function () {
      // always executed
    });

});
	/*Put*/



module.exports = router;