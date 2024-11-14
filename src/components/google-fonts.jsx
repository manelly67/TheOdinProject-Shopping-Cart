function googleFonts() {
    const link1 = document.createElement('link');
    link1.setAttribute('rel', 'preconnect');
    link1.setAttribute('href', 'https://fonts.googleapis.com');
    const link2 = document.createElement('link');
    link2.setAttribute('rel', 'preconnect');
    link2.setAttribute('href', 'href="https://fonts.gstatic.com');
    link2.setAttribute('crossorigin', '');
    const link3 = document.createElement('link');
    link3.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
    );
    link3.setAttribute('rel', 'stylesheet');
    const link4 = document.createElement('link');
    link4.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    );
    link4.setAttribute('rel', 'stylesheet');
  
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    document.head.appendChild(link4);
  }
  
  export { googleFonts };