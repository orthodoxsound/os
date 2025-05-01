fetch('https://discord-backend-npqh.onrender.com/server-info')
  .then(res => res.json())
  .then(data => {
    document.getElementById('discord-info').innerText =
      `Server: ${data.name}\nMembers: ${data.memberCount}`;
  })
  .catch(err => {
    document.getElementById('discord-info').innerText = 'Failed to load server info';
    console.error(err);
  });
