export const validateData = (email, password, name) => {
  const isEmailValid = /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi.test(email);
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,20}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
  if (!isNameValid) return "Please enter valid name";
  else if (!isEmailValid) return "Please enter a valid email or phone number.";
  else if (!isPassValid) return "Your password must contain between 4 and 60 characters.";
  return null;
};
