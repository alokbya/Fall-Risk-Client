
const deleteOrg = async (org) => {
    const response = await fetch('http://localhost:3001/orgs', {
      method: 'DELETE',
      body: JSON.stringify({ id: org._id }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.status;
  }

//   const refresh = async (cookies) => {
//     const response = fetch('http://localhost:3001/refresh', {
//           credentials: 'include',
//           headers: {
//               'Content-Type': 'application/json',
//               'Session-Token': cookies['session']
//           },
//       })
//       .then(async (response) => {
//           return response.status;
//       })
//       .catch(error => {
//           console.log('error in promise during login:', error);
//           alert(error);
//       });
//   }

  export {deleteOrg}