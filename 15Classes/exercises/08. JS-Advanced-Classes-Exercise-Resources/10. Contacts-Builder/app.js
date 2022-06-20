class Contract {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }
    set online(value) {
        this._online = value;
        if(this.tittleDiv){
            this.tittleDiv.className= this._online ? 'title online' : 'title';
        }

    }

    render(id) {
        this.article = document.createElement('article');
        this.tittleDiv = document.createElement('div');
        this.btnI = document.createElement('button');
        this.infoDiv = document.createElement('div');
        this.phoneSpam = document.createElement('span');
        this.emailSpan = document.createElement('span');
        this.tittleDiv.className = this._online ? 'title online' : 'title';
        this.tittleDiv.textContent = this.firstName + ' ' + this.lastName;
        this.btnI.innerHTML = '&#8505';
        this.tittleDiv.appendChild(this.btnI);
        this.article.appendChild(this.tittleDiv);
        this.phoneSpam.innerHTML = '&phone; ' + this.phone;
        this.emailSpan.innerHTML = '&#9993; ' + this.email;
        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none';
        this.infoDiv.appendChild(this.phoneSpam);
        this.infoDiv.appendChild(this.emailSpan);
        this.article.appendChild(this.infoDiv);
        document.getElementById(id).appendChild(this.article);

        this.btnI.addEventListener('click', (e) => {
            this.infoDiv.style.display == 'none' ?
            this.infoDiv.style.display = 'block':
            this.infoDiv.style.display = 'none';
        })
    }
}