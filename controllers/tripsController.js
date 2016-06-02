var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User,
    Trip = db.Trip;


function getUser(req, res) {
  db.User.find({}, function(err, allUsers) {
      res.json(allUsers);
    });
}

function index(req, res) {
  Trip
    .find({})
    .populate('user')
    .exec(function(err, trips){
      if (err || !trips || !trips.length) {
        return res.status(404).send({message: 'Trips not found.'});
      }
      res.send(trips);
    });
}

function create(req, res){
  var new_trip = new Trip(req.body);
  // setGroupTrip(new_trip.group);
  // console.log("YOOOOO",new_trip);
  new_trip.user = req.user_id;
  new_trip.save(function(err, new_trip){
    res.send(new_trip);
  });
}
// function setGroupTrip(array){
//   array.forEach(function(e){
//     var query = {
//       _id: e._id
//     };
//     var user = db.User.findOne(query);
//     console.log("HELLO", user);
//     user.trips.push(new_trip._id);
//   });
// }

function show(req, res){
  Trip
    .findById(req.params.id)
    .populate('user')
    .exec(function(err, found_trip){
      if (err || !found_trip) {
        return res.status(404).send({message: 'Trip not found.'});
      }

      res.send(found_trip);
    });
}

function update(req, res){
  var query = {
    _id: req.params.id
  };

  if (req.user_id) {
    query.user = req.user_id;
  }

  Trip
    .findOneAndUpdate(query, req.body)
    .exec(function(err, trip){
      if (err || !trip) {
        console.log(trip);
        return res.status(404).send({messsage: 'Failed to update trip.'});
      }
      res.status(204).send();
    });
}

function destroy(req, res){
  var query = {
    _id: req.params.id
  };

  if (req.user_id) {
    query.user = req.user_id;
  }

  Trip
    .findOneAndRemove(query)
    .exec(function(err, trip){
      if (err || !trip) {
        return res.status(404).send({messsage: 'Failed to delete Trip.'});
      }
      res.status(204).send();
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy,
  getUser: getUser
};
