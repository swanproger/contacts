export const User = ({name,surname,phonenumber}) => (
<li>
    <h2 className="contact-text">{name} {surname}</h2>
    <h3 className="contact-text">{phonenumber}</h3>
</li>
)