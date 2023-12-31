const users = [
  {
    id: 1,
    name: 'Peterson Wiggers',
    age: 19,
    profession: 'Programador',
  },
  {
    id: 2,
    name: 'Maria Eduarda',
    age: 17,
    profession: 'Jovem Aprendiz',
  },
  {
    id: 3,
    name: 'Jocelma Ramos',
    age: 42,
    profession: 'Funcionária Pública',
  },
  {
    id: 4,
    name: 'Riquelme dos Santos',
    age: 31,
    profession: 'Professor',
  },
];

const posts = [
  {
    id: 1,
    title: 'Foto Ilustrativa',
    content: 'Foto da Raquel',
    publishDate: '15/09/2023',
  },
  {
    id: 2,
    title: 'Mensagem para Família',
    content: 'Bom dia Família',
    publishDate: '15/06/2004',
  },
  {
    id: 3,
    title: 'Noticia',
    content: 'Acidente na primeiro de maio envolvendo duas motocicletas',
    publishDate: '07/12/2014',
  },
  {
    id: 4,
    title: 'Noticia no Ato',
    content: 'Jovens ficam milhonarios ao criar um Software revolucionário',
    publishDate: '15/09/2023',
  },
];

const books = [
  {
    id: 1,
    title: 'Roemue e Julieta',
    authorId: 1,
  },
  {
    id: 2,
    title: 'Harry Pother',
    authorId: 1,
  },
  {
    id: 3,
    title: 'O poder do Hábito',
    authorId: 2,
  },
  {
    id: 4,
    title: 'O homem mais rico da Babilônia',
    authorId: 2,
  },
  {
    id: 5,
    title: 'Pai Rico, Pai Pobre',
    authorId: 4,
  },
  {
    id: 6,
    title: '15 Regras para a vida',
    authorId: 4,
  },
];

function GetAllPosts() {
  return posts;
}

function GetUser(id) {
  return users.find((x) => x.id === id);
}

function GetUsers() {
  return users;
}

function ModifyTitlePost(title, id) {
  posts[id].title = title;
  return posts[id];
}

function PostUser(user) {
  if (!emailValidation(user.email)) {
    return false;
  }
  users.push(user);
  return true;
}

function getAuthorBooks(id) {
  return books.filter((book) => book.authorId == id);
}

function emailValidation(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = {
  GetAllPosts,
  GetUser,
  GetUsers,
  ModifyTitlePost,
  PostUser,
  getAuthorBooks,
};
