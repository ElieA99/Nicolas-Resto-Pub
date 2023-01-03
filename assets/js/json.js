
// url = 'https://nrpmenuapi.herokuapp.com/';
url = 'https://nrpmenuapi.onrender.com/'

fetch(this.url + 'Starters')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('strs');
    var org = ` <div> 
    <img src='link' class="menu-img img-fluid">
    <h4>prod</h4>
    <p class="ingredients">dscr</p> 
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prod', json[i].Product);
      ccontent = ccontent.replace('dscr', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Salads')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('salads');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
    <p class="ingredients">dscrs</p>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      ccontent = ccontent.replace('dscrs', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Sandwiches')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Sandwiches');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
    <p class="ingredients">dscrs</p>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      ccontent = ccontent.replace('dscrs', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Burgers')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Burgers');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
    <p class="ingredients">dscrs</p>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      ccontent = ccontent.replace('dscrs', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Pizza')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Pizza');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
    <p class="ingredients">dscrs</p>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      ccontent = ccontent.replace('dscrs', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Platters')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Platters');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
    <p class="ingredients">dscrs</p>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      ccontent = ccontent.replace('dscrs', json[i].Description);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Dessert')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Dessert');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Beverages')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Beverages');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'HotDrinks')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('HotDrinks');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Arguileh')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Arguileh');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Whiskey')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Whiskey');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Wine')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Wine');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'AlcoholicCocktails')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('AlcoholicCocktails');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })

fetch(this.url + 'Shots')
  .then(Response => Response.json())
  .then(json => {
    var dta = document.getElementById('Shots');
    var org = `<div>
    <img src='link' class="menu-img img-fluid">
    <h4>prods</h4>
  </div>`;

    for (var i = 0; i < json.length; i++) {
      var content = document.createElement('div');
      var ccontent = org;
      ccontent = ccontent.replace('link', json[i].Image);
      ccontent = ccontent.replace('prods', json[i].Product);
      content.className = 'col-lg-4 menu-item'
      content.innerHTML = ccontent;
      var myimage = document.createElement('img');
      myimage.src = 'link';
      dta.appendChild(content);
    }
  })