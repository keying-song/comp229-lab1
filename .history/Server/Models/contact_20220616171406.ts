import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema
({
     Name: String,
    Phone: String,
    Email : String
},
{
    collection:"movies"

}
);

const Model = mongoose.model("Movies", MovieSchema);
export default Model;