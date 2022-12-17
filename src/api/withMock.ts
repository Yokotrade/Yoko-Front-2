export const withMock = process.env.WITH_MOCK === "true";

export const withMockReturnValue = <T>(mock: T, delay?: number) => {
  return new Promise<T>((resolve) =>
    setTimeout(() => resolve(mock), delay || 0)
  );
};
