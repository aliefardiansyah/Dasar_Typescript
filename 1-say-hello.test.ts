import { sayHello } from "./1-say-hello";
describe("sayHello", function () {
  it("harus mengembalikan hello alief", function () {
    expect(sayHello("alief")).toBe(`Hello alief`);
  });
  it("harus mengembalikan hello ardi salah", function () {
    expect(sayHello("alief")).toBe(`Hello alief`);
  });
});
