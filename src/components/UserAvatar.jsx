function UserAvatar({ name = "", avatar, size = 40 }) {
  const firstLetter = name.charAt(0).toUpperCase();
  const placeholderStyles = {
    width: size,
    height: size,
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
      style={{ width: size, height: size, borderRadius: "50%" }}
    ></img>
  ) : (
    <div style={placeholderStyles}>{firstLetter}</div>
  );
}

export default UserAvatar;
