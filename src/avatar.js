import { StyleSheet, css } from 'aphrodite';


// Declare styles for avatar
const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    padding: 12,
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
    right: 10,
    bottom: 10
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
    <img src = "" alt="Profile photo" class = "${css(styles['avatar-img'])}">
    <span class="${css(styles.presence)}"></span>
  </figure>
`;


// Create avatar, attach shadow DOM
export default class Avatar extends HTMLElement {
  constructor() {
    super();
    this.appendChild(avatarTemplate.content.cloneNode(true));
  }

  // Attributes in this array are listened to for changes
  static get observedAttributes() {
    return ['presence', 'photo'];
  }

  // Callback when an attribute is changed
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'presence':
        if(oldValue && styles[oldValue]) {
          this.querySelector('span').classList.remove(css(styles[oldValue]));
        }
        if(newValue && styles[newValue]) {
          this.querySelector('span').classList.add(css(styles[newValue]));
        }
        break;
      case 'photo':
        this.querySelector('img').setAttribute('src', newValue);
        break;
    }
  }
}