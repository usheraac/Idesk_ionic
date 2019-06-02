import * as firebase from 'firebase';

export class AuthService{


  isAuth = false;  //boolean lié à l'état d'authentificatio retourné par Firebase

  constructor(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else{
        this.isAuth = false;
      }
    });
  }

  // methode pour la creation d'un nouvel User
  signUpUser(email: string, password: string) {
    //return une promise qui appel la methode auth et permet la creation d'un user et renvois le user si l'authentification se passe bien ou une erreur
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (user)=>{
            resolve(user)
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

//connexion d'un  User
  signInUser(email: string, password: string) {
    //return une promise qui appel la methode auth et permet la connexion d'un user et connecte le user ou retourne une erreur
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user)=>{
            resolve(user)
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOut() {
    firebase.auth().signOut();
  }


}
