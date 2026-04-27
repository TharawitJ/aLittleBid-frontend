const Avatar = ({ user }) => {
  // ถ้าไม่มี user ให้แสดงไอคอนว่างๆ
  if (!user) return <div className="w-10 h-10 rounded-full bg-gray-200" />;

  // ถ้ามี avatarUrl ให้แสดงรูป
  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="w-full h-full flex grow justify-center align-middle items-center"
      />
    );
  }

  // ถ้าไม่มีรูป ให้แสดงตัวอักษรย่อจากชื่อ
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "U";
  return (
    <div className="w-full h-full flex grow justify-center align-middle items-center">
      {initials}
    </div>
  );
};

export default Avatar;
