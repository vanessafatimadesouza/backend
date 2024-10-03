# BlogApp

**BlogApp** é uma aplicação web desenvolvida com Node.js e MongoDB, que permite aos usuários criar, visualizar e gerenciar postagens de blog. A aplicação possui uma interface amigável, onde os usuários podem:

- **Visualizar Postagens:** Navegar pelas postagens disponíveis, categorizadas por temas específicos.
- **Gerenciar Categorias:** Administradores podem adicionar, editar e excluir categorias para organizar o conteúdo.
- **Criar Postagens:** Administradores têm a capacidade de criar novas postagens, incluindo título, conteúdo e categorias associadas.
- **Sistema de Autenticação:** Utiliza o Passport.js para gerenciar a autenticação de usuários, garantindo que apenas usuários autorizados possam acessar as áreas administrativas.
- **Mensagens de Feedback:** Integração com a biblioteca `connect-flash` para fornecer mensagens de sucesso e erro ao usuário durante a navegação.

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript no lado do servidor.
- **Express.js:** Framework web para Node.js.
- **MongoDB:** Banco de dados NoSQL para armazenamento de dados.
- **Handlebars:** Motor de template para renderização de páginas dinâmicas.
- **Passport.js:** Middleware para autenticação de usuários.
- **Connect-flash:** Biblioteca para mensagens de feedback ao usuário.
