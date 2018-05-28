const graphql = require('graphql');
const _ = require('lodash');

//Models
const Social = require('../models/social');
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

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addTechie: {
      type: TechieType,
      args: {
        name: { type: GraphQLString },
        bio: { type: GraphQLString },
        img: { type: GraphQLString },
        stack: { type: GraphQLString },
        position: { type: GraphQLString },
        socialId: { type: GraphQLID }
      },
      resolve(parent, args){
        let techie = new Techie({
          name: args.name,
          bio: args.bio,
          img: args.img,
          stack: args.stack,
          position: args.position,
          socialId: args.socialId
        });
        
        return techie.save();
      }
    },

    addSocial:{
      type: SocialType,
      args: {
        twitter: { type: GraphQLString },
        instagram: { type: GraphQLString },
        website: { type: GraphQLString },
        linkedin: { type: GraphQLString },
        github: { type: GraphQLString }
      },
      resolve(parent, args){
        let social = new Social({
          twitter: args.twitter,
          instagram: args.instagram,
          website: args.website,
          linkedin: args.linkedin,
          github: args.github
        });

        return social.save();   
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});