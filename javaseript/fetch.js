function getGitHubUser(username)
{
const ufrl=https://api.github.com/users/${username};
fetch(url)
  .then(response=>
  {
    if(!responce.ok)
    {
        throw new Error('user not found:'${responced.status});
    }
    return responce.json();


  })
  .then(userData=>{
    console.log("user data",userData);
  })
  .catch(error=>
  {
    confirm.error("error fetching user:",error);
  });
}
    getGitHubUser("dhanunjayaraoveernala@gmail.com")
