fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let users = data;
    console.log(users);
    users.forEach((user) => {
      first__div.innerHTML += `
        <div class="div justify-center content-center font-sans font-medium shadow-2xl shadow-gray-800 p-1 items-center  bg-gray-700 mt-4 mb-2 rounded-lg text-gray-100">
          <a class="hrefbu pl-[10px] pt-[20px] italic hover:text-emerald-300 active:text-emerald-500 focus:text-emerald-600 " href="./second.html?id=${user.id}"><p>Name: ${user.name}</p></a> 
          <p>Email: ${user.email}</p>
          <button class="bg-red-600  hover:bg-red-700 text-white font-bold py-1 px-4 mt-8 rounded">
            <a href="./second.html?id=${user.id}">More ...</a>
          </button>
        </div>
        
      `;
    });
  });
