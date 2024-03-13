describe('Dummy test suite', () => {
    it("Dummy test 1 - to be passed", () => {
      expect(1).toBe(1);
    });

    it("Dummy test 2 - to be passed", () => {
        expect(2).toBe(2);
    });
  
    it("Dummy test 3 - to be failed", () => {
      expect(3).toBe(4);
    });
  })
