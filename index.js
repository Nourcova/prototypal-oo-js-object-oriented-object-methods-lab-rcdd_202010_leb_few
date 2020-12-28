function BoardMember(name, homeState, training){
  BoardMember.prototype.veto=function(){
    return "No, I must disagree";
  }
  BoardMember.prototype.approve=function(){
    return "You can do that!";
  }
  BoardMember.prototype.doCharity=function(){
    return "I like to help people.";
  }
  BoardMember.prototype.releasePressStatment= function(){
    return "You will see great things from Scuber."
  }
  BoardMember.prototype.sayHi=function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${training}`
  }
}