import {Button} from "./Button";
import {useState} from "react";
import s from './InputNumber.module.css'


type InputNumberPropsType = {
    addHistori: (phone:string)=>void
}

export const InputNumber = (props: InputNumberPropsType) => {
    const [inputValue, setInput] = useState<string>('')

    const onChangeInputHandler = (input: string) => {
        setInput(input)
    }

    const inputClear = () => {
        setInput('')
    }

    const addButtonHandler = () => {
        props.addHistori(inputValue)
        inputClear()
    }

    return (
        <div>
            <input className={s.input} value={inputValue} type={"text"} onChange={(event)=>onChangeInputHandler(event.currentTarget.value)}/>
            <Button className={s.bnt} callback={inputClear} name={'очист.'}/>
            <Button className={s.bnt} callback={addButtonHandler} name={'Применить'}/>
        </div>
    )
}
