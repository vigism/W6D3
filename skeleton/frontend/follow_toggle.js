const APIUtil = require('./api_util.js');
class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.click(e => this.handleClick(e));
  }

  render() {
    // debugger;
    if (['following', 'unfollowing'].includes(this.followState)) {
      // debugger;
      this.$el.attr('disabled', 'disabled');
      return;
    } else {
      this.$el.removeAttr('disabled');
    }
    
    this.$el.empty();
    if(!this.followState){
      this.$el.html("Follow");
    } else{
      this.$el.html("Unfollow");
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (['following', 'unfollowing'].includes(this.followState)) return;
    // this.followState ? APIUtil.unfollowUser(this.userId) : APIUtil.followUser(this.userId);
    let command = this.followState ? APIUtil.unfollowUser : APIUtil.followUser;

    !this.followState ? this.followState = 'following' : this.followState = 'unfollowing'; 
    this.render();
    command(this.userId)
      // .then(() => { this.followState = !this.followState; })
      .then(() => {
        if (this.followState === 'following') { 
          this.followState = true;
        } else {
          this.followState = false;
        }
      })
      .then(this.render.bind(this))
      // .catch( () => {      
      //   if (this.followState === 'following') {
      //     this.followState = false;
      //   } else {
      //     this.followState = true;
      //   }
      // });

  }
}

const p = new Promise((successCallback) => {
  if (true) successCallback();
});


module.exports = FollowToggle;