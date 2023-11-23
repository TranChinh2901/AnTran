import BackgroundCafe from '../../assets/images/new.jpg'
import styled from 'styled-components';

function Background() {
    return ( 
        <BackgroundImage>
            <div className='Background'>
                <img className='backgroundImg' src={BackgroundCafe} alt='anh'/>
            </div>
            
        </BackgroundImage>
     );
}

export default Background;

const BackgroundImage = styled.div `
    margin: 0;
    padding: 0;

    .Background{
        margin-top: 80px;

        .backgroundImg{
            width: 100%;
            height: 100%;
            left: 0;
        }

    }
    
`;