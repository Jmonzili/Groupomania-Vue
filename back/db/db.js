//  Hash du faux mot de passe 123456
const fakeMdp = '$2b$10$0SXM./S5G51eMVzVLbg7d.tqrltNDJ7U2ScMU1oLgbzdo32Hn/tK.';

const user1 = { email: 'test1@gmail.com', password: fakeMdp };
const user2 = { email: 'test2@gmail.com', password: fakeMdp };
const user3 = { email: 'test3@gmail.com', password: fakeMdp };
const users = [user1, user2, user3];

module.exports = { users };
