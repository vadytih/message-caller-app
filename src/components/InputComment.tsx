
type InputCommentPropsType = {
    commentHandler: (id: string, comment: string)=>void
    id: string
    historiComment: string
}

export const InputComment = (props: InputCommentPropsType) => {

    const onChangeHandler = (inputValue: string) => {
        props.commentHandler(props.id, inputValue)
    }

    return (
        <input value={props.historiComment} type={"text"} placeholder="коментарий..." onChange={(event)=>onChangeHandler(event.currentTarget.value)}/>
    )
}