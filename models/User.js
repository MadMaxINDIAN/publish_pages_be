const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    photoURL: {
        type: String,
    },
    provider: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'user'
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
