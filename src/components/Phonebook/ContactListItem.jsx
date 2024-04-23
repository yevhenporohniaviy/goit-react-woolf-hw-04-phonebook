const ContactListItem = ({ id, name, number, onRemoveContact}) => {
  return (
    <li>
      <p>
        {name} {number}
      </p>
      <button onClick={() => onRemoveContact(id)}>Delete</button>
    </li>
  );
}
 
export default ContactListItem;