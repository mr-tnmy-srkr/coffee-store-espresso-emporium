import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        Loaded users : {loadedUsers.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table border-4 static w-auto">
          {/* head */}
          <thead>
            <tr className="bg-green-400">
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table">
           
            <tr className="">
              {loadedUsers.map((user,idx) => (
                <tr key={user._id}>
                  <th>{idx+1}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                </tr>
              ))}
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
