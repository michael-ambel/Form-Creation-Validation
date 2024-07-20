const fetchUserData = async function(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        //console.log(users);
        dataContainer.innerHTML = ''
        let userList = document.createElement('ul')
        users.forEach((user)=> {
            const li = document.createElement('li')
            li.textContent = user.name;
            console.log(li);
            userList.appendChild(li);
            dataContainer.appendChild(userList);
        })
    }
    catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        
    }
}

document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
})