import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
},
{
    collection:"movies"

}
);

const Model = mongoose.model("Users", MovieSchema);
export default Model;