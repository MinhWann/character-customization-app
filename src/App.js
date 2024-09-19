import { useState } from "react"

import Section from './componenets/Section';
import Avatar from "./componenets/Avatar";

import './App.css';


const imagePaths = (folder, count) => {
  return Array.from({ length: count }, (_, index) => `/character/${folder}/${index + 1}.png`);
};
const imagePaths2 = (folder, count) => {
  return Array.from({ length: count }, (_, index) => `/character/accessories/${folder}/${index + 1}.png`);
};
const imagePaths3 = (folder, count) => {
  return Array.from({ length: count }, (_, index) => `/character/clothes/${folder}/${index + 1}.png`);
};

const BODY = imagePaths("body", 17);
const EYES = imagePaths("eyes", 24);
const HAIR = imagePaths("hair", 73);
const MOUTH = imagePaths("mouths", 24);
const EYEBROWS = imagePaths("eyebrows", 15);
const GLASSES = imagePaths2("glasses", 17);
const CLOTHING_L1 = imagePaths3("layer_1", 5);
const CLOTHING_L2 = imagePaths3("layer_2", 5);
const CLOTHING_L3 = imagePaths3("layer_3", 9);


function App() {
  const [body, setBody] = useState("")
  const [eyes, setEyes] = useState("")
  const [hair, setHair] = useState("")
  const [mouth, setMouth] = useState("")
  const [eyebrows, setEyeBrows] = useState("")
  const [glasses, setGlasses] = useState("")
  const [clothingL1, setClothingL1] = useState("")
  const [clothingL2, setClothingL2] = useState("")
  const [clothingL3, setClothingL3] = useState("")

  return (
    <div className="App">
      <div className="title">Character Customization</div>
      <div className="divider"></div>
      <div className="main-content gap">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar-section">
              <Avatar 
                body={body} 
                eyes={eyes} 
                hair={hair} 
                mouth={mouth} 
                eyebrows={eyebrows} 
                glasses={glasses}
                clothingL1={clothingL1}
                clothingL2={clothingL2}
                clothingL3={clothingL3} 
              />
            </div>
          </div>
        </div>
        <div className="item-section">         
          <Section title="Body" list={BODY} selectedValue={body} onSelect={(imageUrl) => setBody(imageUrl)} className="imageHeight1" />
          <Section title="Eyes" list={EYES} selectedValue={eyes} onSelect={(imageUrl) => setEyes(imageUrl)} className="imageHeight2" /> 
          <Section title="Hair" list={HAIR} selectedValue={hair} onSelect={(imageUrl) => setHair(imageUrl)} className="imageHeight1" />          
          <Section title="Mouth" list={MOUTH} selectedValue={mouth} onSelect={(imageUrl) => setMouth(imageUrl)} className="imageHeight4" />          
          <Section title="Eyebrows" list={EYEBROWS} selectedValue={eyebrows} onSelect={(imageUrl) => setEyeBrows(imageUrl)} className="imageHeight1" />    
          <Section title="Glasses" list={GLASSES} selectedValue={glasses} onSelect={(imageUrl) => setGlasses(imageUrl)} className="imageHeight1" />                
          <Section title="ClothingL1" list={CLOTHING_L1} selectedValue={clothingL1} onSelect={(imageUrl) => setClothingL1(imageUrl)} className="imageHeight1" />          
          <Section title="ClothingL2" list={CLOTHING_L2} selectedValue={clothingL2} onSelect={(imageUrl) => setClothingL2(imageUrl)} className="imageHeight1" />          
          <Section title="ClothingL3" list={CLOTHING_L3} selectedValue={clothingL3} onSelect={(imageUrl) => setClothingL3(imageUrl)} className="imageHeight3" />          
        </div>
      </div>
    </div>
  );
}

export default App;
