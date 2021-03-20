import mongoose from "mongoose";

const meetupCollection = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

mongoose.models = {};

const Meetup = mongoose.model("Meetups", meetupCollection);

export default Meetup;
