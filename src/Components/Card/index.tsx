interface InfoCard {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: InfoCard) => (
  <div>
    <p>Nome:{name}</p>
    <p>Idade:{age}</p>
    <p>Hobby:{hobby}</p>
  </div>
);
