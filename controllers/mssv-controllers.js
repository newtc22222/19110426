const { mygroup } = require('../models/mygroup');
const { group14 } = require('../models/group14');

const mssvController = {
    addNewMember: (req, res, next) => {
        const id = Number(req.params.id);

        const exitsMember = mygroup.find(data => data.id === id);
        if (exitsMember)
            return res.json('Not valid');

        const newMember = group14.find((data) => data.id === id);
        if (newMember) {
            mygroup.push(newMember);
            return res.json(mygroup);        
        }
        else {
            return res.json('Not valid');
        }        
    },
    getMember: (req, res, next) => {
        const id = Number(req.params.id);

        const member = mygroup.find((data) => data.id === id);
        if (member) {
            return res.json(member);
        } 
        else {
            return res.json({ error: "Not Valid" });
        }
    },
};

module.exports = mssvController;