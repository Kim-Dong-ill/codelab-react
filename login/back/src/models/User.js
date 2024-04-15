const express = require("express");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 6,
    unique: true,
    trim: true,
  },
  password: { type: String, required: true },
  name: { type: String, required: true },
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
