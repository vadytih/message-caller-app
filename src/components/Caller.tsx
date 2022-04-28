import {InputNumber} from "./InputNumber";
import {Button} from "./Button";
import {HistoriNumber} from "./HistoriNumber";
import {useState} from "react";
import {v1} from "uuid";
import s from './Caller.module.css'

export type historiUnitType = {
    id: string
    phone: string
    comment: string
}

export const Caller = () => {
    const [histori, setHistori] = useState([{id: 'test', phone: '375447258800', comment: 'хуйло '}])
    const [error, setError] = useState([
        {nameErr: "1", activ: false, tittle: "поле не может быть пустым" },
        {nameErr: "2", activ: false, tittle: "не может содержать буквы" },
        {nameErr: "3", activ: false, tittle: "слишком короткий номер" },

    ])

    const addHistori = (phone: string) => {
        const id = v1();
        phone ?
        setHistori([{id: id, phone: phone, comment: ''}, ...histori])
        : setError([...error].map(t=> t.nameErr === '1' ? {...t, activ: true} : {...t}))

    }

    const remuvHistoriUnit = (id: string) => {
        setHistori(histori.filter(f => f.id !== id ? {...f} : ''))
    }

    const commentHandler = (id: string, comment: string) => {
        setHistori([...histori].map(f => f.id === id ? {...f, comment: comment} : f))
    }

    const errorClean = () => {
        setError([...error].map(t=> t.activ ? {...t, activ: false} : {...t}))
    }


    return (
        <div className={s.wrapper}>
            <InputNumber addHistori={addHistori} errorClean={errorClean}/>
            {error.map(t => t.activ ? <div className={s.error}>Ошибка №{t.nameErr}: {t.tittle}</div>: <></> )}
            <HistoriNumber histori={histori} remuvHistoriUnit={remuvHistoriUnit} commentHandler={commentHandler}/>
        </div>
    )
}