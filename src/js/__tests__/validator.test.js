import Validator from '../app';

const rightTestCase = [
  {
    testInput: 'Gendalf',
    testName: 'только буквы',
  },
  {
    testInput: 'Hope90kk',
    testName: 'буквы и цифры',
  },
  {
    testInput: 'Sweety90_60-90kk',
    testName: 'буквы + цифры + символы',
  },
];

const unRightTestCase = [
  {
    testInput: 'Sky&',
    testName: 'неразрешенные символы',
  },
  {
    testInput: 'Love9999forever',
    testName: 'подряд более трёх цифр',
  },
  {
    testInput: '1Love',
    testName: 'цифра в начале',
  },
  {
    testInput: 'Love1',
    testName: 'цифра в конце',
  },
  {
    testInput: '_Love',
    testName: 'символ подчеркивания в начале',
  },
  {
    testInput: 'Love_',
    testName: 'символ подчеркивания в конце',
  },
  {
    testInput: '-Love',
    testName: 'символ тире в начале',
  },
  {
    testInput: 'Love-',
    testName: 'символ тире в конце',
  },
];

describe('Check validateUsername', () => {
  test.each(rightTestCase)(
    ('Правильный результат №%# : %p'),
    ({ testInput }) => expect(Validator.validateUsername(testInput)).toBeTruthy(),
  );

  test.each(unRightTestCase)(
    ('Неверный результат №%# : %p'),
    ({ testInput }) => expect(Validator.validateUsername(testInput)).toBeFalsy(),
  );
});
