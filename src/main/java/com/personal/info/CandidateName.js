CandidateName = {
    name : "Deniss",
    position : "JavaScript developer ortnec.com",
    email : "filipovs.deniss@gmail.com",
//все сделанно на коленке
    getName : function(){
        return this.name;
    },
    getPosition : function(){
        return this.position;
    },
    getEmail : function(){
        return this.email;
    },
    getAll : function(){
      return [CandidateName.getName(), CandidateName.getPosition(), CandidateName.getEmail()]
    }
};