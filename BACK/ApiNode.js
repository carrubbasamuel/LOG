const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.json());
app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'samuelouss',
  port: 3306,
});


app.get('/node/get.js', (req, res) => {
  connection.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
    } else {
      console.log(result);
      res.json(result);
    }
  });
});


app.post('/node/get.js', (req, res) => {
  const { id, nome, mail, pass } = req.body;
  

  const sql = 'INSERT INTO user (id, nome, mail, pass) VALUES ( ?, ?, ?, ?)';
  const values = [id, nome, mail, pass];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.log('Dati ricevuti dal client:', req.body);
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
    } else {
      console.log('Dati inseriti correttamente nel database:', result);
      res.json({ message: 'Dati inseriti correttamente nel database' });
    }
  });
});


app.post('/login', (req, res) => {
  const { mail, pass } = req.body;

  const sql = 'SELECT * FROM user WHERE mail = ? AND pass = ?';
  const values = [mail, pass];
  console.log('Dati ricevuti dal client:', mail, pass);

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
    } else {
      if (results.length > 0) {
        const userId = results[0].id;
        let sqlProducts = "SELECT * FROM products JOIN user ON products.id = user.id WHERE user.id = ?";
        const valuesProducts = [userId];
        
        connection.query(sqlProducts, valuesProducts, (err, products) => {
          if (err) {
            console.error('Errore nell\'esecuzione della query:', err);
            res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
          } else {
            console.log(products);
            res.json({ success: true,  message: 'Accesso effettuato con successo', data: products });
          }
        });
      } else {
        // L'utente non esiste o le credenziali sono errate
        res.status(401).json({success:false, message: 'Credenziali di accesso non valide' });
      }
    }
  });
});




app.delete('/node/delete.js', (req, res) => {
  const { id } = req.body;

  const sql = 'DELETE FROM user WHERE id = ?';
  const values = [id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
    } else {
      console.log('Dati eliminati correttamente dal database:', result);
      res.json({ message: 'Dati eliminati correttamente dal database' });
    }
  });
});



app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
