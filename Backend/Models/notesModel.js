const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true , 'please add title for note'],
        max:[32 , 'Maximum 32 character']
    },
    content:{
        type:String,
        required:[true , 'please add content for note'],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        select:false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    versionKey: false
})

const Notes = mongoose.model('Note' ,noteSchema );

module.exports = Notes;