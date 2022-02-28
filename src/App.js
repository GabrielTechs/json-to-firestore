import './App.css';

import {projectFirestore} from "./firebase/config"
import {
  collection,
  addDoc,
} from "@firebase/firestore";

const example = [
  {
    "name": "Aatrox",
    "championId": "TFT5_Aatrox",
    "cost": 1,
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/tft-party-dev.appspot.com/o/champions%2FTFT5_Aatrox.png?alt=media&token=6f9a4036-1b9c-4390-a540-d59604af8595",
    "traits": [
      "Set5_Redeemed",
      "Set5_Legionnaire"
    ]
  },
  {
    "name": "Aphelios",
    "championId": "TFT5_Aphelios",
    "cost": 4,
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/tft-party-dev.appspot.com/o/champions%2FTFT5_Aphelios.png?alt=media&token=47695830-fbfe-45e0-9834-f8046cd862b3",
    "traits": [
      "Set5_Nightbringer",
      "Set5_Ranger"
    ]
  },
  {
    "name": "Ashe",
    "championId": "TFT5_Ashe",
    "cost": 3,
    "imgUrl": "https://firebasestorage.googleapis.com/v0/b/tft-party-dev.appspot.com/o/champions%2FTFT5_Ashe.png?alt=media&token=5929297a-05fe-47e7-a790-715ae9024983",
    "traits": [
      "Set5_Verdant",
      "Set5_Draconic",
      "Set5_Ranger"
    ]
  }
]

const uploadJsonHandler = () =>{
    addDoc(collection(projectFirestore,"products"),{
      name: "products",
      products: example
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    alert("files uploaded")
}

function App() {
  return (
    <div className="App">
      <h1>json to firebase firestore</h1>
      <button onClick={uploadJsonHandler} >Upload json</button>
    </div>
  );
}

export default App;
