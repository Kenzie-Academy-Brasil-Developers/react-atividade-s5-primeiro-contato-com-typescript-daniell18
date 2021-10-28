import "./App.css";
import { useState } from "react";
import { Card } from "./Components/Card";
import { Input } from "./Components/Ipunt";
interface Person {
  name: string;
  hobby: string;
  age: number;
}
function App() {
  const [list, setList] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const handleSubmit = (name: string, hobby: string, age: number) => {
    if (!isTrue) {
      setIsTrue(true);
    }

    const person = { name, hobby, age };
    setList([...list, person]);
  };

  return (
    <div className="App">
      {!isTrue ? (
        <div className="Input">
          <Input
            placeholder="Nome"
            label="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Idade"
            label="Idade"
            onChange={(e) => setAge(Number(e.target.value))}
          />
          <Input
            placeholder="Hobby"
            label="Hobby"
            onChange={(e) => setHobby(e.target.value)}
          />

          <button onClick={() => handleSubmit(name, hobby, age)}>Enviar</button>
        </div>
      ) : (
        <div className="Input">
          <Card name={name} age={age} hobby={hobby} />

          <button onClick={() => setIsTrue(false)}>Voltar</button>
        </div>
      )}
    </div>
  );
}

export default App;
