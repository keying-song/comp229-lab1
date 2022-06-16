import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema
({
   
},
{
    collection:"movies"

}
);

const Model = mongoose.model("Movies", MovieSchema);
export default Model;