import styled from 'styled-components'

export const CommentsMainContainer= styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;

  min-height: 100vh;
`

export const CommentHeader = styled.h1`
  color:  #1e293b;
  font-size: 25px;
  font-weight: bold;

`

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:576px){
       flex-direction: column;
       justify-content: flex-start;
  }

`

export const FormContainer= styled.form`
   display: flex;
   flex-direction: column;
   margin-right:20px ;
   @media screen and (max-width:576px){
       order: 1;
   }
   
`

export const CommentPara = styled.p`
  color:  #475569;
  font-size: 20px;
  font-weight: 500;
`

export const CommentName= styled.input`
 padding: 10px;
 margin-bottom: 10px;
`

export const CommentDescription = styled.textarea`
 padding: 10px;
 margin-bottom: 10px;
`

export const CommentAdd = styled.button`
 cursor: pointer;
 background-color: #0284c7;
 color: #ffffff;
 font-size: 15px;
 font-weight: 500;
 border: none;
 outline: none;
 width: 50%;
 padding: 10px;
 border-radius: 10px;
`

export const CommentImg = styled.img`
 @media screen and (max-width:576px){ 
       order: 0;
       width: 100%;
 }
`

export const HrLine= styled.hr`
  width: 100%;
  border: 1px solid #475569;

`
export const CommentListLengthContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`
export const CommentLength= styled.p`
  background-color:  #0284c7;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
  border-radius: 10px;
`

export const CommentsPara= styled.p`
  color:  #475569;
  font-size: 15px;
  font-weight: bold;

`

export const CommentList= styled.ul`
  padding-left: 0px;
`



