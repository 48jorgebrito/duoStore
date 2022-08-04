import './FooterPage.css'

export default function FooterPage(){
   
    return(
        <div className='FooterPage'>
            <div className='FooterPageContainer'>
                <span dangerouslySetInnerHTML={{ "__html": "&copy; DuoOutlet - Todos os direitos reservados" }} />
            </div>

        </div>
    )
}