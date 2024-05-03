import useAuth from "../../hooks/useAuth";

function ProfilePage() {
  const { user } = useAuth();
  return (
    <div>
      <h1 style={{ fontSize: "4rem" }}>👤</h1>
      email: {user.email} <br /> userId : {user.userId}
    </div>
  );
}

export default ProfilePage;
