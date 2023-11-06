const userModel = require('../models/user');

// Controller for the first page - entering email and password
exports.registerEmailPassword = (req, res) => {
  const { email, password } = req.body; // Assuming you're using body-parser
  const userData = { email, password };
  userModel.createUser(userData, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
      res.status(500).send('Error creating user. please check you have entered correct emial');
    } else {
      res.status(201).json({ message: 'User email and password created successfully' });
    }
  });
};

// Controller for the second page with additional user information
exports.registerUserInfo = (req, res) => {
  const userInfo = req.body; // Assuming you're using body-parser
  // Assuming you have a way to identify the user (e.g., based on their email)
  const email = userInfo.email; // Use email or any other unique identifier
  userModel.updateUser(email, userInfo, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
      res.status(500).send('Error updating user information');
    } else {
      res.status(200).json({ message: 'User information updated successfully' });
    }
  });
};
//controller for image upload
exports.uploadImages = (req, res) => {
  console.log("sahir")
  const { email } = req.body; // Assuming you have the user's email as a unique identifier
  const { cover_image, profile_image } = req.files;
  const coverImagePath = cover_image[0].path;
  const profileImagePath = profile_image[0].path;
  const bio = req.body.bio;

  userModel.updateUserImages(email, coverImagePath, profileImagePath, bio, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
      res.status(500).send('Error updating user images');
    } else {
      res.status(200).json({ message: 'User images uploaded successfully' });
    }
  });
};
// Controller for handling Instagram connection callback
exports.connectInstagram = (req, res) => {
  // Access the Instagram profile from the 'req.user' object
  const instagramProfile = req.user;

  // Save the Instagram user profile information to your database
  userModel.updateUserInstagram(req.body.email, instagramProfile, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
      res.status(500).send('Error connecting Instagram account');
    } else {
      res.status(200).json({ message: 'Instagram account connecte  d successfully' });
    }
  });
};
 
// Controller for selecting the user's preferred session
exports.selectSession = (req, res) => {
  const { email, selectedSessions } = req.body;

  // Assuming you have a function to update the user's profile with the selected sessions
  userModel.updateUserSelectedSessions(email, selectedSessions, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
      res.status(500).send('Error updating selected sessions');
    } else {
      res.status(200).json({ message: 'Selected sessions updated successfully' });
    }
  });
};