var navigation = 
[{
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
        Link: '/Albums', 
        Text: 'Albums'
    }, 
    {
        Link: '/Genres', 
        Text: 'Genres'
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
}];

module.exports = {
    getNavigation: function(){
        return navigation;
    }
}