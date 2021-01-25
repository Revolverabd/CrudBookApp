const formater = require('../helpers/formaterData.js');
const isbnValidated = require('../helpers/validateIsbn.js');
const accessData = require('../functonsDB/dao.js');
const colors = require('colors');


let listBooks = [];

const createBook = (isbn, title, author) => {
  
    validate = isbnValidated.validateIsbn(isbn);
    
    if (!validate) {

        console.log(`${isbn} not valid, Please enter a valid ISBN`.red);
        return false;
    }
    listBooks = accessData.uploadLisBook();
    
    let book = {
        isbn,
        title,
        author
    };

    let index = listBooks.findIndex(task => task.isbn === isbn);

    if (index >= 0) {

        console.log(`The ISBN: ${isbn} entered already exists`.red)

        return false;

    } else {

        listBooks = book;
        listBooks = formater.formaterData(listBooks);
        accessData.saveDB(listBooks);

        return true;
    }


}

const getListBooks = () => {

    return listBooks = accessData.uploadLisBook();

}

const updateBook = (isbn, title = '', author = '') => {

    if (title.length === 0 && author.length === 0){

        console.log('please enter data to update'.red);
        return false;

    }

    listBooks = accessData.uploadLisBook();

    let index = listBooks.findIndex(task => task.isbn === isbn);

    if (index >= 0) {

        if (title.length != 0) {
            listBooks[index].title = title;
        }
        if (author.length != '' ) {
            listBooks[index].author = author;
        }

        listBooks = formater.formaterData(listBooks);
        accessData.updateDB(listBooks);

        return true;

    } else {

        return false;

    }

}

const deleteBook = (isbn) => {

    listBooks = accessData.uploadLisBook();

    let newListBooks = listBooks.filter(task => task.isbn !== isbn);

    if (listBooks.length === newListBooks.length) {
        return false;
    } else {
        listBooks = newListBooks;
        listBooks = formater.formaterData(listBooks);
        accessData.updateDB(listBooks);
        return true;
    }

}

const getSearchBook = (isbn) => {

    listBooks = accessData.uploadLisBook();

    let index = listBooks.findIndex(task => task.isbn === isbn);

    if (index >= 0) {
        listBooks = listBooks[index];
        return listBooks;
    } else {

        console.log(`ISBN: ${isbn} insert does not exist in the DB`);

    }

}


module.exports = {
    createBook,
    getListBooks,
    updateBook,
    deleteBook,
    getSearchBook

}