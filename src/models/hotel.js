const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelId: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    owner: {  // Thêm trường owner để lưu thông tin chủ sở hữu
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rooms: [{ // Liên kết tới các phòng trong khách sạn
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room', // Liên kết với mô hình Room
    }],
    amenities: [String],
});

const Hotel = mongoose.model('Hotel', hotelSchema, 'Hotel');

module.exports = Hotel;
