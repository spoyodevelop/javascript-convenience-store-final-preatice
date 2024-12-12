import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  displayWelcomeMessage() {
    this.printMessage('숫자 야구 게임을 시작합니다.');
  },
  displayBallStrike(ball, strike) {
    let ballString = '';
    let strikeString = '';
    if (ball > 0) {
      ballString += `${ball}볼`;
    }
    if (strike > 0) {
      strikeString += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) this.printMessage('낫싱');
    if (ball === 0 && strike > 0) this.printMessage(`${strikeString}`);
    else this.printMessage(`${ballString} ${strikeString}`);
  },
  displayWinningMessage() {
    this.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
};

export default OutputView;
