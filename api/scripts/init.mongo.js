/* global db print */

// initial data
const aboutInit = { id: 1, message: "paycheck api v1.0" };

const shiftsInit = [
    {
        id: 1,
        start: new Date("2022-01-01T09:00:00"),
        end: new Date("2022-01-01T17:00:00"),
        created: new Date(),
    },
    {
        id: 2,
        start: new Date("2022-01-13T11:30:00"),
        end: new Date("2022-01-13T15:00:00"),
        created: new Date(),
    },
    {
        id: 3,
        start: new Date("2022-03-10T07:15:00"),
        end: new Date("2022-03-10T12:30:00"),
        created: new Date(),
    },
];

const ratesInit = [{}];

// clean db
print("** Cleaning paycheck db")
db.about.remove({})
db.shifts.remove({});
db.rates.remove({});

print("** Inserting test data")
db.about.insertOne(aboutInit)
db.shifts.insertMany(shiftsInit);
db.rates.insertOne(ratesInit);
print("** Successfully initialised db with test data");

// initialize counter
print("** Initialising counter collection")
const count = db.shifts.count();
db.counters.remove({ _id: "shifts" });
db.counters.insert({ _id: "shifts", current: count });
print("** Successfully initialised counter")

// create indexes

print("*** Mongodb initialisation complete")