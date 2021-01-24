const fs = require('fs');

// const converter = require('json-2-csv');
// const csv1 = require('csv-parser');

// const csv = require('csvtojson');

const csvToJson = require('convert-csv-to-json');

const { Parser } = require('json2csv');

const transform = require('../helpers/transformData.js');



let listBooks = [];

// const transformData = () => {

//     const json2csvParser = new Parser({ header: false });
//     let csv = json2csvParser.parse(listBooks);

//     listBooks = csv;

// }
const saveDB = () => {

    fs.writeFile('db/data.csv', listBooks.replace(/['"]+/g, '') + '\n', { flag: 'a' }, (err) => {
        if (err) throw new Error('Could not be saved')
    });

    return true;
}
const updateDB = () => {

    let head = 'isbn,title,author';

    fs.writeFile('db/data.csv', head.replace(/['"]+/g, '') + '\n', (err) => {
        if (err) throw new Error('Could not be saved')
    });

    const json2csvParser = new Parser({ header: false });
    let csv = json2csvParser.parse(listBooks);

    fs.writeFile('db/data.csv', csv.replace(/['"]+/g, '') + '\n', { flag: 'a' }, (err) => {
        if (err) throw new Error('Could not be saved')
    });
}
// carga de datos
const uploadLisBook = () => {

    listBooks = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('db/data.csv');

}







const createBook = (isbn, title, author) => {

    uploadLisBook();

    let book = {
        isbn,
        title,
        author
    };

    let index = listBooks.findIndex(task => task.isbn === isbn);

    if (index >= 0) {

        console.log(`The ISBN: ${isbn} entered already exists`)

        return false;
    
    } else {

        listBooks = book;
        listBooks = transform.transformData(listBooks);
        saveDB();

        return true;
    }


}

const getListBooks = () => {

    uploadLisBook();
    return listBooks;

}

const updateBook = (isbn, title, author) => {

    uploadLisBook();

    console.log(listBooks)

    let index = listBooks.findIndex(task => task.isbn === isbn);

    if (index >= 0) {

        listBooks[index].title = title;
        listBooks[index].author = author;
        console.log(listBooks)

        updateDB();

        return true;

    } else {

        return false;

    }

}

const deleteBook = (isbn) => {

    uploadLisBook();

    let newListBooks = listBooks.filter(task => task.isbn !== isbn);

    if (listBooks.length === newListBooks.length) {
        return false;
    } else {
        listBooks = newListBooks;
        updateDB();
        return true;

    }

}

const getSearchBook = (isbn) => {

    uploadLisBook();

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