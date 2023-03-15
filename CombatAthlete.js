const athlete = require('./Athlete');

class CombatAthlete extends athlete {
    constructor(sport, style="technical"){
        super();
        this.sport = sport;
        this.style = style;
    }
    getSport(){
        return this.sport;
    }
    setSport(sport){
        this.sport = sport
    }
    getStyle(){
        return this.style;
    }
    setStyle(){
        this.style = style;
    }
    isUndefeated(){
        return false;
    }
    isChampion(){
        return false;
    }

}