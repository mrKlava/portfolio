import "./button.scss"


function Button({ children, type = "primary", onClick, link = false }) {
  return (
    <a
      href={link ? link : null}
      target={link ? "_blank" : null}
      rel="noreferrer"
      onClick={onClick}
      className={type ? `button --${type}` : "button"}
    >
      {children}
    </a>
  )
}

export default Button;
