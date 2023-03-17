import React from 'react';
import Pdf from "react-to-pdf";
import './CreatePDF.css';
import ReportTemplate from '../reportTemplate/ReportTemplate';

const ref = React.createRef();

const CreatePDF = () => {
  // Opciones para el documento PDF
  const options = {
    orientation: 'portrait', // orientación vertical
    unit: 'in', // unidad de pulgadas
    format: [10,14] // tamaño de 8.5x11 pulgadas
  };

  return (
    <div className="create-pdf">
      <Pdf targetRef={ref} filename="code-example.pdf" scale={0.77} quality={0.9} options={options} style={7}>
        {({ toPdf }) => <button onClick={toPdf} className="button-generate">Generate PDF</button>}
      </Pdf>
      <div ref={ref} className="coniner-invoice">
        <ReportTemplate />
      </div>
    </div>
  );
}

export default CreatePDF;