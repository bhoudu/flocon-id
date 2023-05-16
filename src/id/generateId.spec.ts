import { generateId } from "./generateId";
import pino from 'pino'

const logger = pino({
  level: 'trace'
})

logger.trace('trace message')
logger.debug('debug message')
logger.debug('info message')
logger.debug('warn message')
logger.debug('error message')
logger.debug('fatal message')

describe('generateId', () => {

  // https://youtrack.jetbrains.com/issue/WEB-56757
  it('generateId 16 Hex', () => {
    logger.info("HELLO1");
    for (let i = 0; i < 10000; i++) {
      const id = generateId();
      logger.info('eeee' + id);
      expect(id.length).toEqual(16);
      if (i == 5) {
        logger.info("HELLO")
        //throw new Error();
      }
    }
  });
});
