import React from "react";
import "../style/Popup.css";

export default function UpdateRecord({changeState, update, values}) {

  function clearInput(e) {
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].value="";
    e.target[3].value="";
  }

  function handleSubmit(e) {
    e.preventDefault();
      changeState.setName(e.target[0].value);
      changeState.setTime(e.target[1].value);
      changeState.setComp(e.target[2].value);
      changeState.setDescr(e.target[3].value);
      update(false);
      clearInput(e);
  }

  function handleChange(e) {
    if (e.target.name === "expName") {
      changeState.setName(e.target.value);
    }
    if (e.target.name === "time") {
      changeState.setTime(e.target.value);
    }
    if (e.target.name === "comp") {
      changeState.setComp(e.target.value);
    }
    if (e.target.name === "descr") {
      changeState.setDescr(e.target.value);
    }
  }
  return (
    <div className="popup">
      <div className="popup_inner">
      <form onSubmit={handleSubmit}>
        <label>edit experience name</label>
        <input name="expName" value={values.name} onChange={handleChange}/>
        <br/>
        <label>edit time</label>
        <input name="time" value={values.time} onChange={handleChange}/>
        <br/>
        <label>edit company</label>
        <input name="comp" value={values.comp} onChange={handleChange}/>
        <br/>
        <label>edit description</label>
        <input name="descr" value={values.descr} onChange={handleChange}/>
        <br/>
        <button>edit!</button>
      </form>
      <button onClick={() => update(false)}>Go back.</button>
      </div>
    </div>
  );
}