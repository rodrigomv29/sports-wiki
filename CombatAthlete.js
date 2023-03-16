const athlete = require('./Athlete');

class CombatAthlete extends athlete {
    constructor(sport, agency="non-free"){
        super();
        this.sport = sport;
        this.agency = agency;
    }
    getSport(){
        return this.sport;
    }
    setSport(sport){
        this.sport = sport
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
