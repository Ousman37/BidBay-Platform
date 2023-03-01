// basic-profiles.js

const profileList = document.getElementById('profile-list');

// Let's take the accessToken
const authToken = localStorage.getItem('authLogin');

const options = {
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
};

const profilesURL = 'https://api.noroff.dev/api/v1/auction/profiles';

// Fetch all profiles and display them
function displayProfiles() {
  fetch(profilesURL, options)
    .then(response => response.json())
    .then(profiles => {
      // Create a list item for each profile
      profiles.forEach(profile => {
        const name = profile.name;
        const email = profile.email;
        const avatar = profile.avatar;
        const credits = profile.credits;
        const wins = profile.wins?.join(', ') ?? 'None';
        const listings = profile._count.listings;

        const listItem = document.createElement('a');
        listItem.classList.add('list-group-item', 'list-group-item-action');
        listItem.innerHTML = `
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${name}</h5>
            <small>${credits} credits</small>
          </div>
          <img src="${avatar}" alt="${name}" class="img-fluid rounded mb-2">
          <p class="mb-1">Email: ${email}</p>
          <p class="mb-1">Wins: ${wins}</p>
          <p class="mb-0">Listings: ${listings}</p>
        `;
        profileList.appendChild(listItem);
      });
    })
    .catch(err => {
      console.log('Error -- ', err.message);
    });
}

// Call the displayProfiles function to fetch and display all profiles
displayProfiles();
