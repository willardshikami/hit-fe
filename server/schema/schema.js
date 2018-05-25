const graphql = require('graphql');
const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLList

}  = graphql;

const TechieType = new GraphQLObjectType({
  name: 'Techie',
  fields: () => ({
    id: {type: GraphQLID},
    name: { type: GraphQLString },
    bio: { type: GraphQLString },
    img: { type: GraphQLString },
    stack: { type: GraphQLString },
    position: { type: GraphQLString },
    link: {
      type: LinkType,
      resolve(parent, args){
        return _.find(link, { id: parent.linkId})
      }
    }
  })
});

const LinkType = new GraphQLObjectType({
  name: 'Link',
  fields: () => ({
    id: {type: GraphQLID},
    twitter: { type: GraphQLString },
    instagram: { type: GraphQLString },
    website: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    github: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuertType',
  fields: {
    techie: {
        type: TechieType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args){
          //get data from db
        }
    },
    link: {
      type: LinkType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        //get data from db 
      }
    },
    techies: {
      type: GraphQLList(TechieType),
      resolve(parent, args){
        return techies;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});