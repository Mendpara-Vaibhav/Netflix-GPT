export const checkValidData = (name, email, password) => {
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name !== null && name !== undefined && name.trim() === "") {
    return "Name is required for Sign Up";
  }
  // if (!isNameValid) return "Name is not valid";
  if (email === "") return "Email ID is required";
  if (!isEmailValid) return "Email ID is not valid";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!isPasswordValid)
    return "Password must include: A–Z, a–z, 0–9, and a symbol (!@#$%^&*)";

  return null;
};
