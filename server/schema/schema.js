const graphql = require('graphql');

//Models
const Techie = require('../models/techie');

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
    about: { type: GraphQLString },
    img: { type: GraphQLString },
    stack: { type: GraphQLString },
    current_role: { type: GraphQLString },
    years_in_tech: { type: GraphQLString },
    twitter: { type: GraphQLString },
    instagram: { type: GraphQLString },
    linkedin: { type: GraphQLString },
    github: { type: GraphQLString },
    website: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    techie: {
        type: TechieType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args){
          return Techie.findById(args.id);
        }
    },
    techies: {
      type: GraphQLList(TechieType),
      resolve(parent, args){
        return Techie.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addTechie: {
      type: TechieType,
      args: {
        name: { type: GraphQLString },
        bio: { type: GraphQLString },
        about: { type: GraphQLString },
        img: { type: GraphQLString },
        stack: { type: GraphQLString },
        current_role: { type: GraphQLString },
        years_in_tech: { type: GraphQLString },
        twitter: { type: GraphQLString },
        instagram: { type: GraphQLString },
        linkedin: { type: GraphQLString },
        github: { type: GraphQLString },
        website: { type: GraphQLString }

      },
      resolve(parent, args){
        let techie = new Techie({
          name: args.name,
          bio: args.bio,
          about: args.about,
          img: args.img,
          stack: args.stack,
          current_role: args.current_role,
          years_in_tech: args.years_in_tech,
          twitter: args.twitter,
          instagram: args.instagram,
          linkedin: args.linkedin,
          github: args.github,
          website: args.website
        });
        
        return techie.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});