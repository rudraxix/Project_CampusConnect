const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uid: {type: String, required: true, unique: true},
    name: {type: String},
    email: {type: String, required: true, unique: true},
    collegeId: {type: String},
    batchNum: {type: String},
    bio: {type: String},
    interests: {type: [String]}
},
{
    timestamps: true
});

const User= mongoose.model('User', UserSchema);

module.exports = User;