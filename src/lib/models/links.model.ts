import mongoose from 'mongoose'

const LinkSchema = new mongoose.Schema({
	link: {
		type: String,
		required: [true, 'Link must be provided'],
		trim: true
	},
	name: {
		type: String,
		required: [true, 'Name must be provided'],
		trim: true
	},
	description: {
		type: String,
		required: true,
		maxLength: [400, 'Please provide a smaller description.. something less than 400 chars']
	}
}, { timestamps: true })

export default mongoose.models.Link || mongoose.model('Link', LinkSchema)
