var express = require('express');
var app = express();
var port = process.env.PORT || 8686;
var routing = require('./routing.js')
var mainRouter = express.Router();
var audioRouter = express.Router();
var videoRouter = express.Router();
var pictureRouter = express.Router();
var navigation = require('./navigation.js').getNavigation();
var videoData = require('./data/videos.json');

app.use(express.static('public'));

// View Engine and View Source
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Start
app.get('/', function(req, res){
    res.render('index', {
        title: 'hello from render', 
        nav: navigation
    });
});

// Audio
audioRouter.route('/')
    .get(function(req, res){
        res.render('Audio', {
            title: 'hello from render', 
            nav: navigation
        });
    });
   
    audioRouter.route('/')
        .get(function(req, res){
            res.render('Songs', {
                title: 'hello from render', 
                nav: navigation
            });
        });
        
    app.use('/Songs', audioRouter);

    audioRouter.route('/')
        .get(function(req, res){
            res.render('Artists', {
                title: 'hello from render', 
                nav: navigation
            });
        });

    app.use('/Artists', audioRouter);
        
    audioRouter.route('/')
        .get(function(req, res){
            res.render('Albums', {
                title: 'hello from render', 
                nav: navigation
            });
        });
        
    app.use('/Albums', audioRouter);

    audioRouter.route('/')
        .get(function(req, res){
            res.render('Genres', {
                title: 'hello from render', 
                nav: navigation
            });
        });
        
    app.use('/Genres', audioRouter);

// Videos
videoRouter.route('/')
    .get(function(req, res){
        res.render('Videos', {
            title: 'hello from render', 
            nav: navigation,
            data: videoData
        });
    });
    
app.use('/Videos', videoRouter);

// Pictures
pictureRouter.route('/')
    .get(function(req, res){
        res.render('Pictures', {
            title: 'hello from render', 
            nav: navigation
        });
    });
    
app.use('/Pictures', pictureRouter);

app.listen(port, function(err){
    console.log('running server on port ' + port);
});