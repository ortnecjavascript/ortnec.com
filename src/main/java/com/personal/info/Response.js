function Response(){
    var amount = amount;
    var bonuses = bonuses;
    this.getBonuses = function(){
        return bonuses;
    };
    this.getAmount = function(){
        return amount;
    };
    this.setBonuses = function(bonuses){
        this.bonuses = bonuses;
    };
    this.setAmount = function(amount){
        this.amount = amount;
    };
}