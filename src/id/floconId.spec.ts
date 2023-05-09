import { floconId } from "./floconId";

describe('floconId', () => {
  it('floconId 16 Hex', () => {
    for (let i = 0; i++; i < 10000) {
      const id = floconId();
      console.log(id);
      expect(id.length).toEqual(16);
    }
  });
});
