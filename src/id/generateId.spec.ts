import { generateId } from "./generateId";

describe('generateId', () => {
  it('generateId 16 Hex', () => {
    for (let i = 0; i < 10000; i++) {
      const id = generateId();
      // console.log(id);
      expect(id.length).toEqual(16);
    }
  });
});
