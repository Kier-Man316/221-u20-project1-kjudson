const person = require ('../model/person');
let person1 = person.newperson('Kiernan','Judson', 'blue');
let person2 = person.newperson('Alex','Martinez','brown');
let person3 = person.newperson('lorenzo', 'Rosado silver','brown');


let people  = [person1, person2, person3];


exports.getAllUsers = (req, res) => {
    res.setheader('content-type','application/json');
    res.send(JSON.stringify(people));
}

exports.getusers = (req, res) => {
      res.setheader('content-type','application/json');
    res.send(JSON.stringify(people[req.params.id]));
}
exports.saveuser = (req, res) => {
    let user = req.body;
    console.log(user);
}
people.push(user);

res.send(JSON.stringify(people))