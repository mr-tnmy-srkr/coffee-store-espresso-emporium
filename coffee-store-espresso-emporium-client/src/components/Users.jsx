import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);

  const handleDelete = (id) => {
    fetch(
      `https://coffee-store-espresso-emporium-server-neon.vercel.app/user/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("cart item delete successful");

          //remove thw user from ui

          const remainingUsers = users.filter((user) => user._id !== id);
          setUser(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">
        Loaded users : {loadedUsers.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table border-4 static w-[50vw] mx-auto ">
          {/* head */}
          <thead className="">
            <tr className="bg-green-400 text-black flex text-right">
              <th className=" ">Serial</th>
              <th className="flex-1 pr-8">Email</th>
              <th className="flex-1 ">Created At</th>
              <th className="flex-1 ">Created At</th>
              <th className="flex-1">Action</th>
            </tr>
          </thead>
          <tbody className="table">
            {users.map((user, idx) => (
              <tr key={user._id} className="space-y-4">
                <th className="h-[]">{idx + 1}</th>
                <td className="h-[]">{user.email}</td>
                <td className="h-[]">{user.createdAt}</td>
                <td className="h-[]">{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
