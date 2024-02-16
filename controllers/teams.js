
// GET 
const getTeams = (req, res) => {
    res.send('this are the list of the teams')
}

const getTeam = (req, res) => {
    res.send('this are the list of the team')
}

// POST
const createTeam = (req, res) => {
    res.send('Team created')
}

//PATCH
const updateTeam = (req, res) => {
    res.send('Team update')
}

//DELETE
const removeTeam = (req, res) => {
    res.send('Team deleteed')
}

module.exports = {
    getTeams, getTeam, createTeam, updateTeam, removeTeam 
}