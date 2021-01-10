import MockDate from "mockdate";
const FRAME_TIME = 10;

export const setupTimeTravel = () => {
  global.requestAnimationFrame = (callback) => {
    setTimeout(callback, FRAME_TIME);
    return 0;
  };

  MockDate.set(0);
  // eslint-disable-next-line no-undef
  jest.useFakeTimers();
};

export const advanceOneFrame = () => {
  const now = Date.now();
  MockDate.set(new Date(now + FRAME_TIME));

  // eslint-disable-next-line no-undef
  jest.advanceTimersByTime(FRAME_TIME);
};

export const timeTravel = (msToAdvance = FRAME_TIME) => {
  const numberOfFramesToRun = msToAdvance / FRAME_TIME;
  let framesElapsed = 0;

  // Step through each of the frames until we've ran them all
  while (framesElapsed < numberOfFramesToRun) {
    advanceOneFrame();
    framesElapsed += 1;
  }
};
