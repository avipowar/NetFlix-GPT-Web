/* eslint-disable no-useless-escape */
export const checkFormValidation = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid)
    return "❌ Incorrect emailId. Please Enter The Valid Email Address.";
  if (!isPasswordValid)
    return "❌ Incorrect password. Please Enter The Valid Password.";

  return "";
};
