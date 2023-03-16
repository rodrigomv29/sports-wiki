const athlete = require('./Athlete');

class CombatAthlete extends athlete {
    constructor(sport, nickname="",agency="non-free"){
        super();
        this.sport = sport;
        this.nickname = nickname;
        this.agency = agency;
    }
    getSport(){
        return this.sport;
    }
    setSport(sport){
        this.sport = sport
    }
    getNickname(){
        return this.nickname;
    }
    setNickname(nickname){
        this.nickname = nickname;
    }
    getAgency(){
        return this.agency;
    }
    setAgency(){
        this.agency = agency;
    }
    isUndefeated(){
        return false;
    }
    isChampion(){
        return false;
    }

};
module.exports = CombatAthlete;
