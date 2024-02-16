const getCoaches = (req, res) => {
    res.send('this are the list of the teams')
}

const getCoach = (req, res) => {
    res.send('this is the coach')
}

// POST
const createCoach = (req, res) => {
    res.send('Team created')
}

//PATCH
const updateCoach = (req, res) => {
    res.send('Team update')
}

//DELETE
const removeCoach = (req, res) => {
    res.send('Team deleteed')
}

module.exports = {
    getCoaches, getCoach, createCoach, updateCoach, removeCoach 
}