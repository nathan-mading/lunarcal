// const fs = require('fs')
// const path = require('path');
// const all_numbers = fs.readFileSync(path.resolve(__dirname, '../data/ascii-numbers.txt'), { encoding: 'utf8' }).split('\n');
// console.log(all_numbers);

const all_numbers = [
  ' _   ___   ____  _ _    ___    __  ____   ___   ___    __   ',
  '/ | |_  ) |__ / | | |  | __|  / / | __ | ( _ ) / _ \\  /  \\  ',
  '| |  / /   |_ \\ |_  _| |__ \\ / _ \\  / /  / _ \\ \\_, / | () | ',
  '|_| /___| |___/   |_|  |___/ \\___/ /_/   \\___/  /_/   \\__/  ',
  '                                                            ',
];

const INDEX_OFFETS = {
  1: [0, 4],
  2: [4, 10],
  3: [10, 16],
  4: [16, 23],
  5: [23, 29],
  6: [29, 34],
  7: [34, 41],
  8: [41, 47],
  9: [47, 53],
  0: [53, 60],
};

const getAsciiNumber = (number) => {
  const numstr = '' + number;
  const chars = numstr.split('');
  return all_numbers
    .map((l) => {
      const line =
        ' ' +
        chars
          .map((c) => {
            const idx = INDEX_OFFETS[c];
            return l.slice(idx[0], idx[1]);
          })
          .join('');
      return line;
    })
    .join('\n');
};

const ASCII_NUMBERS = [''];

// Pre-generates ASCII numbers in range 1-31
for (let i = 1; i <= 31; i++) {
  const asciiNumber = getAsciiNumber(i);
  ASCII_NUMBERS.push(asciiNumber);
}

export default ASCII_NUMBERS;
