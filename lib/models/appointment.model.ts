import mongoose, { model, InferSchemaType, models } from "mongoose";
const UserLogSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

type IUserLog = InferSchemaType<typeof UserLogSchema>;
export type { IUserLog };

const UserLog: mongoose.Model<IUserLog> =
  models.UserLog || model("UserLog", UserLogSchema);
export default UserLog;
