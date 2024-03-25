export const isEmail = (email: string): boolean => {
  // Declare the regex pattern
  const regexPattern: string =
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$";

  // Create a RegExp object
  const regex: RegExp = new RegExp(regexPattern);

  // Test the regex against a string
  return regex.test(email);
};

export const isPassword = (password: string): boolean => {
  // Declare the regex pattern
  const regexPattern: string =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_])[A-Za-z\\d@$!%*?&_]{8,}$";

  // Create a RegExp object
  const regex: RegExp = new RegExp(regexPattern);

  // Test the regex against a string
  return regex.test(password);
};
