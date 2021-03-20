import Meetup from "../../models/meetup";
import connectDB from "../../middleware/mongoose";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const newMeetup = new Meetup(data);
    const result = await newMeetup.save();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default connectDB(handler);
