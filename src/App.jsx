// Imports
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import "./App.css";
import kelvinToCelsius from 'kelvin-to-celsius';
// ...

const App = () => {
  const [result, setResult] = useState({main:{}})

  function push() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=de9ddf67504f64bc6826beba0df4bb42")
    .then(response => response.json())
    .then(result => setResult(result))
  }
  return (
    <div className="container">
      <div className="textfield">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color="success" />
      </div>
      <div className="button">
        <Button variant="contained" onClick={push}>Contained</Button>
      </div>
      <div className='alert'>
        <Alert severity='info'>{kelvinToCelsius(result.main.temp || 273.15)}</Alert>
      </div>
      <div>
        <Alert severity='info'>{result.name}</Alert>
      </div>
    </div>
  );
}

export default App;
