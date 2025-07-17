class FeedItem {
  constructor(title, body, linkUrl, imageUrl) {
    this.id = FeedItem.incrementId++;
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}

module.exports= {FeedItem};