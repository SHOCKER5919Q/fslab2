use college

// insert sample data first
db.students.insertMany([
     { name: 'Saket', marks: 85 },
     { name: 'Arjun', marks: 60 },
     { name: 'Priya', marks: 92 },
     { name: 'Ravi', marks: 45 }
])

// $gt - greater than
db.students.find({ marks: { $gt: 80 } })

// $eq - equal to
db.students.find({ marks: { $eq: 60 } })

// $lt - less than
db.students.find({ marks: { $lt: 50 } })

// $gte and $lte together - a range
db.students.find({ marks: { $gte: 60, $lte: 90 } })

// $in - matches any value in the list
db.students.find({ name: { $in: ['Saket', 'Ravi'] } })

// $ne - not equal
db.students.find({ name: { $ne: 'Arjun' } })
