import { gql } from 'apollo-boost';


const getTechies = gql`
  {
    techies{
      id
      name
      bio
      img
      stack
      current_role
      years_in_tech
      twitter
      instagram
      linkedin
      github
      website
    }
  }
`

const getTechie = gql`
  query($id: String){
    techie(id: $id){
      id
      name
      bio
      img
      stack
      current_role
      years_in_tech
      twitter
      instagram
      linkedin
      github
      website
    }
  }
`

const addTechieMutation = gql`
  mutation($name: String!,
           $bio: String!,
           $img: String!,
           $stack: String!,
           $current_role: String!,
           $years_in_tech: String!,
           $twitter: String,
           $instagram: String,
           $linkedin: String,
           $github: String,
           $website: String){
    addTechie(
      name: $name,
      bio: $bio,
      img: $img,
      stack: $stack,
      current_role: $current_role,
      years_in_tech: $years_in_tech,
      twitter: $twitter,
      instagram: $instagram,
      linkedin: $linkedin,
      github: $github,
      website: $website){
        name
        id
      }
  }
`

export{ getTechies, addTechieMutation, getTechie };