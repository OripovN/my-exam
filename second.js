fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let users = data;
    let second_div = document.querySelector(".second_div");

    console.log(users);
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const selectedUser = users.find((user) => user.id == userId);
    second_div.innerHTML = `
      <div class=" italic  font-mono shadow-2xl shadow-gray-800 second text-white bg-gray-700 p-8 mt-4 rounded-lg">
        <p>City: ${selectedUser.address.city}</p>
        <p>Street: ${selectedUser.address.street}</p>
        <p>Suite: ${selectedUser.address.suite}</p>
        <p>Zipcode: ${selectedUser.address.zipcode}</p>

        <h2>BS: ${selectedUser.company.bs}</h2>
        <h2>CatChPhrase: ${selectedUser.company.catchPhrase}</h2>
        <h2>Name: ${selectedUser.company.name}</h2>

        <h3>Username: ${selectedUser.username}</h3>
        <h3>Website: ${selectedUser.website}</h3>
        <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 mt-2 rounded">
          <a href="./index.html">Back</a>
        </button>
      </div>
    `;
  });
