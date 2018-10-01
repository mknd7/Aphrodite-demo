import { StyleSheet, css } from 'aphrodite';


// Declare styles for avatar
const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    padding: 10,
    position: 'relative'
  },

  'avatar-img': {
    width: '100%',
    borderRadius: '50%'
  },

  presence: {
    borderRadius: '50%',
    width: 12,
    height: 12,
    border: '2px solid #fff',
    position: 'absolute',
    right: 8,
    bottom: 8
  },

  online: {
    backgroundColor: '#78D700'
  },

  offline: {
    backgroundColor: '#939EAE'
  }
});


// Create avatar template for use
const avatarTemplate = document.createElement('template');
avatarTemplate.innerHTML = `
  <figure class = "${css(styles.avatar)}">
    <img src="img/avatar.png" alt="Profile photo" class = "${css(styles['avatar-img'])}">
    <span class="presence-dot ${css(styles.presence, styles.offline)}"></span>
  </figure>
`;


// Create avatar, attach shadow DOM
export default class Avatar extends HTMLElement {
  constructor() {
    super();
    this.appendChild(avatarTemplate.content.cloneNode(true));
    this.style.display = 'inline-block';
  }

  // Attributes listed in this array are listened to for changes
  static get observedAttributes() {
    return ['presence'];
  }

  // Callback when attribute is changed
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'presence':
        this.querySelector('.presence-dot').classList.add(`${css(styles[newValue])}`);
        if(oldValue) {
          this.querySelector('.presence-dot').classList.remove(`${css(styles[oldValue])}`);
        }
        break;
    }
  }
}