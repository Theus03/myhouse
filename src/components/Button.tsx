type ButtonProps = {
    _type: String,
    _textButton: String
}

export default function Button({ _type, _textButton } : ButtonProps) {
    return (
        <div className="container-button">
            <button className={'btn ' + (_type == "outline" ? "outline" : "solid")} type="button">{_textButton}</button>
        </div>
    )
}