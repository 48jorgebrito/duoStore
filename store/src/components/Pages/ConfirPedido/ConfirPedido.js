import './ConfirPedido.css'
import {AiOutlineCheck} from 'react-icons/ai'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import pix from '../../images/pix.svg'
import { PedidosContext } from '../../Context/PedidosContext'
import { useContext } from 'react'

import BtnHome from '../../layout/BtnHome/BtnHome'

export default function ConfirmPedido(){
    
    const {lestPedido, confirmPedido} = useContext(PedidosContext)

    const getImagemQrcode = localStorage.getItem('imagemQrcode')
    const qrcode = localStorage.getItem('qrcode')
    const valorPedido = localStorage.getItem('valorPedido')
    const teste = confirmPedido.map((item)=>{
        return(
            item.numeroPedido
        )
    })
    
    return(
        <div className="confirPedido">
            <HeaderPages/>
            <div  className="container_confirPedido">
                <div className='boxIcon_confirmed'>
                    <AiOutlineCheck/>
                </div>
                <h1 className='name_Pedido'>Pedido #{teste} concluido com sucesso</h1>
                <div className='message_email'>
                    <p>
                        Você receberá um e-mail de confirmação 
                        do pedido e todos os detalhes da sua compra. Caso não tenha recebido,
                        verifique sua caixa de spam.
                    </p>
                </div>

                <div className='container_inforPedido'>
                    <div className='inforPagamento'>
                        <div className='inforPagamento_left'>
                            <div className='inconPagamentoForm'>
                                <img src={pix}/>
                            </div>
                            <div className='inforPagamentoName'>
                               <p><strong> PIX </strong></p> 
                               <p><strong>{`R$ ${valorPedido}`}</strong></p> 
                            
                            </div>
                        </div>

                        <div className='inforPagamento_right'>
                            <p>Status da cobrança</p>
                        </div>
                    </div>

                    <div className='imgQrCode'>
                        <img src={getImagemQrcode}/>
                    </div>
                    <p>Realize o pagamento pelo aplicativo escaneando o QR Code acima.</p>
                    <p>O pagamento ficará disponível por 1 dia.</p>

                    <div className='box-copiaQrCode'>
                        <p className='title-copia'>Pague também copinando o codigo abaixo e colando na opção Pix Copia do seu app</p>
                        <p className='qrCodeCopia'>{qrcode}</p>
                        <p className='btn-Copiar'>Copiar código</p>
                    </div>

                </div>
                
                
                
            </div>
            <div className='BackHome'>
                <BtnHome text='Continuar comprando'/>
            </div>
            <FooterPage/>
        </div>
    )
}