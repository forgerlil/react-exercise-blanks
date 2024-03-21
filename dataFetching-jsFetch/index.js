const ul = document.getElementById('users'); // Get the element where we will place our users
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

const renderUsers = (data) => {
  const users = data.results;
  console.debug({ users });

  return users.map((user) => {
    return (ul.innerHTML += `
    <li>
      <img src="${user.picture.medium}" />
      <p>${user.name.first} ${user.name.last}</p>
      <div>${user.email}</div>
    </li>`);
  });
};

/**
 * Don't edit the code above
 * ---
 * Below you will have to fetch the data from the link (stored in the variable url)
 * Once retrieved, you will pass the result as an argument of the function renderUsers
 */
