const combatathlete = require('./CombatAthlete')
class Boxer extends combatathlete {
    constructor(stance, style="technical"){
        super();
        this.stance = stance;
        this.style = style;

    }
    getStance(){
        return this.stance;
    }
    setStance(stance){
        this.stance = stance;
    }
    getStyle(){
        return this.style;
    }
    setStyle(style){
        this.style = style;
    }

}
module.exports = Boxer;