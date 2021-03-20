import Meetup from "../models/meetup";
import connectDB from "../middleware/mongoose";

async function getMeetups() {
  const meetups = await Meetup.find();

  return meetups;
}

export default connectDB(getMeetups);
