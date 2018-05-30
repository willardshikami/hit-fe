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
export default getTechies;