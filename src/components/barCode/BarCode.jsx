import Barcode from 'react-barcode';

const BarCode = () => {
  return (
    <div className="App">

      <Barcode 
        value="(415)7709998489141(8020)07285387(3900)176241(96)20230329"
        format="CODE128"
        width={1.3}
        height={100}
        displayValue={true}
      />
      
    </div>
  )
}

export default BarCode