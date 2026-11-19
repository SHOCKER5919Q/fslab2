const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/college');

const Student = mongoose.model('Student', { name: String, marks: Number });

async function run() {
    // insert one so there is something to update
    await Student.create({ name: 'Saket', marks: 70 });

    // update ONE document
    await Student.updateOne({ name: 'Saket' }, { $set: { marks: 95 } });
    console.log('One document updated');

    // update MANY documents
    const res = await Student.updateMany({ marks: { $lt: 50 } }, { $set: { marks: 50 } });
    console.log('Many updated:', res.modifiedCount);

    // show the result
    console.log(await Student.find({ name: 'Saket' }));

    mongoose.connection.close();
}

run();
