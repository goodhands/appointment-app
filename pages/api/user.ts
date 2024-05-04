import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../lib/mongodb";
import UserLog from "@/lib/models/appointment.model";
import bcrypt from "bcrypt";
const METHODS = {
  GET: "GET",
  POST: "POST",
};
const saltRounds = 10;

export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connect();
    let {
      firstname = "Lapper",
      lastname = "Woker",
      email = "work@gmail.com",
      password = "password",
    } = request.body;
    switch (request.method) {
      //Login a User
      case METHODS.GET:
        if (!email || !password) {
          return res.status(422).json({ error: "All Fields Are Required" });
        }
        // Handle GET request
        const userLog = await UserLog.findOne({ email }).lean().exec();
        if (!userLog) {
          return res
            .status(401)
            .json({ error: "Wrong Email or Password Provided" });
        }
        if (!(await bcrypt.compare(password, userLog.password as string))) {
          return res
            .status(401)
            .json({ error: "Wrong Email or Password Provided" });
        }
        delete userLog.password
        return res.status(200).json({ ...userLog });
      //Create a User
      case METHODS.POST:
        if (!firstname || !lastname || !email || !password) {
          return res.status(422).json({ error: "All Fields Are Required" });
        }
        const checkUser = await UserLog.findOne({ email });
        if (checkUser) {
          return res.status(409).json({ error: "Email already taken" });
        }
        const hashPassword = await bcrypt.hash(password, saltRounds);

        // Handle POST request
        const user = await UserLog.create({
          firstname,
          lastname,
          email,
          password: hashPassword,
        });
        delete user.password
        return res.status(201).json({ ...user });
      default:
        return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error. Please Contatc an Admin." });
  }
}
