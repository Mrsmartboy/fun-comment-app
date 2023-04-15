import styled from "styled-components";



export const CommentItemContainer=styled.li`
  list-style-type:none ;

`

export const CommentNameContainer = styled.div`
   display: flex;
  align-items: center;
  margin-bottom: 0px;
`

export const FirstLetter = styled.p`
  background-color: #0ea5e9;
  padding: 10px;
  border-radius: 50px;
  margin-right:5px ;
  color: #ffffff;
`

export const Name =styled.p`
color: #334155;
font-size: 20px;
font-weight: bold;
margin-right: 5px;

`
export const Time = styled.p`
 color: #94a3b8;
 font-size: 15px;
 font-weight: bold;

`

export const Description = styled.span`
  color:  #64748b;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
  margin-left: 30px;
`

export const ActionContainer= styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

export const CommentLikeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const CommentLikeImg= styled.img`
  margin-right: 10px;
`

export const LikePara = styled.p`
  color:#7e858e;
  font-size: 15px;
  font-weight: 600;
  color: ${props=>props.isLiked&&'#0ea5e9'};


`

export const DeleteButton = styled.button`
 border: none;
 outline: none;
 background-color: transparent;
 cursor: pointer;

`

export const DeleteImg = styled.img`
   color:#7e858e;
`
export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid #475569;
`