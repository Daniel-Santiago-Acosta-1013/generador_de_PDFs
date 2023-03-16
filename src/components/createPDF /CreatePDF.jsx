
import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CreatePDF = () => {

  return (
    <div className="App">
      
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      {/* esto es lo que vamos a comverir en pdf */}

      <div ref={ref} className="coniner">
        <h2>Autorizacion de pago</h2>
        <h2>Referencia No.</h2>
      </div>

    </div>
  );

}

export default CreatePDF