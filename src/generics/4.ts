type UserSecond = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserSecond>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
