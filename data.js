const user = {
  id: 1,
  name: 'Peterson Wiggers',
  yers: 19,
  profession: 'Programador',
};

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

function GetAllPosts() {
  return posts;
}

function GetUser() {
  return user;
}

// export { GetAllPosts, GetUser, user, posts };
module.exports = {
  GetAllPosts,
  GetUser,
};
