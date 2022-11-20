import './App.css';
import React, { useState } from 'react';
import { BioData } from './components/BioData';
import { BiodataTable } from './components/BiodataTable';

function App() {
  const Array = [
    {
      Id: "22DE01",
      FirstName: "John",
      LastName: "Doe",
      Email: "johndoe@example.com",
      Gender: "Male",
      Designation: "Design Engineer"
    }
  ]


  const [Biodata, setBiodata] = useState(Array)

  return (
    <div className="App container-fluid">
      <h2 className="heading">React Crud Operations</h2>
      <BioData Biodata={Biodata} setBiodata={setBiodata} />
      <hr className='divider' />
      <BiodataTable Biodata={Biodata} setBiodata={setBiodata} />
    </div>
  );
}

export default App;
