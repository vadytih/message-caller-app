import {InputNumber} from "./InputNumber";
import {Button} from "./Button";
import {HistoriNumber} from "./HistoriNumber";
import {useState} from "react";
import {v1} from "uuid";
import s from './Caller.module.css'

export type historiUnitType = {
    id: string
    phone: string
}

export  const Caller = () => {
    const [histori, setHistori] = useState([{id:'',phone:''}])

    const addHistori = (phone: string) => {
        const id = v1()
        setHistori([{id: id, phone: phone},...histori])
        console.log(histori)
    }

    const remuvHistoriUnit = (id: string) => {
        setHistori(histori.filter(f => f.id !== id ? {...f}: ''))
    }

    return (
        <div className={s.wrapper}>
            <InputNumber addHistori={addHistori}/>
            <HistoriNumber histori={histori} remuvHistoriUnit={remuvHistoriUnit}/>
        </div>
    )
}