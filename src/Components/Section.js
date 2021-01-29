import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import Field from "./Field";

export default function Section({title, fields}) {
  const { login } = useContext(AuthContext);
  const newFields = fields.filter(sample => sample.fields.type === title);
  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      {newFields && newFields.map(field => <Field key={field.sys.id} field={field}/>)}
      {login && 
      <form>
        <h4>create field</h4>
        <label>experience name</label>
        <input name="expName" />
        <label>time</label>
        <input name="time" />
        <label>company</label>
        <input name="comp" />
        <label>description</label>
        <input name="descr" />
        <button>Create!</button>
      </form>}
    </div>
  );
}