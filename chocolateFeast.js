// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(cash, cost, promo) {
  let wrapperCount = Math.floor(cash / cost);
  let chocolateBars = wrapperCount;
  while (wrapperCount >= promo) {
    chocolateBars += Math.floor(wrapperCount / promo);
    wrapperCount = Math.floor(wrapperCount / promo) + (wrapperCount % promo);
  }
  return chocolateBars;
}

chocolateFeast(6, 2, 2);