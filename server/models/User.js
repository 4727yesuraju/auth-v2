const mongoose = require("mongoose");

// Define the shape of a User document in MongoDB
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // name is mandatory
      trim: true,     // removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,   // no two users can have the same email
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,   // minimum password length
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

// Export the model so other files can use it
const User = mongoose.model("User", userSchema);
module.exports = User;
