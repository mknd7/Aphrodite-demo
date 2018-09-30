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
    this.appendChild(avatarTemplate.content.cloneNode(true));
    this.style.display = 'inline-block';
  }
}