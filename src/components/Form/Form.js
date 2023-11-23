import styled from 'styled-components';
import Wind from '../../assets/images/phong.png'
import {MdEmail} from 'react-icons/md'

function Form() {
    return ( 
        <FormItems>
            <div className='FormItem'>
                <img className='FormImg' src={Wind} alt='anh'/>
                <div className='FormInput'>
                    <input className='inputForm'  type='text' placeholder='Địa chỉ email của bạn' 
                    />
                    <MdEmail className='Icon'/>
                </div>
            </div>
            
        </FormItems>
     );
}

export default Form;


const FormItems = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    .FormItem{
        position: relative;

        .FormImg{
            display: block;
            margin: 0 auto;
            width: 100%;
            height:250px;
        }
    
        .FormInput{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            ::placeholder{
                color: #58432e;
                font-size: 15px;
                font-weight: 550;
                padding-left: 10px;
            }

            input{
                height: 42px;
                width: 500px;
                border: 1px solid #000;
                border-radius: 4px;
                transition: width 0.5s;
                cursor: text;
                outline: none;
                background-color: rgba(58, 58, 57, 0.1 );
                color: #646545;

                

                

                &:focus{
                    background-color: rgba(58, 58, 57, 0.4 );

                }
            }
            .Icon{
                width: 23px;
                height: 23px;
                cursor: pointer;
                transform: translateX(-40px) translateY(8px);
                color: #000;
            }
        }
    }

    


`;