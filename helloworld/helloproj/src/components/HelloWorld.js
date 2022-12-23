import { useState } from "react";

export default function Hello(props) {
  let [name, setName] = useState(props.name);
  let [phNum, setPhone] = useState(props.phone);
  let [mailId, setEmail] = useState(props.mail);

  function clickHandle() {
    setName("Puna");
    setPhone("345566");
    setEmail("Puna@mail.com");
  }

  return (
    <div>
      <div>{name}</div>
      <div>{phNum}</div>
      <div>{mailId}</div>
      <button onClick={clickHandle}>change</button>
    </div>
  );
}
