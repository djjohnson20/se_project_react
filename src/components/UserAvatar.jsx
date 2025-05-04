function UserAvatar({ name = "", avatar }) {
  const firstLetter = name.charAt(0).toUpperCase();
  const placeholderStyles = {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#cbd5e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
  };

  return avatar ? (
    <img
      src={avatar}
      alt={`${name}'s avatar`}
      style={{ width: "56px", height: "56px", borderRadius: "50%" }}
    ></img>
  ) : (
    <div style={placeholderStyles}>{firstLetter}</div>
  );
}

export default UserAvatar;
