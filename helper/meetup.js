import Meetup from "../models/meetup";
import connectDB from "../middleware/mongoose";
import { Types } from "mongoose";

async function getMeetup(id) {
  const meetup = await Meetup.findOne({ _id: Types.ObjectId(id) });

  return meetup;
}

export default connectDB(getMeetup);
