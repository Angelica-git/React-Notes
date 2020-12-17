// // PROMISES with API
// https://crudcrud.com

// // GET - reading all users
// fetch("https://crudcrud.com/api/7c3b739c84ef4cadb5be97c44bfe7bd9/users
// ")
// .then((res) => res.json())
// .then((res) => console.log(res));

// // POST - creating a new user
// fetch('https://crudcrud.com/api/7c3b739c84ef4cadb5be97c44bfe7bd9/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({name: "Linnea", age: 28})
// })
// .then((res) => console.log(res));

// // GET id - reading single user
// fetch("https://crudcrud.com/api/7c3b739c84ef4cadb5be97c44bfe7bd9/users/insertID")
// .then(res => res.json())
// .then(res => console.log(res));

// // PUT id - update/ change single user
// fetch('https://crudcrud.com/api/7c3b739c84ef4cadb5be97c44bfe7bd9/users/insertID', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({name: "Linnea", age: 100})
// })
// .then(res => console.log(res));

// // DELETE id - delete single user
// fetch('https://crudcrud.com/api/7c3b739c84ef4cadb5be97c44bfe7bd9/users/insertID', {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));
