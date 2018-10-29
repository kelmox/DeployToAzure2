
const winnerlist = function(req, res){
    res.render('khlscorer',{
        scorer:
        [
            {year:'08-09', player:'Sergei Mozyakin', team: 'Atlant'},
            {year:'09-10', player:'Sergei Mozyakin', team: 'Atlant'},
            {year:'10-11', player:'Alexandr Radulov', team: 'Salavat Yulaev'},
            {year:'11-12', player:'Alexandr Radulov', team: 'Salavat Yulaev'},
            {year:'12-13', player:'Sergei Mozyakin', team: 'Metallurg'},
            {year:'13-14', player:'Sergei Mozyakin', team: 'Metallurg'},
            {year:'14-15', player:'Alexandr Radulov', team: 'CSKA'},
            {year:'15-16', player:'Sergei Mozyakin', team: 'Metallurg'},
            {year:'16-17', player:'Sergei Mozyakin', team: 'Metallurg'},
            {year:'17-18', player:'Ilya Kovalchuk', team: 'SKA'}
        ]});
};

module.exports = {
    winnerlist
};