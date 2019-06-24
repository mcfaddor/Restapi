const db = require('mongoose');

const userSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    middlename:     { type: String },
    lastname:       { type: String, required: true },
   // birthdate:    { type: Date},

    ShippingAddress:{ type: String, required: true },
    ShippingCity:   { type: String, required: true },
    ShippingCountry:{ type: String, required: true },
    ShippingZip:    { type: String, required: true },

    BillingAddress: { type: String },
    BillingCity:    { type: String },
    BillingCountry: { type: String },
    BillingZip:     { type: String },
    
    email:          { type: String, required: true, unique: true},
    password:       { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("User", userSchema);
