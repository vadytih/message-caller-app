import {Button} from "./Button";
import {historiUnitType} from "./Caller";
import {SoshelFormButton} from "./SoshelFormButton";
import s from './HistoriNumber.module.css'

type HistoriNumberPropsType = {
    histori: Array<historiUnitType>
    remuvHistoriUnit: (id:string)=>void
    className?: string
}

export const HistoriNumber = (props: HistoriNumberPropsType) => {


    return (
        <div>
            {
                props.histori.map(t => {
                    return (
                        <div key={t.id} className={s.wrapper}>
                            <Button className={props.className ? props.className : ''} callback={() => props.remuvHistoriUnit(t.id)} name={'x'}/>
                            <span>{t.phone}</span>
                            <SoshelFormButton className={props.className ? props.className : ''} phone={t.phone} name={'WhatsApp'}/>
                            <SoshelFormButton className={props.className ? props.className : ''} phone={t.phone} name={'Viber'}/>
                        </div>
                    )
                })
            }
        </div>
    )
}