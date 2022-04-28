import {Button} from "./Button";
import {historiUnitType} from "./Caller";
import {SoshelFormButton} from "./SoshelFormButton";
import s from './HistoriNumber.module.css'
import {InputComment} from "./InputComment";

type HistoriNumberPropsType = {
    histori: Array<historiUnitType>
    remuvHistoriUnit: (id:string)=>void
    className?: string
    commentHandler: (id:string, comment: string) => void
}

export const HistoriNumber = (props: HistoriNumberPropsType) => {
    return (
        <div>
            {
                props.histori.map(t => {
                    const renderUnit = () => {
                        return (
                            <div key={t.id} className={s.wrapper}>
                                <Button className={props.className ? props.className : ''} callback={() => props.remuvHistoriUnit(t.id)} name={'x'}/>
                                <span className={s.phone}>{t.phone}</span>
                                <SoshelFormButton className={props.className ? props.className : ''} phone={t.phone} name={'WhatsApp'}/>
                                <SoshelFormButton className={props.className ? props.className : ''} phone={t.phone} name={'Viber'}/>
                                <InputComment historiComment={t.comment} id={t.id} commentHandler={props.commentHandler}/>
                            </div>
                        )
                    }

                    const renderError = () => {
                        return
                    }

                    return (
                        <>
                            {t.id !== 'test' ? renderUnit(): renderError()}
                        </>

                    )
                })
            }
        </div>
    )
}