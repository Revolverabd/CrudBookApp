const ISBN = require('isbn3')

const validateIsbn = (isbn) => {

    isbn = ISBN.parse(isbn.toString());

    return isbn;
}

module.exports = {
    validateIsbn
}

// Valid ISBN input examples:
// - 9781491574317
// - 978-1-4915-7431-7
// - 978-1491574317
// - isbn:9781491574317
// - 9781-hello-491574317
// - 030433376X
// - 0-304-33376-X

// Formats:
// - h: hyphen
// - n: no hyphen
// - 13: ISBN-13 without hyphen
// - 13h: ISBN-13 with hyphen (default)
// - 10: ISBN-10 without hyphen
// - 10h: ISBN-10 with hyphen
// - prefix, group, publisher, article, check, check10, check13: output ISBN part value
// - data: output all this data as JSON