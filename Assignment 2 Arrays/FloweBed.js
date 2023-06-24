function FlowerCanPlace(flowerbed, n) {
  let count = 0;
  const length = flowerbed.length;

  for (let i = 0; i < length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(FlowerCanPlace(flowerbed, n));
