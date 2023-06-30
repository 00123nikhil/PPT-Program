// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

function Permutation(s) {
    const n = s.length;
    let current = 0;
    let next = n;
    const perm = [];
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm.push(current);
        current++;
      } else if (s[i] === 'D') {
        perm.push(next);
        next--;
      }
    }
  
    perm.push(current);
  
    return perm;
  }
  
  const s = "IDID";
  const result = Permutation(s);
  console.log(result);
  