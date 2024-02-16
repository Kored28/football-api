const getPlayers = (req, res) => {
    res.send('this are the list of the teams')
}

const getPlayer = (req, res) => {
    res.send('this are the list of the team')
}

// POST
const createPlayer = (req, res) => {
    res.send('Team created')
}

//PATCH
const updatePlayer = (req, res) => {
    res.send('Team update')
}

//DELETE
const removePlayer = (req, res) => {
    res.send('Team deleteed')
}

module.exports = {
    getPlayers, getPlayer, createPlayer, updatePlayer, removePlayer 
}