import mongoose from 'mongoose';

const achieverSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    sem: {
        type: String,
        required: true
    },
    cgpa: {
        type: Number,
        required: true
    },
    sgpa: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Achiever = mongoose.models.Achiever || mongoose.model('Achiever', achieverSchema);

export default Achiever;
