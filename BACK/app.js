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
  database: 'fakesite',
  port: 3306,
});


//* Registrazione
app.post('/register', (req, res) => {
  const {email, password, nome, cognome, profile } = req.body;
  const id = Math.floor(Math.random() * 1000000);

  const sql = 'INSERT INTO user (id, mail, pass) VALUES (?, ?, ?)';
  const values = [id, email, password];
  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Errore nell\'esecuzione della query:', err);
      res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
    } else {
      const sql = 'INSERT INTO anagrafica (id, nome, cognome, imgProfile) VALUES (?, ?, ?, ?)';
      const values = [id, nome, cognome, profile];
      connection.query(sql, values, (err, results) => {
        if (err) {
          console.error('Errore nell\'esecuzione della query:', err);
          res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
        } else {
          res.json({ success: true, message: 'Registrazione effettuata con successo' });
        }
      });
    }
  });
});


//* Login
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
        let sqlProducts = "SELECT * FROM anagrafica JOIN user ON anagrafica.id = user.id WHERE user.id = ?";
        const valuesProducts = [userId];
        
        connection.query(sqlProducts, valuesProducts, (err, products) => {
          if (err) {
            console.error('Errore nell\'esecuzione della query:', err);
            res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
          } else {
            const listImg = [];
            connection.query("SELECT * FROM post JOIN anagrafica ON anagrafica.id = post.id WHERE post.id = ?", [userId], (err, img) => {
              if(err) {
                console.error('Errore nell\'esecuzione della query:', err);
                res.status(500).json({ message: 'Errore nell\'esecuzione della query' });
              }
              else {
                for(let i = 0; i < img.length; i++) {
                  listImg.push(img[i].img);
                }
                res.json({ success: true,  message: 'Accesso effettuato con successo', data: products, img: listImg });
              }
            });
          }
        });
      } else {
        // L'utente non esiste o le credenziali sono errate
        res.status(401).json({success:false, message: 'Credenziali di accesso non valide' });
      }
    }
  });
});




module.exports = app;
