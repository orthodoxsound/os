fetch('https://discord-backend-npqh.onrender.com/server-info')
  .then(res => res.json())
  .then(data => {
    const memberList = data.members.join(', ');
    const channelList = data.channels.join(', ');

    document.getElementById('discord-info').innerText =
      `Discord Server: ${data.name}\n` +
      `Online Members: ${data.memberCount}\n` +
      `Invite: ${data.invite}\n\n` +
      `Channels: ${channelList}\n\n` +
      `Online Now: ${memberList}`;
  })
  .catch(err => {
    document.getElementById('discord-info').innerText = 'Failed to load server info';
    console.error(err);
  });
