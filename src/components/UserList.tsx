import UserProfileCard from "./UserProfileCard";

export interface User {
    id: number;
    email: string;
    name: string;
}

const users: User[] = [
  {
    "id": 0,
    "email": "john@gmail.com",
    "name": "john",
  },
  {
    "id": 1,
    "email": "user1@gmail.com",
    "name": "user1",
  },
  {
    "id": 2,
    "email": "user2@gmail.com",
    "name": "user2",
  },
  {
    "id": 3,
    "email": "user3@gmail.com",
    "name": "user3",
  },
  {
    "id": 4,
    "email": "user4@gmail.com",
    "name": "user4",
  },
  
];


function UserList() {
    return (    
        <div className="user-profile-card">
            <h3>User Lists</h3>
            
            {users.map((user) => (
                <UserProfileCard key={user.id} user={user} />
            ))}
         </div>
         )
         }
export default UserList;