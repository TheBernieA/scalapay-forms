export const validateFiscalCode = async (value: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return value === "ABCDEF85S14F112Y";
};
