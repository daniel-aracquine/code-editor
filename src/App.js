import { useState } from 'react'
import EditorWindow from "./components/EditorWindow";
import LanguageSelect from "./components/LanguageSelect";
import ThemeSelect from "./components/ThemeSelect";
import CustomInput from "./components/CustomInput";

import { defineTheme } from "./lib/defineTheme"

import {languages} from './constants/languages'

function App() {
  const [language, setLanguage] = useState(languages[0]);
  const [theme, setTheme] = useState({
        label: "VS-Dark",
        value: "vs-dark",
        key: "vs-dark"
  });
  const[customInput, setCustomInput] = useState("")


  const onLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  }

  const onThemeChange = async (selectedTheme) => {
    if( !(["light", "vs-dark"].includes(selectedTheme.value)) ) {
      await defineTheme(selectedTheme)
    }
    setTheme(selectedTheme);
  }

  const onCustomInputChange = (input) => {
    setCustomInput(input);
  }

  const compileAndRun = () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'af7f87f172msha61d31b3fdef27cp1caf6ajsna35e05d6c1b8',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: '{"language_id":52,"source_code":"I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=","stdin":"SnVkZ2Uw"}'
    };
    
    fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <ThemeSelect 
        onChange={onThemeChange}
        theme={theme}
      />
      <LanguageSelect 
        onChange={onLanguageChange}
      />
      <EditorWindow 
        language={language.value}
        theme={theme.value}
      />
      <CustomInput 
        customInput={customInput}
        onChange={onCustomInputChange}
      />
      <button onClick={compileAndRun}>
        Compile and Run
      </button>
    </div>
  );
}

export default App;
