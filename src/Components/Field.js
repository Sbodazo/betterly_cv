import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import PrivateComponent from "./PrivateComponent";
import marked from "marked";

export default function Field({field}) {
  const { login } = useContext(AuthContext);
  const { experienceName, company, timespan, description } = field.fields;
  let newDescr = "";
  
  if (description) {
    newDescr = marked(description);
  } else {
    newDescr = ".";
  }
  const [ name, setName ] = useState(experienceName);
  const [ time, setTime ] = useState(timespan);
  const [ comp, setComp ] = useState(company);
  const [ descr, setDescr ] = useState(newDescr);

  return( 
    <div className="field">
      <h2 className="exp">{name}</h2>
      <h3 className="timespan">{time}</h3>
      <h4 className="comp">{comp}</h4>
      <p className="descr" dangerouslySetInnerHTML={{__html: descr}} />
      {login && <PrivateComponent changeState={{setName, setTime, setComp, setDescr}} values={{name, time, comp, descr}}/>}
    </div>
  );
}