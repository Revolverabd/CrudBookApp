const ISBN = require('isbn-validate');

const validateIsbn = (isbn) => {

    isbn = ISBN.Validate(isbn.toString());

    return isbn;
}

module.exports = {
    validateIsbn
}
