import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([
      createUser(),
      uploadPhoto(),
    ]);
    console.log(results);
    console.log(
      `${results[1].body} ${results[0].firstName} ${results[0].lastName}`,
    );
  } catch (error) {
    console.error('Signup system offline');
  }
}
