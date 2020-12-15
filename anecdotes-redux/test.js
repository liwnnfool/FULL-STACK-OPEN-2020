const foo = [
  {
    id: 1,
    votes: 12
  },
  {
    id: 2,
    votes: 23
  },
  {
    id: 3,
    votes:9
  }
]

function compare(a,b) {
  if (a.votes > b.votes) return 1
  else return -1
}

foo.sort((a, b) => a.votes > b.votes ? 1 : -1)

console.log(foo)