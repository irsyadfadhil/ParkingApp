<br />
<p align="center">
  <h2 align="center">Coba Aplikasi Parking</h2>
</p>

# API Demo

| Description        |    URL        | Method  |
| ------------- |:-------------:| -----:|
| List Semua Parkiran     | http://localhost:5000/parking | GET |
| Buat Data Parkiran      | http://localhost:5000/parking      |   POST |
| Pilih Data Parkiran | http://localhost:5000/parking/:id      |    GET |
| Update Data Parkiran | http://localhost:5000/parking/:id      |    PUT |
| Delete Data Parkiran | http://localhost:5000/parking/:id      |    DELETE |


# Install Lib using in project
```
$ npm install --save express morgan
$ npm install --save-dev typescript @types/express nodemon ts-node @types/morgan mysql2 types/mysql2
```

# Install Aplikasi Parking
```
$ git clone https://github.com/irsyadfadhil/ParkingApp.git
$ cd ParkingApp
$ npm install
$ npm run dev 

