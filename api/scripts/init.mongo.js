/* global db print */
// initial data
const aboutInit = { id: 1, message: "paycheck api v1.0" };

const shiftsInit = [
  {
    id: 0,
    start: new Date("2022-01-01T09:00:00"),
    end: new Date("2022-01-01T17:00:00"),
    created: new Date(),
  },
  {
    id: 1,
    start: new Date("2022-01-13T11:30:00"),
    end: new Date("2022-01-13T15:00:00"),
    created: new Date(),
  },
];

const payratesInit = [
  {
    id: 0,
    rate: 28.9,
    days: [0, 1, 2, 3, 4, 5], // mon-sat
    holiday: false,
    periodStart: { hour: 6, minute: 0 },
    periodEnd: { hour: 19, minute: 0 },
    created: new Date(),
    notes: "nursery",
  },
  {
    id: 1,
    rate: 35.5,
    days: [6], // sunday
    holiday: false,
    periodStart: { hour: 9, minute: 0 },
    periodEnd: { hour: 18, minute: 0 },
    created: new Date(),
    notes: "vsco",
  },
];

// clean db
print("** Cleaning paycheck db");
db.about.remove({});
db.shifts.remove({});
db.payrates.remove({});
db.rates.remove({}); // for safety

print("** Inserting test data");
db.about.insertOne(aboutInit);
db.shifts.insertMany(shiftsInit);
db.payrates.insertMany(payratesInit);
print("** Successfully initialised db with test data");

// initialize counter
print("** Initialising counter collection");
const initShiftsCount = db.shifts.count();
db.counters.remove({ _id: "shifts" });
db.counters.insert({ _id: "shifts", current: initShiftsCount });

const initPayratesCount = db.payrates.count();
db.counters.remove({ _id: "payrates" });
db.counters.insert({ _id: "payrates", current: initPayratesCount });
print("** Successfully initialised counter");

// create indexes

print("*** Mongodb initialisation complete");
