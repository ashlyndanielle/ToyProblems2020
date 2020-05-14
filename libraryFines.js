// https://www.hackerrank.com/challenges/library-fine/problem

function libraryFine(rd, rm, ry, dd, dm, dy) {
  const returnedOn = new Date(ry, rm, rd);
  const dueOn = new Date(dy, dm, dd);
  const returnBeforeDue = returnedOn <= dueOn;
  if (returnBeforeDue) return 0;
  if (ry > dy) return 10000;
  if (rm > dm) return (rm - dm) * 500;
  if (rd > dd) return (rd - dd) * 15;
}