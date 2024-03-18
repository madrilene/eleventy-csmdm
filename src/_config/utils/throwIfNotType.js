/** throw an error if the provided argument is not of the expected. */
export const throwIfNotType = (arg, expectedType) => {
  if (typeof arg !== expectedType) {
    throw new Error(
      `Expected argument of type ${expectedType} but instead got ${arg} (${typeof arg})`
    );
  }
};
