import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: black;
`
export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 400px){
            height: 80%;
        }
`
export const Icon = styled(Link)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-family: 'Yuji Boku', serif;
  margin-left: 24px;
  margin-top: 10px
  font-weight: bold;
  text-decoration: none;

        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }
`
export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px){
            padding: 10px;
        }
`

export const Form = styled.form`
  background: #EF5350;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px){
      padding: 32px 32px;
  }
  
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput =styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

`

export const FormButtom = styled.button`
  background: black;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20 px;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`