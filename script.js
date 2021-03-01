class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  // Getters
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let sum = this.ratings.reduce((acc, rating) => acc + rating);
    return sum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    // call the super method to inherit the title, isCheckedOut and ratings property
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director() {
    return this._director;
  }

  get runtime() {
    return this._runtime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// console.log(historyOfEverything);
// console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
