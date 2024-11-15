const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    roomNumber: {
        type: String,
        required: [true, 'Please add a room number'],
    },
    capacity: {
        type: Number,
        required: [true, 'Please add the capacity of the room'],
    },
    price: {
        type: Number,
        required: [true, 'Please add the room price'],
    },
    roomType: {
        type: String,
    },
    balcony: {
        type: Boolean,
    },
    amenities: {
        type: [String],
        default: [],
    },
    availableDates: [{
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
    }],
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema, 'Room');

module.exports = Room;
