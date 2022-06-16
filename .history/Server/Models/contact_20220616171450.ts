import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema
({ 
    Name: String,
    Phone: String,
    Email : String
},
{
    collection:"contacts"

}
);

const Model = mongoose.model("Movies", MovieSchema);
export default Model;