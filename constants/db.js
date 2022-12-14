class Database {
    data = {
        users: [
            {
                id: 1,
                name: 'Jakov Jonjic',
                email: 'jjonjic@fesb.hr',
                password: '123456',
            },
            {
                id: 2,
                name: 'Mihael Baresic',
                email: 'mbaresic@fesb.com',
                password: '123456',
            },
            {
                id: 3,
                name: 'Marino Barada',
                email: 'mbarada@fesb.hr',
                password: '123456',
            },
        ],
    };

    getUserByEmailAndPassword(email, password) {
        return this.data.users.find(
            (user) => user.email === email && user.password === password
        );
    }

    getUserById(id) {
        return this.data.users.find((user) => user.id === id);
    }
}

export default Database;
