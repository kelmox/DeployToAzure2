
const winnerlist = function(req, res){
    res.render('khlwinners',{
        winners:
        [
            {year:'08-09', team:'Ak Bars Kazan'},
            {year:'09-10', team:'Ak Bars Kazan'},
            {year:'10-11', team:'Salavat Yulaev Ufa'},
            {year:'11-12', team:'Dynamo Moscow'},
            {year:'12-13', team:'Dynamo Moscow'},
            {year:'13-14', team:'Metallurg Magnitogorsk'},
            {year:'14-15', team:'SKA Saint Petersburg'},
            {year:'15-16', team:'Metallurg Magnitogorsk'},
            {year:'16-17', team:'SKA Saint Petersburg'},
            {year:'17-18', team:'Ak Bars Kazan'},
        ]});
};
module.exports = {
    winnerlist
};