import firebase from '../config/firebase';
import usersJSON from '../mock/users.json';

async function login(email, password) {
  let userId;
  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      userId = user.uid
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  return userId;
}


export async function useAuth(email, password) {

  //const [user] = usersJSON.filter(user => user.cpf === cpf && user.password === password)
  //console.log(user)
  const context = await login(email, password);
  return context;
}