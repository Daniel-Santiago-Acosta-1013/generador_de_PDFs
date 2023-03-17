import React from 'react'
import './ReportTemplate.css'
import BarCode from '../barCode/BarCode'

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
                        <p>1</p>
                    </td>
                    <td>
                        <p>PROGRAMA INGLES GENERAL - PARTICULARES</p>
                    </td>
                    <td>
                        <p>$ 176,241.00</p>
                    </td>
                    <td>
                        <p></p>
                        <p></p>
                    </td>
                </tr>

            </table>
        </div>

        <div className='table-container-3'>
            <table className='table-3'>
                <tr>
                    <td> 
                        <p>PAGO ORDINARIO HASTA</p> 
                        <p>29/03/2023</p>
                    </td>
                    <td>
                        <p>VALOR A PAGAR</p> 
                        <p>$ 176,241.00 </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>PAGO EXTRAORDINARIO HASTA</p>
                        <p>29/03/2023</p>
                    </td>
                    <td>
                        <p>VALOR A PAGAR</p>
                        <p>$ 176,241.00 </p>
                    </td>
                </tr>
            </table>
        </div>


        <div className='blue-box-container'>
            <div className='blue-box'></div>
            <p className='text-box'>TIMBRE DE CAJA</p>
        </div>
        
        <div className='table-container-4'>
        <img src="src/assets/Universidad_Central.png" alt="imagen de u central" width="300px"/>
            <table className='table-4'>
                <tr className='ht-no-border'>
                    <td className='td-no-border'> 
                        <p>CUENTA No. 1231321</p> 
                    </td>

                    <td className='td-no-border'>
                        <p>REFERENCIA: 7285387</p> 
                    </td>
                </tr>
                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>NOMBRE: Santiago Acosta</p> 
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PROGRAMA: CURSOS POR MÓDULO</p>
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PAGO ORDIANARIO HASTA: 29/03/2023</p>
                    </td>
                    <td className='td-no-border'>
                        <p>VALOR A PAGAR: $ 176,241.00</p>
                    </td>
                </tr>

                <tr className='ht-no-border'>
                    <td className='td-no-border'>
                        <p>PAGO EXTRAORDINARIO HASTA: 29/03/2023</p>
                    </td>
                    <td className='td-no-border'>
                        <p>VALOR A PAGAR: $ 176,241.00</p>
                    </td>
                </tr>
            </table>
        </div>

        <div className='main-head-container'>
            <div className='head_container-table-5'>
                <h4 className='head-text'>BANCOS DONDE PUEDE REALIZAR EL PAGO</h4>
            </div>

            <div className='head_container-table-5-sub'>
                <h4 className='head-text'>RELACION DEL PAGO</h4>
            </div>
        </div>
            

        <div className='table-container-5'>

            <table className='table-7'>
                <tr>
                    <th> BANCO </th>
                    <th> NO. DE CUENTA </th>
                </tr>

                <tr className='content-table-5'>
                    <td>
                        <p>DAVIVIENDA</p>
                        <p></p>
                    </td>
                    <td>
                        <p>CONVENIO 1032903</p>
                        <p></p>
                    </td>
                </tr>
            </table>

            <table className='table-5'>
                <tr>
                    <th> CODIGO BANCO </th>
                    <th> NO. DE CUENTA </th>
                    <th> NO. DEL CHEQUE </th>
                    <th> VALOR </th>
                </tr>

                <tr className='content-table-5'>
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

        <div className='table-container-6'>
            <table class="table-6">
                <tr className='ht-no-border'>
                    <td class="celda td-no-border">SUMA DE CHEQUES</td>
                    <td className='td-border-left'>$</td>
                </tr>
                <tr className='ht-no-border'>
                    <td class="celda td-no-border">EFECTIVO</td>
                    <td className='td-border-left'>$</td>
                </tr>
                <tr className='ht-no-border'>
                    <td class="celda td-no-border">TOTAL</td>
                    <td className='td-border-left'>$</td>
                </tr>
            </table>
        </div>

        <div className='bar-code'>
            <BarCode/>
            <div className='blue-box-container'>
                <div className='blue-box'></div>
                <p className='text-box'>TIMBRE DE CAJA</p>
            </div>
        </div>
   </>
  )
}

export default ReportTemplate