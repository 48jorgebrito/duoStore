import './PayBar.css'
import Boleto from '../../images/boleto.svg'
import Credito from '../../images/credito.svg'
export default function PayBar(){
    return(
        <div className='payBar'>
            <div className='payBarContainer '>

                <div className='icon'>
                    <img src={Boleto} alt="boleto"/>
                   <div className='iconDescroption'>
                        <h3>13% de desconto</h3>
                        <p>à vista no boleto</p>
                   </div>
                </div>
                
                <div className='icon'>
                    <img src={Boleto} alt='pix'/>
                   <div className='iconDescroption'>
                        <h3>13% de desconto</h3>
                        <p>à vista no pix</p>
                   </div>
                </div>

                <div className='icon'>
                    <img src={Credito} alt="credito"/>
                    <div className='iconDescroption'>
                        <h3>pagamento em até 12x</h3>
                        <p>no cartão de crédito</p>
                   </div>
                </div>

            </div>

        </div>

    )
}