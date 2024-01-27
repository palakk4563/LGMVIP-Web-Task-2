const UserCard = ({id,first_name,last_name,email,avatar}) => {
     return (
     <div className="grid-items" key={id}>
      <h2>{first_name}{" "}{last_name}</h2>
      <p>{email}</p>
      <img src={avatar}></img>
      </div>
     )
}

export default UserCard;