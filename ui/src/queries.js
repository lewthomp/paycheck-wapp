export const addShiftQuery = `
    mutation addShift($shift: AddShiftInput!) {
        addShift(shift: $shift) {
            id
        }
}`