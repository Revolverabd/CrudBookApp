const argv = require('./config/yargs').argv;
const logicBook = require('./logic/logicBook');
const colors = require('colors')


// console.log(argv);

let comand = argv._[0];

switch (comand) {

    case 'create':

        let task = logicBook.createBook(argv.isbn, argv.title, argv.author);

        console.log(task);

        break;

    case 'read':

        let listOfBooks = logicBook.getListBooks();

        console.log('=========== List Of Book ==========='.green);
        for (let task of listOfBooks) {
            console.table(task);
            console.log('========================='.green);
        }

        break;

    case 'update':

        let updated = logicBook.updateBook(argv.isbn, argv.title, argv.author);
        console.log(updated);
        break;

    case 'delete':

        let bookDeleted = logicBook.deleteBook(argv.isbn);
        console.log(bookDeleted);
        break;

    case 'search':

        let book = logicBook.getSearchBook(argv.isbn);

        if (Boolean(book)) {
            console.log('========== Book =========='.green);
            console.table(book);
            console.log('=========================='.green);
        }

        break;

    default:

        console.log('command not recognized');
        break;
}
