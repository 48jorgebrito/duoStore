import './CheckoutEnd.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import FooterPage from '../../layout/FooterPage/FooterPage'
import { useContext} from 'react'
import {useForm}  from 'react-hook-form'
import { AuthContext } from '../../Context/Auth'
import { AiOutlineUser } from "react-icons/ai"
import {BsCaretDown} from "react-icons/bs"
import { CartContext } from '../../Context/CartContext';
import { Api } from '../../../config/Api'

import { apiAddres } from '../../../config/apiAddres'
import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"


export default function CheckoutEnd(){
   
    let navigate = useNavigate()
    const[dataAddres, setDataAddres] = useState()
    const {dataUser, addresDataUser} = useContext(AuthContext)
    const{register, handleSubmit, setValue} = useForm()
    

    //ATUALIZANDO PRODUTOS COM O AXIOS
    const addPost = async  (data )=> {
        
        await Api.put(`/cadastro/${dataUser._id}`, data).then(()=>{
            navigate('/checkout/endereco/frete')
            
        }).catch((error)=>{
            console.log(error)
        })
    } 


    const {cart} = useContext(CartContext)

    let somaValor = 0
    cart.map((item) => {
     return(
        somaValor += Number(item.price)
     )
    })
    const subTotal = somaValor.toFixed(2)

   
    const cepCheck = async (e) => {
        const cep = e.target.value
             
        const Cep = await apiAddres.get(`${cep}/json/`).then((response) =>{
            let resp = response.data
            setValue('addres.cidade', resp.localidade)
            setValue('addres.uf', resp.uf)
            return resp
        })
        
            
           setDataAddres(Cep)
        
           
        }
    
    
    
    return(
        <div className='CheckoutEnd'>
            <HeaderPages/>
            <div className='Box-progress'>

            </div>
            <section className='Container-CheckoutEnd'>
                
                <div className='endEntrega'>
                  <h1>INSIRA O ENDEREÇO PARA ENTREGA</h1>
                    <form onSubmit={handleSubmit(addPost)}>
                        
                        <div className='BoxCep'>
                            <p>Insira o CEP do endereço</p>
                            <input type='text' name='cep' placeholder='Ex: 65218000' {...register('addres.cep')} onBlur={cepCheck} required/>
                        </div>
                        <div className='BoxRecipient'>
                            
                            <div className='BoxDataRecipient-1'>
                                <div className='DataRecipient'>
                                    <p>Nome completo do destinatário</p>
                                    <input type='text' name='nomeDestinat' {...register('addres.destinat')} required/>
                                </div>
                                <div className='DataRecipient'>
                                    <p>Nome da rua</p>
                                    <input type='text' name='rua'  {...register('addres.rua')} required/>
                                </div>
                            </div>

                            <div className='BoxDataRecipient-2'>
                                <div className='DataRecipient'>
                                    <p>Número</p>
                                    <input type='number' name='numero'  {...register('addres.numero')} required/>
                                </div>
                                <div className='DataRecipient'>
                                    <p>Complemento</p>
                                    <input type='text' name='complemento'  {...register('addres.complemento')}/>
                                </div>
                                <div className='DataRecipient'>
                                    <p>Bairro</p>
                                    <input type='text' name='bairro'  {...register('addres.bairro')} required/>
                                </div>
                            </div>
                            <p className='city'>
                                <input type='hidden' name='cidade' {...register('addres.cidade')}/>
                                <input type='hidden' name='uf' {...register('addres.uf')}/>

                              {`${dataAddres === undefined? "Cidade": dataAddres.localidade} - ${dataAddres === undefined? "Uf": dataAddres.uf} `}
                               </p>
                            <button type='submit' className='btnConfirEnd'>Confirmar endereço</button>
                            {
                                addresDataUser.length == 0 ? " "
                                :
                                <Link to='/checkout/endereco/frete' className='btnCancel'>
                                    <p>cancelar</p>
                                </Link>
                            }
                            
                                
                        </div>
                        
                    </form>
                </div>
                <div className='Box-inforUser'>
                    <div className='inforUser'>
                        <div className='endAvatar'>
                            < AiOutlineUser/>
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
                        <strong>{`R$ ${subTotal}`}</strong>
                    </div>
                    
                    
                </div>
            </section>
            <FooterPage/>
        </div>
    )
}