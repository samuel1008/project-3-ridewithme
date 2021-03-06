var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var tripSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  when: Date,
  where: {},
  group: [],
  driver: {
    user: {},
    passengers: Number
  }
});

var Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
