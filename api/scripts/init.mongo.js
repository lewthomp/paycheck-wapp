/* global db print */

// clean db
db.shifts.remove({});
db.rates.remove({});

// initial data
const shiftsInit = [{}];

const ratesInit = {};

db.shifts.insertMany(shiftsInit);
db.rates.insertOne(ratesInit);
print("Initially insert test shifts and rates");

// initialize counter
const count = db.shifts.count();
db.counters.remove({ _id: "shifts" });
db.counters.insert({ _id: "shifts", current: count });

// create indexes
