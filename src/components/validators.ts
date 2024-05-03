export const isEmail = (email: string | undefined): boolean => {
  /////////// Declare the regex pattern
  const regex: RegExp =
    /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  /////////// Test the regex against a string
  return typeof email == "string" ? regex.test(email) : false;
};

export const isPassword = (password: string | undefined): boolean => {
  // Declare the regex pattern
  const regexPattern: string =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_])[A-Za-z\\d@$!%*?&_]{8,}$";

  // Create a RegExp object
  const regex: RegExp = new RegExp(regexPattern);

  // Test the regex against a string
  return typeof password == "string" ? regex.test(password) : false;
};
