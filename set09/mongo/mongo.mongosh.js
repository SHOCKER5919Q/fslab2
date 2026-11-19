// 1. create (and switch to) the database
use college

// 2. create the collection
db.createCollection('students')

// 3. ADD a document
db.students.insertOne({ name: 'Saket', branch: 'CSE', marks: 85 })

// view it
db.students.find()

// 4. UPDATE the document
db.students.updateOne({ name: 'Saket' }, { $set: { marks: 95 } })

// 5. DELETE the document
db.students.deleteOne({ name: 'Saket' })

// confirm it is gone
db.students.find()
