import React from 'react';
import Card from './components/card';

function App(){
  return <div>
    <h1 className='headingStyle'>To Do App</h1>
    <Card titleText = "I'm Title One." disText = "I'm discription text one." />
    <Card titleText = "I'm Title Two." disText = "I'm discription text two." />
    <Card titleText = "I'm Title Three." disText = "I'm discription text three." />
    <Card titleText = "I'm Title Four." disText = "I'm discription text four." />
  </div>
}

export default App;