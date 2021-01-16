import { usePrevious } from "./usePrevious";
import { renderHook } from "@testing-library/react-hooks";

describe("Hooks - usePrevious", () => {
  it("should return previous value", () => {
    // Arrange.
    let initialValue = 10;

    const { result, rerender } = renderHook(() => usePrevious(initialValue));

    // Act.
    initialValue = 5;
    rerender();

    // Assert.
    expect(result.current).toBe(10);

    // Act.
    initialValue = 8;
    rerender();

    // Assert.
    expect(result.current).toBe(5);
  });
});
