import './App.css';

import {projectFirestore} from "./firebase/config"

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
  }
]

const uploadJsonHandler = () =>{
  example.map((champion)=>{
    return projectFirestore.collection("champions").add({
      "name": champion.name,
      "championId": champion.championId,
      "cost": champion.cost,
      "imgUrl": champion.imgUrl,
      "traits": champion.traits
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  })
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
