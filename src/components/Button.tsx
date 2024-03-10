type ButtonPropsType = {
    className: string;
    title:string
    onClick?:()=>void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
    <button onClick={props.onClick} className={props.className} disabled={props.disabled}>
        {props.title}
    </button>)
}