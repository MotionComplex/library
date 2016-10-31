var express = require('express');
var mainRouter = express.Router();
var audioRouter = express.Router();
var videoRouter = express.Router();
var pictureRouter = express.Router();

module.exports = {
    getRouting: function(){
        return mainrouter, audioRouter, videoRouter, pictureRouter;
    }

    // setUpMainRouter: function(){
    //     app.get('/', function(req, res){
    //         res.render('index', {
    //             title: 'hello from render', 
    //             nav: navigation
    //         });
    //     });
    // },

    // setUpAudioRouter: function(){
    //     return 
    // }
}