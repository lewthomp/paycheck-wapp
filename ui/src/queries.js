export const listShiftsQuery = `
    query listShifts {
        shiftList {
            id start end
            created notes
        }
    }`;

export const addShiftQuery = `mutation addshift($input: AddShiftInput!) {
    addShift(input: $input) {
        id
        }
    }`;

export const listPayratesQuery = `
    query listPayrates {
        payrateList {
            id rate dates
            periodStart periodEnd
            holiday
            created
        }
    }`;
