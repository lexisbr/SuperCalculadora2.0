const express = require('express');
const app = express();
const path = require('path');

app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
//set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './views/about.html'));
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(app.get('port'), () =>{      //Arrow Function
    console.log(`listen on http://localhost:${app.get('port')}`);
});