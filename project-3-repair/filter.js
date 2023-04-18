fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);

    const heading = document.createElement("h1");
    heading.textContent = "FILTER";
    heading.classList.add("heading_f");
    document.body.appendChild(heading);

    const createUserList = (users) => {
      const userList = document.createElement("div");
      userList.setAttribute("id", "cards");
      userList.classList.add("cards");

      users.forEach((user) => {
        const ul = document.createElement("ul");
        ul.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("user-img");
        const name = document.createElement("li");

        const username = document.createElement("li");

        const email = document.createElement("li");

        const link = document.createElement("a");
        link.classList.add("link");
        const phone = document.createElement("li");

        const company = document.createElement("li");
        const position = document.createElement("li");

        img.src = `https://robohash.org/10${user.username}.png`;

        name.textContent = `NAME: ${user.name}`;
        username.textContent = `USERNAME: ${user.username}`;
        phone.textContent = `PHONE: ${user.phone}`;
        email.textContent = `EMAIL: ${user.email}`;
        company.textContent = `COMPANY: ${user.company.name}`;
        position.textContent = `POSITION: ${user.company.catchPhrase}`;

        link.textContent = `WEBSITE: ${(link.href = user.website)}`;

        ul.appendChild(img);
        ul.appendChild(name);
        ul.appendChild(username);
        ul.appendChild(phone);
        ul.appendChild(email);
        ul.appendChild(company);
        ul.appendChild(position);
        ul.appendChild(link);

        userList.appendChild(ul);
      });

      return userList;
    };

    document.body.appendChild(createUserList(data));

    const searchInput = document.createElement("input");
    searchInput.classList.add("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "hledat");

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();

      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );

      const userList = document.getElementById("cards");

      userList.innerHTML = "";

      userList.appendChild(createUserList(filteredUsers));
    });

    document.body.insertBefore(searchInput, heading.nextSibling);
  });
