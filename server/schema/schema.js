const graphql = require('graphql');
const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema

}  = graphql;

const TechieType= new GraphQLObjectType({
  name: 'Techie',
  fields: () => ({
    id: {type: GraphQLString},
    name: { type: GraphQLString },
    bio: { type: GraphQLString },
    img: { type: GraphQLString },
    stack: { type: GraphQLString },
    position: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuertType',
  fields: {
    techie: {
        type: TechieType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args){
          //get data from db
        }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});