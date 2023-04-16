import './Frete.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { useContext} from 'react'
import {useForm}  from 'react-hook-form'
import { AuthContext } from '../../Context/Auth'
import { AiOutlineUser } from "react-icons/ai"
import {BsCaretDown} from "react-icons/bs"
import {ImLocation} from "react-icons/im"
import { CartContext } from '../../Context/CartContext';




import {Link, useNavigate} from "react-router-dom"



export default function CheckoutEnd(){
    
    let navigate = useNavigate()
    const {dataUser, addresDataUser} = useContext(AuthContext)
    const{rua, numero, bairro, complemento, cep, cidade, uf, destinat } = addresDataUser
    const{register, handleSubmit} = useForm()
    
   
    
    const addFret = (data) => {
       localStorage.setItem("frete", JSON.stringify(data))
       navigate("/checkout/pagamento")
        
    }

    const {cart} = useContext(CartContext)

    let Total = 0
    cart.map((item) => {
     return(
         Total += item.price
     )
    })

    
    return(
        <div className='CheckoutEnd'>
            <HeaderPages/>

            <section className='Container-CheckoutEnd'>
                <div>
                    <div className='progressName'>
                        <strong>Identificação</strong>
                        <strong>Entrega</strong>
                        <strong>Pagamento</strong>
                        
                    </div>
                    <div className='progressBar'>
                        <div></div>
                        <div></div>
                        <div className='progressSingle'></div>
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
                            </div>
                            
                        </div>
                        <Link to="/checkout/endereco/edit" className='inforEndEdit-Edit'>Editar</Link>
                    </div>


                
                    <div className='endEntrega'>
                        <h1>SELECIONE A OPÇÃO DE ENTREGA</h1>
                    
                        <form className='boxCheckbox' onSubmit={handleSubmit(addFret)}>
                            <label className='checkboxSingle' id="frete">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='frete' {...register("optionFret")} value="retirar na loja|0" required />
                                    </div>    
                                    <div>
                                        <strong>Retirar na loja</strong>
                                        
                                    </div>
                                </div>
                                    <p>--</p>
                            </label>
                            <label className='checkboxSingle' id="frete">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='frete' {...register("optionFret")} value="Matinha - frete gratis|0"/>
                                    </div>    
                                    <div>
                                        <strong>Matinha</strong>
                                        <p> Prazo: até 1 dia útil</p>
                                    </div>
                                </div>
                                    <p>Frete Gratis</p>
                            </label>
                            <label className='checkboxSingle' id="frete">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='frete' {...register("optionFret")} value="Olinda Nova|15"/>
                                    </div>    
                                    <div>
                                        <strong>Olinda Nova - MA</strong>
                                        <p> Prazo: até 2 dias úteis</p>
                                    </div>
                                </div>
                                    <p>R$ 15,00</p>
                            </label>
                            <label className='checkboxSingle' id="frete">
                                <div className='checkboxSingle-left'>
                                    <div className='checkboxSingle-input'>
                                        <input type='radio' name='frete' {...register("optionFret")} value="Viana|15"/>
                                    </div>    
                                    <div>
                                        <strong>Viana-MA</strong>
                                        <p> Prazo: até 2 dias úteis</p>
                                    </div>
                                </div>
                                    <p>R$ 15,00</p>
                            </label>
                            <div className='line'></div>
                            <button type='submit' className='btnSubmit'>
                                Confirmar opção de entrega
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

                    <div className='inforItens inforTotal'>
                        <strong>Subtotal</strong>
                        <strong>{`R$ ${Total}`}</strong>
                    </div>
                    
                    
                </div>
            </section>
            <FooterPage/>
        </div>
    )
}