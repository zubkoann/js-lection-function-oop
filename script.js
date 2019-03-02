
  //1. Реализовать ф-цию sum которая принимает любое кол-во аргументов и возвращает сумму всех аргументов
  function sum() {
    let result = 0;
    for (i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  // TEST
  // console.log(sum(12, 4, 2, 3))
  // console.log(sum(4, 2, 3))

  //2. Реализовать memoization - функцию
  function multiply(x, y) {
    return x * y;
  };

  function memoization(fn) {
    const cache = {};
    let fnName = fn.name;
    return function (args) {
      let argArr = Array.from(arguments);
      let argString = Array.from(arguments).join('');
      let key = JSON.stringify(fnName + argString);
      if (key in cache) {
        console.log('взято из кеша');
        return cache[key];
      } else {
        console.log('вычислено');
        let result = fn.apply(null, argArr);
        cache[key] = result;
        return result;
      }
    };
  }
  // TEST
  // const memSum = memoization(sum);
  // const memMyltiply = memoization(multiply);
  // console.log(memSum(4, 1));
  // console.log(memSum(4, 1));
  // console.log(memSum(4, 1));
  // console.log(memSum(4, 1));
  // console.log(memSum(5, 1));
  // console.log(memSum(9, 1));
  // console.log(memMyltiply(1, 2));
  // console.log(memMyltiply(6, 2));
  // console.log(memMyltiply(5, 2));
  // console.log(memMyltiply(1, 2));

  //3. Game
  const atackType = ['strikeWeapons', 'cuttingWeapons', 'withoutWeapons', 'magic'];
  const atackMethod = ['headblow', 'throw'];
  const strenthatackMethod = [2, 1];

  class Warior {
    constructor(name, atackType, atackMethod, hp) {
      this.name = name;
      this.atackType = atackType;
      this.atackMethod = atackMethod;
      this.hp = hp;
    }
  }
  class Monster extends Warior {
    constructor(name, atackType, atackMethod, hp) {
      super(name, atackType, atackMethod, hp);
    }
  }

  class Gladiator extends Warior {
    constructor(name, atackType, atackMethod, hp) {
      super(name, atackType, atackMethod, hp);
    }
  }

  class Game {
    constructor(gladiator, monster) {
      this.gladiator = gladiator;
      this.monster = monster;
      this.winner = 'Friendship wins!';
      this.start=this.start.bind(this);
    }

    start() {
      function getRandomInt(min, max) {
        return Math.ceil(Math.random() * (max - min)) + min;
      };
      do{
        let atackMonster = getRandomInt(0, 10);
        let atackGladiator = getRandomInt(0, 10);
        this.gladiator.hp -= atackMonster*strenthatackMethod[getRandomInt(0, 2)-1];
        this.monster.hp -= atackGladiator*strenthatackMethod[getRandomInt(0, 2)-1];

      } while (this.gladiator.hp>0 && this.monster.hp>0);

      if(this.monster.hp>this.gladiator.hp){
        this.winner=this.monster.name;
      }else if(this.monster.hp<this.gladiator.hp){
        this.winner=this.gladiator.name;
      }
    }
  }
  // TEST
  const gladiator = new Gladiator('Spartak', atackType[1], atackMethod, 100);
  const monster = new Monster('Deth', atackType[0], atackMethod, 100);
  const game = new Game(gladiator, monster);
  game.start();
  console.log(game.winner);







