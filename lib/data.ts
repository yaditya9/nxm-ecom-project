type Post = {
    /* name: string; */
    id: string;
    name: string;
    email: string;
    password: string;
    date: Date;
}
let users: Post[] = [];

export const getUser = () => users;

export const addUser = (user: Post) => {
    const existingUser = users.find(u => u.email === user.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
    users.push(user);
};

export const deleteUser = (id: string) => {
    users = users.filter((user) => user.id !== id);
};

export const getById = (id: string) => {
    return users.find((post)=>post.id===id)
}

