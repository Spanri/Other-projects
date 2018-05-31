const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
app.listen(port, () => {
  console.log(`Server ${port} is working!`);
});

app.use(express.static(path.join(__dirname, 'client')));
app.set('view engine', 'jade');

app.get(`/note/:n`, (req, res) => {
    res.send(notes[req.params.n-1]);
});

app.get(`/game/:n`, (req, res) => {
    let n = req.params.n;
    //res.send(`Its ${n} game.`);
    //res.sendfile(__dirname + '/client/game.html');
    console.log(n);
    switch(n){
        case '1': game1(res); break;
        case '2': game2(res); break;
        case '3': game3(res); break;
        default: console.log('error of game',n);
    }
});

function game1(res){
    console.log('game 1');
    res.render('../client/game.jade', {note: notes[0]});
    
}

function game2(res){
    console.log('Змейка, шшшшш!');
    res.render('../client/game.jade', {note: notes[1]});
}

function game3(res){
    console.log('game 3');
    res.render('../client/game.jade', {note: notes[2]});
}

notes = [
    {
        name: 'tic tac toe',
        description: 'Крестики - нолики'
    },
    {
        name: 'snake',
        description: 'Змейка'
    },
    {
        name: 'marine battle',
        description: 'Морской бой'
    }
];