import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Intern from "../models/intern.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    console.log(req)
    const { firstName, lastName, email, password } = req.body;
    // gender, dob, contact, state, cityTown, region, address, collegeName, education, aboutYou } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newIntern = new Intern({
      firstName,
      lastName,
      email,
      password: passwordHash,
      //   gender,
      //   dob,
      //   contact,
      //   state,
      //   cityTown,
      //   region,
      //   address,
      //   collegeName,
      //   education,
      //   aboutYou,
    });
    const savedIntern = await newIntern.save();
    console.log("Data inserted successfully")
    res.status(201).json(savedIntern); // send the savedIntern to the client
  } catch (err) {
    res.status(500).json({ error: err.message }); // send the error to the client
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const intern = await Intern.findOne({ email: email });
    if (!intern) return res.status(400).json({ message: "Intern not found" });

    const isMatch = await bcrypt.compare(password, intern.password);
    console.log(isMatch);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: intern._id }, process.env.JWT_SECRET);
    delete intern.password;
    res.status(200).json({ token, intern });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
