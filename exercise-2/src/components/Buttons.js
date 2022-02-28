import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add Peruna</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add Porkkana</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add Lohi</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add Kuohukerma</button>
  </div>;
}
