const { FeedItem, feedItems } = require('../model/feeditem');

exports.getAllFeedItems = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(feedItems);
};

exports.saveFeedItem = (req, res) => {
  const { title, body, linkUrl, imageUrl } = req.body;
  const newItem = new FeedItem(title, body, linkUrl, imageUrl);
  feedItems.push(newItem);
  res.setHeader('Content-Type', 'application/json');
  res.status(201).send(newItem);
};

exports.getfeedItem = (req, res) => {
    const item = feedItems.find(f => f.id === parseInt(req.params.id));
  if (item) {
    res.setHeader('Content-Type', 'application/json');
    res.send(item);
  } else {
    res.status(404).send({ error: 'Item not found' });
  }
};

exports.deletefeedItem = (req, res) => {
  const id = parseInt(req.params.id);
  const index = feedItems.findIndex(f => f.id === id);
  if (index >= 0) {
    feedItems.splice(index, 1);
    res.status(200).send({ message: 'Item deleted' });
  } else {
    res.status(404).send({ error: 'Item not found' });
  }
};

exports.updatefeedItem = (req, res) => {
  const id = parseInt(req.params.id);
  const item = feedItems.find(f => f.id === id);
  if (item) {
    const { title, body, linkUrl, imageUrl } = req.body;
    if (title) item.title = title;
    if (body) item.body = body;
    if (linkUrl) item.linkUrl = linkUrl;
    if (imageUrl) item.imageUrl = imageUrl;
    res.status(200).send(item);
  } else {
    res.status(404).send({ error: 'Item not found' });
  }
};