var express = require('express');
var app = express();
var port = process.env.PORT || 8686;
var songRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

songRouter.route('/')
    .get(function(req, res){
        res.send('hello songs');
    });

songRouter.route('/single')
    .get(function(req, res){
        res.send('hello single song');
    });

app.use('/Songs', songRouter);

// Navigation
app.get('/', function(req, res){
    res.render('index', {
        title: 'hello from render', 
        nav: [{
            Link: '/Music', 
            Text: 'Music',
            Nav: [{
                Link: '/Songs', 
                Text: 'Songs'
            }, 
            {
                Link: '/Artists', 
                Text: 'Artists'
            }, 
            {
                Link: '/Album', 
                Text: 'Album'
            }, 
            {
                Link: '/Genre', 
                Text: 'Genre'
            }]
        }, 
        {
            Link: '/Videos', 
            Text: 'Videos',
            Nav: []
        }, 
        {
            Link: '/Pictures', 
            Text: 'Pictures',
            Nav: []
        }, 
        {
            Link: '/Genre', 
            Text: 'Genre',
            Nav: []
        }]
    });
});

// tracks
app.get('/tracks', function(req, res){
    res.send('all tracks');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});