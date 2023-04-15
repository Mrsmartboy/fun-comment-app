import {CommentItemContainer,CommentNameContainer,FirstLetter,Name,Time,Description,ActionContainer,CommentLikeButton,CommentLikeImg,LikePara,DeleteButton,DeleteImg,HrLine} from './styled'
 import {formatDistanceToNow} from 'date-fns'

const CommentItem=(props)=>{
    const {eachItem,onLike,onDelete}= props 
    const {nameInput,text,date,isLiked,id}= eachItem 

    const firstLetter= nameInput.slice(0,1).toUpperCase()
   const time = formatDistanceToNow(date)

   const imgUrl = isLiked?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    const onClickLike=()=>{
                onLike(id)
    }

    const onDeleteItem=()=>{
        onDelete(id)
    }
   return(
        <CommentItemContainer>
            <CommentNameContainer>
                <FirstLetter>{firstLetter}</FirstLetter>
                <Name>{nameInput}</Name>
                <Time>{time} ago</Time>
            </CommentNameContainer>
            <Description>{text}</Description>
            <ActionContainer>
                <CommentLikeButton onClick={onClickLike}>
                    <CommentLikeImg src={imgUrl} alt="like"/>
                    <LikePara isLiked={isLiked}>Like</LikePara>
                </CommentLikeButton>
                <DeleteButton onClick={onDeleteItem}>
                    <DeleteImg src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete"/>
                </DeleteButton>
            </ActionContainer>
            <HrLine/>
        </CommentItemContainer>
    )

}

export default CommentItem