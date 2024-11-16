document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    let users = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            users.push({ name, email });
            updateUserList();
            form.reset();
        }
    });

    function updateUserList() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${user.name} - ${user.email}
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            `;
            userList.appendChild(li);
        });
    }

    window.editUser = function(index) {
        const user = users[index];
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        users.splice(index, 1);
        updateUserList();
    };

    window.deleteUser = function(index) {
        users.splice(index, 1);
        updateUserList();
    };
});
