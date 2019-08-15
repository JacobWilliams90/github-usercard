/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/JacobWilliams90')
  .then((response) => {
    console.log(response.data)
  })

  .catch((error) => {
    console.log('Network request was unsuccessful')
    console.log(error)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



function template(obj) {
  let div = document.createElement('div')
  div.classList.add('card')
  let img = document.createElement('img')
  div.appendChild(img)
  img.src = obj.avatar_url
  let div2 = document.createElement('div')
  div.appendChild(div2)
  div2.classList.add('card-info')
  let title = document.createElement('h3')
  div2.appendChild(title)
  title.classList.add('name')
  title.textContent = obj.name
  let p = document.createElement('p')
  p.classList.add('username')
  p.textContent = obj.login
  div2.appendChild(p)
  let p2 = document.createElement('p')
  p2.textcontent = `Location: ${obj.location}`
  div2.appendChild(p2)
  let profile = document.createElement('p')
  let a = document.createElement('a')
  profile.textContent = 'Profile: '
  a.href = obj.html_url
  a.textContent = obj.html_url
  div2.appendChild(p3)
  profile.appendChild(a)
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`
  div2.appendchild(followers)
  div2.appendchild(following)
  div2.appendchild(bio)

  return div
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
