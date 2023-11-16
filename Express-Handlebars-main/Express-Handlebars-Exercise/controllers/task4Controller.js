const controller = {};
let {zodiacs} = require("../data");
controller.show = (req, res) => {
    
    res.locals.zodiacs = zodiacs;
    res.render("task4");
};
controller.showDetail = (req,res) => {
    let zodiac=zodiacs.filter((item)=>item.name == req.params.name)[0];
    res.render("task4-details",{zodiac});
}
module.exports = controller;