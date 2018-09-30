import { StyleSheet, css } from 'aphrodite';


// Declare styles for avatar
const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    position: 'relative'
  },

  'avatar-img': {
    width: '100%',
    borderRadius: '50%'
  },

  presence: {
    borderRadius: '50%',
    width: 8,
    height: 8,
    border: '2px solid #fff',
    position: 'absolute',
    right: 0,
    bottom: 0
  }
});


// Create avatar template for use
const avatarTemplate = document.createElement('template');
avatarTemplate.innerHTML = `
  <figure class = "${css(styles.avatar)}">
    <img src="img/avatar.png" alt="Profile photo" class = "${css(styles['avatar-img'])}">
    <span class="${css(styles.presence)}"></span>
  </figure>
`;


// Create avatar, attach shadow DOM
export default class Avatar extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(avatarTemplate.content.cloneNode(true));
  }
}