import './Pagamento.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { useContext} from 'react'
import {useForm}  from 'react-hook-form'
import { AuthContext } from '../../Context/Auth'
import { AiOutlineUser } from "react-icons/ai"
import {BsCaretDown} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import { CartContext } from '../../Context/CartContext';
import { Api } from '../../../config/Api'

import pix from '../../images/pix.svg'
import boletoIcon from '../../images/boletoIcon.svg'
import cartao from '../../images/cartao.svg'

import {Link, useNavigate} from 'react-router-dom'


export default function CheckoutPagamento(){
    
    let navigate = useNavigate()
    const {dataUser, addresDataUser} = useContext(AuthContext)
    const{rua, numero, bairro, complemento, cep, cidade, uf, destinat } = addresDataUser
    
   
   
    const{register, handleSubmit} = useForm()
    
    const getFrete = localStorage.getItem("frete" )
    const frete = JSON.parse(getFrete)
    const freteValue = frete.optionFret.split('|')
    const freteLocal = freteValue[0]
    const fretePreco = parseFloat(freteValue[1])
    

    const {cart, clearCart} = useContext(CartContext)
    
    let somaValor = 0
    cart.map((item) => {
     return(
        somaValor += Number(item.price)
     )
    })
    const subTotal = somaValor.toFixed(2)
    const total = somaValor + fretePreco
    const valorPedido = total.toFixed(2)

    const itens = JSON.stringify(cart)
    const tipoPagamento = 'Pix'
    const addPost = async (data)=> {  
        const response = await Api.post('/pagamento', data)
       
        
        await Api.post(`/pedido/${dataUser._id}`, data)
            

            localStorage.setItem('imagemQrcode', response.data.imagemQrcode)
            localStorage.setItem('qrcode', response.data.qrcode)
            localStorage.setItem('valorPedido', valorPedido)

            navigate('/checkout/pagamento/confirmacao')
            window.location.reload()
            clearCart()
    } 
    return(
        <div className='CheckoutPagamento'>
            <HeaderPages/>
            
            <section className='Container-CheckoutPagamento'>
                <div>

                    <div className='progressName'>
                        <strong>Identificação</strong>
                        <strong>Entrega</strong>
                        <strong>Pagamento</strong>
                    </div>
                    <div className='progressBarPagament'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className='inforEndEdit'>
                        <div className='inforEndEdit-Left'>
                            <div className='inforEndEdit-Icon'>
                                <ImLocation/>
                            </div>  
                            <div className='inforEndEdit-End'>
                                <strong>{`${destinat}`}</strong>
                                <p>{`${rua}, ${numero} / ${complemento}`}</p>
                                <p>{`CEP ${cep}, ${bairro} - ${cidade}/${uf}`}</p>
                                <strong>{`Entega: ${freteLocal}`}</strong>
                            </div>
                        </div>
                        <Link to="/checkout/endereco/frete" className='inforEndEdit-Edit'>Editar</Link>
                    </div>

                    <div className='endEntrega'>
                        <h1>SELECIONE A FORMA DE PAGAMENTO</h1>
                        <form className='boxCheckbox' onSubmit={handleSubmit(addPost)}>
                            <input type='hidden' name='pagamentType' value={tipoPagamento} {...register('pagamentType')}/>
                            <input type='hidden' name='itens' value={itens} {...register('itens')}/>
                            <input type='hidden' name='valorTotal' value={valorPedido} {...register('valorTotal')}/>
                            <input type='hidden' name='fretePreco' value={fretePreco.toFixed(2)} {...register('fretePreco')}/>
                            <input type='hidden' name='subTotal' value={subTotal} {...register('subTotal')}/>
                            <label className='checkboxSingle' id="pagamento">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento' {...register('valorCob')} value={valorPedido} required/>
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={pix} alt='pix'/>
                                    </div>  
                                    <div>
                                        <strong>Pix</strong>
                                        <p>{`R$ ${valorPedido}`}</p>
                                    </div>
                                </div>
                            </label>
                            <label className='checkboxSingle' id='pagamento' required>
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento' {...register('valorCob')} value={valorPedido} required/>
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={boletoIcon} alt='boleto bancario'/>
                                    </div>  
                                    <div>
                                        <strong>Boleto</strong>
                                        <p>{`R$ ${valorPedido}`}</p>
                                    </div>
                                </div>
                            </label>
                            <div className='line'></div>
                            <button type='submit' className='btnSubmit'>
                                Finalizar compra
                            </button>
                        </form>
                    </div>
                </div>

                <div className='Box-inforUser'>
                    <div className='inforUser'>
                        <div className='endAvatar'>
                            <AiOutlineUser/>
                        </div>
                        <div>
                            <p> <strong>{`${dataUser.firstName} ${dataUser.lastName}`}</strong></p>
                            <p className='email'>{dataUser.email}</p>
                        </div>
                    </div>
                    <div className='inforItens-pagamento'>
                        <p>{`${cart.length} item`}</p>
                        <BsCaretDown className='caret'/>
                    </div>
                    <div className='inforItens-pagamento'>
                        <p>Subtotal</p>
                        <strong>{subTotal}</strong>
                    </div>
                    <div className='inforItens-pagamento'>
                        <p>Frete</p>
                        <strong>{`R$ ${fretePreco},00`}</strong>
                    </div>
                    <div className='inforItens-pagamento inforTotal'>
                        <strong>Total</strong>
                        <strong>{`R$ ${valorPedido}`}</strong>
                    </div>
                    
                    
                </div>

            </section>
            
            <FooterPage/>
        </div>
    )
}