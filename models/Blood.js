const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new SymptomSchema object for saving symptoms.
const BloodSchema = new Schema({
    bloodType: {
        type: String,
        trim: true,
        required: 'Type is required.',
    },
    donateDate: {
        type: String,
        trim: true,
        required: 'Date is required.',
    },
    donateTime: {
        type: String,
        trim: true,
        required: 'Time is required',
    },
    bloodInfo: {
        type: String,
        trim: true,
        required: 'Note is required',
    },
});

// This creates our model from the above schema, using mongoose's model method
const bloodJournal = mongoose.model('bloodJournal', BloodSchema);

// Export the SymptomJournal model
module.exports = bloodJournal;
