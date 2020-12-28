function BoardMember(name, homeState, training){
  BoardMember.prototype.veto=function(){
    return "No, I must disagree";
  }
  BoardMember.prototype.approve=function(){
    return "You can do that!";
  }
  BoardMember.prototype.doCharity=function(){
    return "I like to help people";
  }
}