class Traveler{
    constructor(name){
        this.name = name;
    }
    food = 1;
    isHealthy = true;
    hunt(){this.food+=2}
    eat(){
        if(!this.food){this.isHealthy=false;
        }else{this.food--;}
    }
}
class Wagon{
    constructor(cap){
        this.capacity = cap;
    }
    passengers = [];
    getAvailableSeatCount(){
        return this.capacity-this.passengers.length;
    }
    join(traveler){
        if(this.passengers.length<this.capacity){
            this.passengers.push(traveler);
        }
    }
    shouldQuarantine(){
        let notHealthy = false;
        for(let i=0;i<this.passengers.length;i++){
            if(!this.passengers[i].isHealthy){
                notHealthy = true;
            }
        }
        return notHealthy;
    }
    totalFood(){
        let total = 0;
        for(let i=0;i<this.passengers.length;i++){
            total += this.passengers[i].food;
        }
        return total;
    }
}