import { Schema, model, Types } from 'mongoose';

const disasterSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'name should be at least 2 characters long!']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        enum: {
            values: ["Wildfire", "Flood", "Earthquake", "Hurricane", "Drought", "Tsunami", "Other"],
            message: 'Type must be one of: Wildfire, Flood, Earthquake, Hurricane, Drought, Tsunami, Other'
        }
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [0, 'Year cannot be negative!'],
        max: [2024, 'Year cannot be greater than 2024!']
    },
    location: {
        type: String,
        required: [true, 'Model is required!'],
        minLength: [3, 'Model should be at least 5 characters long!']
    },
    image: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description should be at least 10 characters long!'],
    },
    interestedList: [{
        type: Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Disaster = model('Disaster', disasterSchema);

export default Disaster;