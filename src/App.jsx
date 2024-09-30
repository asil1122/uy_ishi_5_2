import React from 'react'
import { Card } from "./components/card";
import { Form } from "./components/form";

function App() {
  const [state, setState] = React.useState([])

  return (
    <div className="block">
    <Form setData={setState} />
    {state.map((item) => {
      return (
        <Card
          key={item.id}
          setData={setState}
          id={item.id}
          name={item.userName}
        />
      );
    })}
  </div>
  )
}

export default App
