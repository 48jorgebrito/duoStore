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

import {Link} from 'react-router-dom'


export default function CheckoutPagamento(){
    
    
    const {dataUser, addresDataUser} = useContext(AuthContext)
    const{rua, numero, bairro, complemento, cep, cidade, uf, destinat } = addresDataUser
    const{register, handleSubmit, setValue} = useForm()
    const getFrete = localStorage.getItem("frete" )
    const frete = JSON.parse(getFrete)
    //ATUALIZANDO PRODUTOS COM O AXIOS
    const addPost = async  (data )=> {  
        await Api.put(`/cadastro/${dataUser._id}`, data).then(()=>{
            console.log("Endereço atualizado com sucesso")
            
        }).catch((error)=>{
            console.log(error)
        })
    } 


    const {cart} = useContext(CartContext)

    let Total = 0
    cart.map((item) => {
     return(
         Total += item.price
     )
    })

    
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
                                <strong>{` ${frete.optionFret}`}</strong>
                            </div>
                        </div>
                        <Link to="/checkout/endereco/frete" className='inforEndEdit-Edit'>Editar</Link>
                    </div>

                    <div className='endEntrega'>
                        <h1>SELECIONE A FORMA DE PAGAMENTO</h1>
                        <form className='boxCheckbox'>
                            
                            <label className='checkboxSingle' id="pagamento">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento' required/>
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={pix}/>
                                    </div>  
                                    <div>
                                        <strong>Pix</strong>
                                        <p> R$ 100,00</p>
                                    </div>
                                </div>
                            </label>
                            <label className='checkboxSingle' id='pagamento' required>
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='pagamento'/>
                                    </div>  
                                    <div className='imgPaymentForm'>
                                        <img src={boletoIcon}/>
                                    </div>  
                                    <div>
                                        <strong>Pix</strong>
                                        <p> R$ 100,00</p>
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
                        <p>Taxas adicionais</p>
                        <strong>R$ 5,00</strong>
                    </div>
                    <div className='inforItens inforTotal'>
                        <strong>Total</strong>
                        <strong>{`R$ ${Total},00`}</strong>
                    </div>
                    
                    
                </div>
            </section>
            <FooterPage/>
        </div>
    )
}