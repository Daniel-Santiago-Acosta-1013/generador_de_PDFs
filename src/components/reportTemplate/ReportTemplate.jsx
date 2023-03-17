import React from 'react'
import './ReportTemplate.css'

const ReportTemplate = () => {
  return (
   <>
        <div className='head_container'>
            <h4>AUTORIZACION DE PAGO</h4>
            <h4>REFERENCIA NO.</h4>
        </div>

        <div className='table-container'>
            <img src="src/assets/Universidad_Central.png" alt="imagen de u central" width="300px"/>
            <table>
                <tr>
                    <td> 
                        <p>Documento No:</p> 
                        <p>10236598632</p>
                    </td>
                    <td>
                        <p>Nombre:</p> 
                        <p>Santiago Acosta</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Dia  Mes  Año:</p>
                        <p>Fecha: 12/5/2022</p>
                    </td>
                    <td>
                        <p>Ciclo:</p>
                        <p></p>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>Programa</p>
                        <p>Cursos por modulo</p>
                    </td>
                </tr>
            </table>
        </div>

        <div className='head_container'>
            <h4>DETALLE DEL COBRO</h4>
        </div>

        <div className='table-container-2'>
            <table className='table-2'>
                <tr>
                    <th> cantidad </th>
                    <th> Descripcion </th>
                    <th> A cargo </th>
                    <th> A Favor </th>
                </tr>

                <tr className='content-table-2'>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                </tr>

            </table>
        </div>
   </>
  )
}

export default ReportTemplate