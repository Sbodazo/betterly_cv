import React, { useState } from "react";
import UpdateRecord from "./UpdateRecord";

export default function PrivateComponent({ changeState, values }) {

  const [update, setUpdate] = useState(false);

  function updateField() {
    setUpdate(!update);
  }

  function deleteField() {
    changeState.setName("");
    changeState.setTime("");
    changeState.setComp("");
    changeState.setDescr("");
  }


  return (
    
    <div>
      <button onClick={updateField} value={update}>UPDATE</button>
      {update ? <UpdateRecord changeState={changeState} update={setUpdate} values={values}/>: null}
      <button onClick={deleteField}>DELETE</button>
    </div>
  
  );
}