const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });
});