import './Bag.css'
import HeaderPages from "../../layout/HeaderPages/HeaderPages"
import {Link} from "react-router-dom"
import {BsEmojiFrown} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

import { useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { AuthContext } from '../../Context/Auth'
import pix from '../../images/pix.svg'
import boletoIcon from '../../images/boletoIcon.svg'
import cartao from '../../images/cartao.svg'

import FooterPage from '../../layout/FooterPage/FooterPage'
import BtnHome from '../../layout/BtnHome/BtnHome'


export default function Bag(){
    
    const {cart, removeProduct} = useContext(CartContext)
    const {addresDataUser} = useContext(AuthContext)
    
    
   
    let somaValor = 0
        cart.map((item) => {
         return(
            somaValor += Number(item.price)
         )
        })
    const subTotal = somaValor.toFixed(2)
    
   
    return(
        <div className='Bag'>
                   <HeaderPages/>
            
            {
              cart.length !== 0 ? 
              <div className='ProductList'>
                  
                
                <div className='ContainerProduct'>
                <h1 className='titleBag'>SACOLA DE COMPRAS</h1>
                <div className='lineTitle'></div>
                {cart.map(item => (
                    
                    <div className='BoxProduct' key={item.id}>
                        
                        <div className='ImgProduct'>
                            <img src={item.url} alt='Imagem do Produto'/>
                        </div>
                        <div className='DescriptionProduct'>
                            <h3>{`${item.name} / sex: ${item.sex} / tamanho: ${item.size}`}</h3>
                            <p>{item.id}</p>
                        </div>
                        <div className='PriceQtd'>
                            <div className='BtnQtd'>
                                <button><AiOutlineMinus/></button>
                                    <p className='Display'>1</p>
                                <button><AiOutlinePlus/></button>
                            </div>
                            <h2>{`R$ ${item.price}`}</h2>
                        </div>
                        <div className='Close'>
                            <AiOutlineClose onClick={() => removeProduct(item.id)}/>
                        </div>
                    </div>
                
            ))}

                <div className='boxSubtotal'>
                    
                    <BtnHome text='Voltar para a loja'/>

                    <div className='box-LineSubtotal'>
                        <div className='lineSubtotal'>
                            <p>Itens</p>
                            <p className='finalPrice'>{`R$ ${subTotal}`}</p>
                        </div>
                        <div className='lineSubtotal'>
                            <p>Frete</p>
                            <p className='finalPrice'>--</p>
                        </div>  
                        <div className='lineSubtotal textSbtotal'>
                            <h2>SUBTOTAL</h2>
                            <p className='finalPrice'>{`R$ ${subTotal}`}</p>
                        </div>

                    </div>

                    </div>
                    </div>
                
                <div className='cart-resume'>
                    <h2 className='title-cartResume'> Simule seu frete e prazo </h2>
                    <div className='boxCep'>
                        <input className='cep' type='number' placeholder='Informe seu CEP'/>
                        <button className='btnCep'>Simular</button>
                    </div>
                    <div>
                        <h2 className='title-cartResume'>condições de pagamento</h2>
                        <div className='paymentForm'>
                            <div className='img-paymentForm'>
                                <img src={pix}/>
                            </div>
                            <div>
                                <p>Pix</p> 
                                <p className='finalPrice'>{`R$ ${subTotal}`}</p>
                            </div>
                        </div>
                        <div className='paymentForm'>
                            <div className='img-paymentForm'>
                                <img src={boletoIcon}/>
                            </div>
                            <div>
                                <p>Boleto</p> 
                                <p className='finalPrice'>{`R$ ${subTotal}`}</p>
                            </div>
                        </div>
                        <div className='paymentForm'>
                            <div className='img-paymentForm'>
                                <img src={cartao}/>
                            </div>
                            <div>
                                <p>Cartão</p> 
                                <p className='finalPrice'>{`R$ ${subTotal}`}</p>
                            </div>
                        </div>
                    </div>
                        <Link to={addresDataUser.length == 0? "/checkout/endereco/edit" : "/checkout/endereco/frete"}>
                            <button className='btnFinal'>Finalizar compra</button>
                        </Link>
                </div>
            </div>
            
           :
            <div className='BagConatiner'> 
                <div className='EmptyBag'>
                    <BsEmojiFrown className='Emoji'/>
                    <h1>sua sacola está vazia!</h1>
                    
                    <p>Mas você pode clicar no botão abaixo e encontar o produto que você procura em nossa loja. APROVEITE!</p>
                        
                    <div>

                    <Link to='/' className='BtnStore'>Voltar para a loja</Link>
                    </div>
                </div>
            </div>
            
            }
            <FooterPage/>
        </div>
    )
}