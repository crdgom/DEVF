const UserCard = ({ name, validate }) => {
  return (
    <article>
      <h2>{name}</h2>
      <p>{validate ? '😃' : '😪'}</p>
    </article>
  )
}

export default UserCard
