const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const data = require('../database/data');

const resolvers = {
  Query: {
    name() { return data.name },
    github() { return data.github },
    twitter() { return data.twitter },
    employed() { return data.employed },
    bio() { return data.bio },
    availableForCoffee() { return data.availableForCoffee },
    availableForProjects() { return data.availableForProjects },
    work() { return data.projects },
    sideProjects() { return data.sideProjects }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: true,
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
