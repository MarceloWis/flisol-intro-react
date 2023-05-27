const ADD_GITHUB_USER = 'ADD_GITHUB_USER';
const REMOVE_GITHUB_USER = 'REMOVE_GITHUB_USER';

export default function addGithubUserAction(user) { 
  return { 
    type: ADD_GITHUB_USER, 
    payload: {
      ...user
    }
  }
}

// export function removeGithubUserAction() { 
//   return { 
//     type: REMOVE_GITHUB_USER, 
//     payload: {}
//   }
// }