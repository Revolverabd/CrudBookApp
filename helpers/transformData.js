const { Parser } = require('json2csv');


const transformData = (data) => {

    const json2csvParser = new Parser({ header: false });
    let csv = json2csvParser.parse(data);
    return csv;

}

module.exports = {
    transformData
}