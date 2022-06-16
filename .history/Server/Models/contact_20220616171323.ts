import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema
({
     Name: "Taylor Swift",
    Phone: "22678566544",
    Email : "taylor@gmail.com"
},
{
    collection:"movies"

}
);

const Model = mongoose.model("Movies", MovieSchema);
export default Model;