const fs = require('fs');
const csvToJson = require('convert-csv-to-json');



const saveDB = (listBooks) => {

   let emptyData = uploadLisBook();
   
    if (emptyData.length > 0){

        fs.writeFile('db/data.csv', listBooks.replace(/['"]+/g, '') + '\n', { flag: 'a' }, (err) => {
            if (err) throw new Error('Could not be saved')
        });

        return true;
        
    }else{

        let head = `isbn,title,author\n${listBooks}`;
    
        fs.writeFile('db/data.csv', head.replace(/['"]+/g, ''), { flag: 'a' }, (err) => {
            if (err) throw new Error('Could not be saved')
        });

        return true;

    }

}

const uploadLisBook = () => {

    let data = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('db/data.csv');
    return data; 

}

const updateDB = (listBooks) => {

    let head = 'isbn,title,author';

    fs.writeFile('db/data.csv', head.replace(/['"]+/g, '') + '\n', (err) => {
        if (err) throw new Error('Could not be saved')
    });

    fs.writeFile('db/data.csv', listBooks.replace(/['"]+/g, '') + '\n', { flag: 'a' }, (err) => {
        if (err) throw new Error('Could not be saved')
    });
}

const deleteDB = (listBooks) => {

    let head = 'isbn,title,author\n';

    fs.writeFile('db/data.csv', head.replace(/['"]+/g, ''), (err) => {
        if (err) throw new Error('Could not be saved')
    });

    fs.writeFile('db/data.csv', listBooks.replace(/['"]+/g, '') + '\n', { flag: 'a' }, (err) => {
        if (err) throw new Error('Could not be saved')
    });
}

module.exports = {
    uploadLisBook,
    saveDB,
    updateDB,
    deleteDB

}