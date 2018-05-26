const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLList

}  = graphql;

//Models
const Social = require('../models/social');
const Techie = require('../models/techie');

const TechieType = new GraphQLObjectType({
  name: 'Techie',
  fields: () => ({
    id: {type: GraphQLID},
    name: { type: GraphQLString },
    bio: { type: GraphQLString },
    img: { type: GraphQLString },
    stack: { type: GraphQLString },
    position: { type: GraphQLString },
    social: {
      type: SocialType,
      resolve(parent, args){
        return Social.findById(parent.socialId)
      }
    }
  })
});

const SocialType = new GraphQLObjectType({
  name: 'Social',
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
  name: 'RootQueryType',
  fields: {
    techie: {
        type: TechieType,
        args: { id: { type: GraphQLID }},
        resolve(parent, args){
          return Techie.findById(args.id);
        }
    },
    social: {
      type: SocialType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        //get data from db 
        return Social.findById(args.id);
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

module.exports = new GraphQLSchema({
  query: RootQuery
});