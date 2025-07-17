const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './client/views' })
})

app.get('/feed', function (req, res) {
    res.sendFile('feed.html', { root: './client/views' })
})

let feedController = require('./controller/feedcontroller');

//app.route('./controller/modle')
app.route('/api/feedItems')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem)

app.route('/controller/model')
    .get(feedController.getfeedItem)
    .delete(feedController.deletefeedItem)
    .patch(feedController.updatefeedItem)

      
app.listen(1337, () => console.log('Listening on port 1337'));

