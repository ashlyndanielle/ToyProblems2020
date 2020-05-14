// https://www.hackerrank.com/challenges/halloween-sale/problem


function howManyGames(price, discount, min, cash) {
  // Return the number of games you can buy
  // set a count to be 0
  // before purchase
  // * check that price < cash
  // for each game you purchase
  // * increase count by 1
  // * subtract price from cash
  // * check that price - discount > min OR set price to min
  let gamesBought = 0;
  while (price <= cash) {
    gamesBought++;
    cash -= price;
    price - discount >= min ? price -= discount : price = min;
  }
  return gamesBought;
}

// howManyGames(20, 3, 6, 80);
howManyGames(16, 2, 1, 9981);