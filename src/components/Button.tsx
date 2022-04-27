type ButtonPropsType = {
    name: string
    callback: ()=>void
    className: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        console.log(props.name)
        props.callback()
    }

    return (
        <button className={props.className ? props.className: ''} onClick={onClickHandler}>{props.name}</button>
    )
}