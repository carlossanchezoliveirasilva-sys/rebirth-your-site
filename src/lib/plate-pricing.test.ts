import { describe, expect, it } from "vitest";
import { calculatePlate } from "./plate-pricing";

describe("original plate estimates", () => {
  it.each([["1.2",1350],["1.5",1500],["2.0",1650],["3.0",1875],["4.76",2290]])("preserves %s mm rate", (thickness, rate) => {
    expect(calculatePlate(100,100,String(thickness))?.precoOriginal).toBe(rate);
  });
  it("converts centimeters to square meters", () => {
    expect(calculatePlate(100,50,"1.2")?.area).toBe(0.5);
  });
  it("preserves ten percent discount", () => {
    expect(calculatePlate(100,50,"1.2")).toEqual({ area: 0.5, precoOriginal: 675, desconto: 67.5, precoPromocional: 607.5 });
  });
  it.each([[0,50,"1.2"],[100,-1,"1.2"],[100,50,"unknown"]])("rejects invalid dimensions or thickness", (w,h,t) => {
    expect(calculatePlate(Number(w),Number(h),String(t))).toBeNull();
  });
});