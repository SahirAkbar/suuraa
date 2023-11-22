const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash');
var createError = require("http-errors");
// Controller for the first page - entering email and password
exports.registerEmailPassword =async (req, res,next) => {
  const { email, password } = req.body; // Assuming you're using body-parser
  const userData = { email, password };
  const hashedPassword = bcrypt.hashSync(password, 10);
  userData.password = hashedPassword
  try {
    let response = await userModel.create(userData)
    res.status(200).json({message:'Success',response})
  } catch (error) {
    next(createError(401,'Internal Server Error!!'));
  }
};
// Controller for the second page with additional user information
exports.registerUserInfo = async(req, res,next) => {
  const userInfo = req.body; // Assuming you're using body-parser
  try {
    let record =req.user;
    if (record) {
      record.set(userInfo)
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      throw createError(401, "User Not Found!!")
    }
  } catch (error) {
    next(error)
  }
};
//controller for image upload
exports.uploadImages = async (req, res,next) => {
  try {
  const { cover_image, profile_image } = req.files;
  const coverImagePath = cover_image[0].path;
  const profileImagePath = profile_image[0].path;
  const bio = req.body.bio;
    let record = req.user;
    if (record) {
      record.set({
        cover_image: coverImagePath,
        profile_image:profileImagePath,
        bio,
      });
      let result = await record.save();
      return res.status(200).json({message:'Updated Successfully',result})
    } else {
      return res.status(404).json({message:'User not found'})
    }
  } catch (error) {
    next(error)
  }
  
};
// Controller for handling Instagram connection callback
exports.connectInstagram = (req, res) => {
  // Access the Instagram profile from the 'req.user' object
  const instagramProfile = req.user;
  // Save the Instagram user profile information to your database
  userModel.updateUserInstagram(req.body.email, instagramProfile, (error, results) => {
    if (error) {
      console.error('Error: ' + error.message);
    return  res.status(500).json({message: 'Error connecting Instagram account'});
    } else {
   return    res.status(200).json({ message: 'Instagram account connecte  d successfully' });
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
   return    res.status(500).json({message: 'Error updating selected sessions'});
    } else {
 return      res.status(200).json({ message: 'Selected sessions updated successfully' });
    }
  });
};
exports.userLogin = async (req, res, next) => {
  const { email,password} = req.body
  try {
    let user = await userModel.findOne({ where: { email } })
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        console.log("matched")
        const userRecord = user.dataValues;
        const userValues = _.omit(userRecord, "password");
        var token = jwt.sign(userValues, "shhhhh");
        return res
          .status(200)
          .json({  token, userValues });
      } else {
        return res.status(401).json({ message: "Incorrect Password"  });
      }
    }
    else {
      return res.status(404).json({message:'Invalid Email Address'})
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}