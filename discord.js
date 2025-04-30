fetch('http://localhost:3000/server-info') // replace with your real domain when deployed
  .then(res => res.json())
  .then(data => {
    document.getElementById('discord-info').innerText =
      `Server: ${data.name}\nMembers: ${data.memberCount}`;
  })
  .catch(err => {
    document.getElementById('discord-info').innerText = 'Failed to load server info';
    console.error(err);
  });
