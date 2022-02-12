const express = require("express");
const router = express.Router();
const {getAllCrewMembers,addCrewMember,deleteMember,updateCrewMember} = require('../controllers/CrewMember');
const {getAllShips,
    postShip,
    updateShip,
    deleteShip,
    searchShip} = require('../controllers/Ship');




//crewMember
router.get('/get_all_crewMembers',getAllCrewMembers);
router.post('/post_crewMember',addCrewMember);
router.put('/update_crewMember/:id',updateCrewMember);
router.delete('/delete_crewMember/:id',deleteMember);


//ship
router.get('/get_all_ships',getAllShips);
router.post('/post_ship',postShip);
router.put('/update_ship/:id',updateShip);
router.delete('/delete_ship/:id',deleteShip);
router.get('/searchShip',searchShip);


module.exports = router;