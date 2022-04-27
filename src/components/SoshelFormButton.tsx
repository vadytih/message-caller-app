import {Button} from "./Button";

type SoshelFormButtonPropstType = {
    name: 'WhatsApp' | 'Viber'
    phone: string
    className: string
}

export const SoshelFormButton = (props: SoshelFormButtonPropstType) => {
    let linck = ''
    if (props.name.toLowerCase() === "viber") {
        linck = `viber://chat?number=%2B${props.phone}`
    }

    if (props.name.toLowerCase() === "whatsapp") {
        linck = `https://wa.me/+${props.phone}`
    }
    return (
        <form target={'_blank'} action={linck}>
            <Button className={props.className} name={props.name} callback={() => {}}/>
        </form>
    )
}
