// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!mapS.has(sChar) && !mapT.has(tChar)) {
      mapS.set(sChar, tChar);
      mapT.set(tChar, sChar);
    } else if (mapS.get(sChar) !== tChar || mapT.get(tChar) !== sChar) {
      return false;
    }
  }

  return true;
}


const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);
console.log(result);
