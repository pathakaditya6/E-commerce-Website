/* Navigation  */

const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};

/*  User Form  */
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    
  });
  
  document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });

  let isFormVisible = false;
  document.getElementById('user-icon').addEventListener('click', function() {
    if (isFormVisible) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'none';
    } else {
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'block';
    }
    isFormVisible =!isFormVisible;
  });

  /* search */

  document.querySelector('.icon.d-flex>i.bx.bx-search').addEventListener('click', function() {
    document.getElementById('search-input').classList.toggle('show');
  });

  document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      //search logic
      console.log('Searching for:', this.value);
      
      e.preventDefault();
    }
  });

