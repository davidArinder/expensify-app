// Text Filter action generator
export const setTextFilter = (text = '') => ({
    type: 'EDIT_DESCRIPTION',
    text
})

// Sort By Amount action generator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// Sort By Date action generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Set Start Date action generator
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// Set End Date action generator
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})