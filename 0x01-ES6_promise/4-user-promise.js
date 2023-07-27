export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({
      firstname: firstName,
      lastname: lastName,
    });
  });
}
