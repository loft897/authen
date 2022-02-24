// const { info } = require("sass");
const info = document.querySelector('.info');
const textH1 = document.querySelector('.container h1');

const btnInscription = document.querySelector('.inscription');
const btnConnexion = document.querySelector('.connexion');
const btnDeco = document.querySelector('.deconnexion');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const passWInscription = document.querySelector('.pw-inscription');

const formConnexion = document.querySelector('.form-connexion');
const emailConnexion = document.querySelector('.email-connexion');
const passWConnexion = document.querySelector('.pw-connexion');


btnInscription.addEventListener('click', (e) => {
    e.preventDefault()

    if(formConnexion.classList.contains('apparition')){
        formConnexion.classList.remove('apparition');
    }

    formInscription.classList.toggle('apparition');
}) 


btnConnexion.addEventListener('click', (e) => {
    e.preventDefault()

    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }

    formConnexion.classList.toggle('apparition');
}) 

// INSCRIPTION

formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailInscrValeur = emailInscription.value;
    const pwInscrValeur = passWInscription.value;

    auth.createUserWithEmailAndPassword(mailInscrValeur, pwInscrValeur)
    .then(cred => {
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    });
});

// DECONNEXION

btnDeco.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        console.log('Deconnecté')
    });
});

// CONNEXION

formConnexion.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailConValeur = emailConnexion.value;
    const pwConValeur = passWConnexion.value;

    auth.signInWithEmailAndPassword(mailConValeur, pwConValeur)
    .then(cred => {
        console.log('Connecté', cred.user);
        formConnexion.reset();
        formConnexion.classList.toggle('apparition');
    });
});


// Gerer le contenu

auth.onAuthStateChanged(utilisateur => {
    if(utilisateur){
        info.innerText = "Voici le contenu privé"
        textH1.innerText = "Vous voilà de retour! :)"
    } else {
        console.log("Utilisateur s'est déconnecté(e)");
        info.innerText = "Contenu public.";
        textH1.innerText = "Bienvenue sur notre plateforme, inscrivez-vous ou connectez-vous!"
    };
});