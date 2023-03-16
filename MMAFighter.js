const combatathlete = require('./CombatAthlete');
class MMAFighter extends combatathlete{
    constructor(promotion, specialty='freestyle'){
        super();
        this.promotion = promotion;
        this.specialty = specialty;
    }
    getPromotion(){
        return this.promotion;
    }
    setPromotion(promotion){
        this.promotion = promotion;
    }
    getSpecialty(){
        return this.specialty;
    }
    setSpecialty(specialty){
        this.specialty = specialty;
    }
}