import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '@expo-google-fonts/playfair-display/PlayfairDisplay_400Regular.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_500Medium.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_600SemiBold.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_700Bold.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_800ExtraBold.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_900Black.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_400Regular_Italic.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_500Medium_Italic.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_600SemiBold_Italic.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_700Bold_Italic.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_800ExtraBold_Italic.ttf'
import '@expo-google-fonts/playfair-display/PlayfairDisplay_900Black_Italic.ttf'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  ,
  document.getElementById("root")
);

reportWebVitals();
