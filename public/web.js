document.addEventListener("DOMContentLoaded", event=> {
    const web = firebase.app();
    console.log(web)
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user)
        })
        .catch(console.log)
}

/*function uploadFile(files){
    const storageRef = firebase.storage().ref();
    const horseRef = storageRef.child('horse.jpg');
    const file = files.item(0);
    const task = horseRef.put(file)
    task.then(snapshot =>{
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAttribute('src', url)
    })
}*/