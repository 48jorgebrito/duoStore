import './Cadastro.css'
import HeaderPages from '../../layout/HeaderPages/HeaderPages'
import { AiOutlineUser } from "react-icons/ai"
export default function Cadastro(){
    return(
        <div className='Cadastro'>
                <HeaderPages/>
            <div className='CadastroContainer'> 
                <h1>Insira seus Dados </h1>

                <div className='BoxUser'>
                    <div className='DataLeft'>
                        <label>Nome</label>
                        <input type='text'/>
                    </div>
                    <div className='DataRight'>
                        <label>Sobrenome</label>
                        <input type='text'/>
                    </div>
                </div>

                <div className='Email'>
                    <label>Email</label>
                    <input type='email'/>
                </div>
                <div className='BoxUser'>
                    <div className='DataLeft'>
                        <label>Data de nascimento</label>
                        <input type='date'/>
                    </div>
                    <div className='DataRight'>
                        <label>Sexo</label>
                        <select>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </select>
                    </div>
                </div>
                <div className='BoxUser'>
                    <div className='DataLeft'>
                        <label>CPF</label>
                        <input type="text" name="cpf"  />
                    </div>
                    <div className='DataRight'>
                        <label>Telefone</label>
                        <input type='tel'/>
                    </div>
                </div>
                <div className='Password'>
                    <label>Senha</label>
                    <input type='password'/>
                </div>
                <button className='BtnCadastro' type='submit'>Cadastrar</button>
            </div>
        </div>
    )
}