import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    

},
{
    collection:"movies"

}
);

const Model = mongoose.model("Users", UserSchema);
export default Model;