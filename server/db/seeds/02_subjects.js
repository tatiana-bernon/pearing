exports.seed = (knex) => {
  return knex('subjects').del()
    .then(() => {
      return knex('subjects').insert([
        { id: 1, subject: 'API Architectures' },
        { id: 2, subject: 'API Routes and Postman' },
        { id: 3, subject: 'Callbacks' },
        { id: 4, subject: 'Client-side Routing' },
        { id: 5, subject: 'Data Modeling Entity Relationships' },
        { id: 6, subject: 'Database CRUD Operations (create, Read, Update, Delete)' },
        { id: 7, subject: 'Database development with SQLite3 and Knex.js' },
        { id: 8, subject: 'Database maintenance using migrations and seed data' },
        { id: 9, subject: 'ES6 syntax' },
        { id: 10, subject: 'Express.js' },
        { id: 11, subject: "Filesystem access with Node's 'fs'" },
        { id: 12, subject: 'Funcional-programming concepts' },
        { id: 13, subject: 'HTTP requests/responses' },
        { id: 14, subject: 'JavaScript Fundamentals (objects, arrays, functions)' },
        { id: 15, subject: 'Jest' },
        { id: 16, subject: 'JSX syntax' },
        { id: 17, subject: 'Node.js' },
        { id: 18, subject: 'OAuth, Authentication and Autorization' },
        { id: 19, subject: 'Objet-Oriented Programming' },
        { id: 20, subject: 'Promises' },
        { id: 21, subject: 'Prototypal Inheritance' },
        { id: 22, subject: 'React Components' },
        { id: 23, subject: 'React Context' },
        { id: 24, subject: 'React Hooks' },
        { id: 25, subject: 'React Props' },
        { id: 26, subject: 'Redux' },
        { id: 27, subject: 'RESTful Web services' },
        { id: 28, subject: 'Server-side templating (Handlebars.js)' },
        { id: 29, subject: 'Superagent and Supertest' },
        { id: 30, subject: 'Unit Testing ' },
        { id: 31, subject: 'Webpack' }
      ])
    })
}
