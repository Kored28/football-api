const express = require('express');
const router = express.Router();

//controllers
const {getTeams, getTeam, createTeam, updateTeam, removeTeam} = require('../controllers/teams')

const {getPlayers, getPlayer, createPlayer, updatePlayer, removePlayer} = require('../controllers/players')

const {getCoaches, getCoach, createCoach, updateCoach, removeCoach} = require('../controllers/coaches')

// Teams
router.route('/teams').get(getTeams).post(createTeam)
router.route('/teams/:id').get(getTeam).patch(updateTeam).delete(removeTeam)

// Players
router.route('/teams/players').get(getPlayers).post(createPlayer)
router.route('/teams/players/:id').get(getPlayer).patch(updatePlayer).delete(removePlayer)

// Coaches
router.route('/teams/coaches').get(getCoaches).post(createCoach)
router.route('/teams/coaches/:id').get(getCoach).patch(updateCoach).delete(removeCoach)

module.exports = router