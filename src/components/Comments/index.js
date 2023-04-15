import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {CommentsMainContainer,CommentHeader,CommentContainer,FormContainer,
    CommentPara,CommentName,CommentDescription,
    CommentAdd,CommentImg,HrLine,CommentListLengthContainer,CommentLength,CommentsPara,CommentList} from './styled'

  

const Comments =()=>{
    const [nameInput,setNameInput] = useState('')
    const [text,setText]= useState('')
    const [commentList,setCommentList]=useState([])
    const onChangeName=(event)=>{
          setNameInput(event.target.value)
    }

    const onChangeText=(event)=>{
        setText(event.target.value)
    }

    const onSubmitForm =(event)=>{
          event.preventDefault()

        if(nameInput.length!==0 && text.length!==0){
            const newComment = {
                id:uuidv4(),
                nameInput,
                text,
                date:new Date(),
                isLiked:false,
            }
           
            setCommentList(prevState=>([...prevState,newComment]))
            setNameInput("")
            setText("")


        }else{
            alert("Please enter the valid details")
        }

    }

    const onLike =(id)=>{
        setCommentList(prevState=>prevState.map(each=>{
            if (each.id===id){
                return ({...each,isLiked:!each.isLiked})
            }
            return each
        }))

    }

    const onDelete=(id)=>{
        const filteredList =commentList.filter(each=>(each.id!==id))
        setCommentList(filteredList)
    }

    return(
        <CommentsMainContainer>
            <CommentHeader>Comments</CommentHeader>
            <CommentContainer>
            <FormContainer onSubmit={onSubmitForm}>
            <CommentPara>Say something about 4.0 Technologies</CommentPara>
            <CommentName type="text"  onChange={onChangeName} value={nameInput}/>
            <CommentDescription rows={9} cols={40} onChange={onChangeText} value={text}/>
             <CommentAdd type='submit'>Add Comment</CommentAdd>
           </FormContainer>
            <CommentImg src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments"/>
           </CommentContainer>
            <HrLine/>
            <CommentListLengthContainer>
                <CommentLength>0</CommentLength>
                <CommentsPara>Comments</CommentsPara>
            </CommentListLengthContainer>
            <CommentList>
            {commentList.map(eachItem=>(
                <CommentItem eachItem={eachItem} key={eachItem.id} onLike={onLike} onDelete={onDelete}/>
            ))}
            </CommentList>
        </CommentsMainContainer>
    )

}

export default Comments