import { Console } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import Lotto from './Lotto.js';

class GameController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async play() {
    await this.getMoney();
    this.createLottos();
    this.printLottoInfo();
    await this.getWinningNumbers();
    await this.getBonusNumbers();
  }

  async getMoney() {
    while (true) {
      try {
        const money = await InputView.inputMoney();
        this.#lottoMachine.insertMoney(money);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  createLottos() {
    while (true) {
      try {
        this.#lottoMachine.createLottos();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  printLottoInfo() {
    OutputView.printLineBreak();
    OutputView.printNumberOfLottos(this.#lottoMachine.numberOfLottos);
    OutputView.printLottos(this.#lottoMachine.lottos);
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumber = await InputView.inputWinningNumbers();
        const winningLotto = new Lotto(winningNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumbers() {
    while (true) {
      try {
        const bonusNumber = await InputView.inputBonusNumber();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default GameController;
