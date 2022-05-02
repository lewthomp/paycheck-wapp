export const addShiftQuery = `mutation addshift($input: AddShiftInput!) {
    addShift(input: $input) {
        id
    }
}`;