const isbn = {
    demand: true,
    alias: 'i',
    desc: 'ISBN (International Standard Book Number)'
}

const title = {
    demand: true,
    alias: 't',
    desc: 'Title of the book'
}

const author = {
    demand: true,
    alias: 'a',
    desc: 'Author of the book'
}

const argv = require('yargs')
    .command('create', 'Create a book record', {
        isbn,
        title,
        author
    })
    .command('update', 'Update a book in the DB', {
        isbn: {
            command: true,
            alias: 'i'
        },
        title: {
            alias: 't'
        },

        author: {
            alias: 'a'
        }
    })
    .command('delete', 'Delete a book in the DB', {
        isbn,
    })
    .command('search', 'Delete a book in the DB', {
        isbn
    })
    .help()
    .argv


module.exports = {
    argv
}


