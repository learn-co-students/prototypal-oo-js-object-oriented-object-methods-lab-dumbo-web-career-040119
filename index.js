function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState =homeState;
  this.training = training;
}

  veto() {
    this.veto = function(){
      return 'No, I must disagree'
    }
  approve() {
    this.approve = function() {
      return 'You can do that!'
    }
  }
  doCharity() {
    this.doCharity = function() {
      return 'I like to help people.'
    }
  }
  releasePressStatement() {
    this.releasePressStatement = function() {
      return 'You will see great things from Scuber.'
    }
  }
  sayHi() {
    this.sayHi = function() {
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was training in ${this.training}.`
    }
  }
  }
