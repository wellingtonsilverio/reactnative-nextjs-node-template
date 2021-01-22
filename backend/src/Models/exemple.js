import mongoose from "mongoose";

const exempleSchema = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number,
	},
});

const Exemple = mongoose.model("Exemple", exempleSchema);

export default Exemple;
