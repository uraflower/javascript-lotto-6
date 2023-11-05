import ERROR from './constants/error.js';
import LOTTO from './constants/lotto.js';
import CustomError from './errors/CustomError.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.size) {
      throw new CustomError(ERROR.lotto.invalidSize);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
