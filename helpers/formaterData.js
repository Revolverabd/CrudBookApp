const { Parser } = require('json2csv');


const formaterData = (data) => {

    const json2csvParser = new Parser({ header: false });
    let csv = json2csvParser.parse(data);
    return csv;

}

module.exports = {
    formaterData
}