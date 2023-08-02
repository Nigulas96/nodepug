const express = require('express');
const app = express();
app.set('view engine', 'pug');

let customers = [
  {id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
  {id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113'},
  {id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176'},
];

app.get('/', (req, res) => {
  res.render('customerList', { customers: customers });
});

app.get('/add', (req, res) => {
  res.render('addCustomer');
});

app.post('/add', (req, res) => {
  // Tässä pitäisi olla koodia uuden asiakkaan lisäämiseksi customers-taulukkoon.
  // Käytännössä tähän tarvittaisiin bodyParser-middleware, jotta voisit lukea
  // lomakkeesta lähetetyn datan, mutta tämä osuus jätetään tässä pois, koska
  // kysymys ei käsitellyt sitä.
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}.`);
});
