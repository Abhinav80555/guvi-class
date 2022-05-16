function listUser(user) {
    const userList = document.querySelector(".user-list");
  
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";
  
    userContainer.innerHTML = ` 
        <img src=${user.avatar} alt=${user.name} class="user-avatar">
        <div>
            <p class="user-name">${user.name}</p>
            <p class="user-join">${new Date(user.createdAt).toDateString()}</p>
         </div>
        `;
  
    userList.append(userContainer);
  }
  
  // fetch("https://622c3a9a087e0e041e06219f.mockapi.io/users")
  //   .then((data) => data.json())
  //   .then((userData) => userData.forEach((user) => listUser(user)));
  
  async function loadUser() {
    const data = await fetch("https://622c3a9a087e0e041e06219f.mockapi.io/users");
    const userData = await data.json();
    userData.forEach((user) => listUser(user));
  }
  
  loadUser();