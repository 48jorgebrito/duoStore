import './Pagamento.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { useContext, useState} from 'react'
import {get, useForm}  from 'react-hook-form'
import { AuthContext } from '../../Context/Auth'
import { AiOutlineUser } from "react-icons/ai"
import {BsCaretDown} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import { CartContext } from '../../Context/CartContext';
import { Api } from '../../../config/Api'

import pix from '../../images/pix.svg'
import boletoIcon from '../../images/boletoIcon.svg'
import cartao from '../../images/cartao.svg'

import {Link} from 'react-router-dom'


export default function CheckoutPagamento(){
    
    const [teste, setTeste] = useState()
    const {dataUser, addresDataUser} = useContext(AuthContext)
    const{rua, numero, bairro, complemento, cep, cidade, uf, destinat } = addresDataUser
   
   
    const{register, handleSubmit, setValue} = useForm()
    
    const getFrete = localStorage.getItem("frete" )
    const frete = JSON.parse(getFrete)
    const freteValue = frete.optionFret.split('|')
    const freteLocal = freteValue[0]
    const fretePreco = parseFloat(freteValue[1])
    

    const {cart} = useContext(CartContext)

    let Total = 0
    cart.map((item) => {
     return(
         Total += item.price
     )
    })
    const valorPedido = Total + fretePreco
    const addPost = async (data)=> {  
        //await Api.post('/pagamento', data)
        console.log(data)

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
                        
                            <label className='checkboxSingle' id="pagamento">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento' {...register('valorCob')} value={valorPedido} required/>
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={pix}/>
                                    </div>  
                                    <div>
                                        <strong>Pix</strong>
                                        <p>{`R$ ${Total + fretePreco},00`}</p>
                                    </div>
                                </div>
                            </label>
                            <label className='checkboxSingle' id='pagamento' required>
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento' {...register('valorCob')} value={valorPedido} />
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={boletoIcon}/>
                                    </div>  
                                    <div>
                                        <strong>Boleto</strong>
                                        <p>{`R$ ${Total + fretePreco},00`}</p>
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
                    <div className='inforItens'>
                        <p>{`${cart.length} item`}</p>
                        <BsCaretDown className='caret'/>
                    </div>
                    <div className='inforItens'>
                        <p>Frete</p>
                        <strong>{`R$ ${fretePreco},00`}</strong>
                    </div>
                    <div className='inforItens inforTotal'>
                        <strong>Total</strong>
                        <strong>{`R$ ${Total + fretePreco},00`}</strong>
                    </div>
                    
                    
                </div>
            </section>
            <FooterPage/>
        </div>
    )
}