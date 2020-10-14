import React from 'react';
import Form from './Form'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}

export default App;

// //Create Your Advanced Form

// We want to create a form to onboard a new user to our system. We need at least the following pieces of information about our new user:

// Name
// Email
// Password
// Terms of Service (checkbox)
// A Submit button to send our form data to the server.


// Implement Form Validation and Error Messaging

// Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

//  Using Yup, set up at least two different validations along with custom error messages that will display on screen when validation fails.


//  Make a POST Request

// Being able to POST data is a key skill of any developer, no matter your skill level.

//  Craft a POST request using axios that sends your form data to the following endpoint: https://reqres.in/api/users
//  Verify using a console.log() that you are receiving a successful response back
// (Note: For those that are curious, we're using reqres.in for this assignment's API. It's a free API that allows us to simulate a POST request for any data that we send it. Pretty awesome!)

// Display Returned Data to Screen

// When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

//  Set up a state property called users that is initialized with an empty array
//  Every time you make a POST request, and get that new user data back, update your users state with the new user added to the array
//  Render users in your app. You can use the html pre tag and JSON.stringify() method to display your post request.