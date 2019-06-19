const FollowToggle = require('./follow_toggle.js');


$(() => {
  let followButtons = $('.follow-toggle');

  for (let i = 0; i < followButtons.length; i++) {
    let button = new FollowToggle(followButtons[i]);
  }

});

