require('dotenv').config();

//Mongo(ose) 1
const mongoose = require('mongoose');
console.log('MongoDB URI:', process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(
  process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }
)

let personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

var createAndSavePerson = function(done) {
  var janeFonda =new Person({name: "jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  janeFonda.save(function(err,data){
    if (err) return console.error(err);
    done(null,data)
  });
};

var arrayOfPeople = [
  {name: "Jack", age: 28, favoriteFoods: ["Spaghetti"]},
  {name: "Melek", age: 28, favoriteFoods: ["Peach"]},
  {name: "Kirsty", age: 30, favoriteFoods: ["Popcorn"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

var findPeopleByName = function(personName, done) {
Person.find({name: personName}, function (err, personFound) {
  if (err) return console.log(err);
  done(null, personFound);
});
};

var findOneByFood = function(food, done) {
Person.findOne({favoriteFoods: food}, function (err, data) {
if (err) return console.log(err);
done(null, data);
});
};

var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

Person.findById(personId, (err, person) => {
  if(err) return console.log(err);

  person.favoriteFoods.push(foodToAdd);

  person.save((err, updatedPerson) => {
    if(err) return console.log(err);
    done(null, updatedPerson)
  })
})
};




const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
