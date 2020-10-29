export default class Book {
    constructor(image, title, authors, published=2000, price = 0) {
        this.image = image;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.price = price;
    }
}
