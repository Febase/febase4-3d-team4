export default function getRandomRange (min:number, max:number) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }
  return (Math.random()) * (max - min) + min;
}

