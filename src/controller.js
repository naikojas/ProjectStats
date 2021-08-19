const sanitize = require('sanitize-html');
const github = require('../services/github').getRepo;

exports.search = (req,res) => {
    const searchQuery = sanitize(req.query.userQuery,{allowedAttributes: {}, allowedTags: []});
    //console.log(searchQuery);

    if(!searchQuery){
        return res.json({code: 0,message: `Please enter a valid Project Name`});
    }else{
        github(req,res,searchQuery);
    }
}

