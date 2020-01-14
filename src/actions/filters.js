// Text Filter action generator
export const setTextFilter = (text = '') => ({
    type: 'EDIT_DESCRIPTION',
    text
})

// Sort By Date action generator
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Sort By Amount action generator
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// Set Start Date action generator
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// Set End Date action generator
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})