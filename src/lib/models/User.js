import mongoose from "mongoose";


const userSchema = mongoose.model(
	"User",
	new mongoose.Schema(
		{
			_id: {
				type: String,
				required: true
			}
		},
		{ _id: false }
	)
);

const User = mongoose.models.User || userSchema;

export default User;




