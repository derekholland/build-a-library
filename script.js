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

  get _ratings() {
    return this._ratings;
  }

  // set isCheckedOut() {

  // }

  toggleCheckOutStatus() {
    if (this._isCheckedOut === false) {
      this._isCheckedOut === true;
    } else {
      this._isCheckedOut === false;
    }
  }

  get averageRating() {
    // acc sums up every number
    let sum = this._ratings.reduce(function (total, rating) {
      return total + rating;
    });
    let average = sum / this._ratings.length;
    return average;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, ratings) {
    super(title, ratings);
    this._author = author;
  }
}

const book1 = new Book("Stephen King", "The Shining", [9, 9, 10]);
console.log(book1);
