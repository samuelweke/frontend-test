import { createNewElement, appendElement } from './helpers.js';
const url = 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/';


// Get article from API
export default function article(){
    const getAllArticles = async () => {
        try {
            const response = await fetch( url + '?page=1&limit=12');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data = displayArticles(data);
        } catch (error) {
            console.log('Error with message', error.statusText)
        }
    };
    const displayArticles = (articles) =>{
        articles.map((article) => {
            const row = document.querySelector('#row');
            const column = createNewElement('div');
            column.className = 'col'
            
            const articleCard = createNewElement('div');
            articleCard.className = 'article-card';
            
            const img = createNewElement('img')
            img.className = "article-avatar";
            img.src = article.avatar;

            const articleBody = createNewElement('div');
            articleBody.className = "article-body"

            const p = createNewElement('p')
            p.className = "article-title";
            p.innerHTML = article.title; 

            const button = createNewElement('button')
            button.className = "btn";
            button.type = "button";
            button.innerHTML =  "View";
            // button.onclick = fuc
            button.setAttribute("id", "viewArticle");

            const btnDelete = createNewElement('button')
            btnDelete.className = "btn btn-red";
            btnDelete.type = "button";
            btnDelete.innerHTML =  "Delete";
            btnDelete.value = article.id;
            btnDelete.onclick = deleteArticle;
            
            appendElement(articleBody, p);
            appendElement(articleBody, button);
            appendElement(articleBody, btnDelete);
            appendElement(articleCard, img);
            appendElement(articleCard, articleBody);
            appendElement(column, articleCard);
            appendElement(row, column);
        })
    }
    getAllArticles();


    // Add Article
    addArticle.addEventListener('submit', (e) => {
        e.preventDefault();
       
        let author = document.querySelector('#author');
        let title = document.querySelector('#title');
        let urlInput = document.querySelector('#url');
    
        const data = {
            author: author.value,
            title: title.value,
            url: urlInput.value,
        };
    
        createNewArticle(data);
    
        const addArticleForm = document.querySelector('.add-article-form');
        const articles = document.querySelector('.articles');
        addArticleForm.style.display = 'none';
        articles.style.display = 'block';
    })
    const createNewArticle = async (data) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            window.alert('Article Successfully Created')
        } catch (error) {
            console.log('Error with message', error.statusText)
        }
    };

    //Delete Article
   const deleteArticle = ($event) => {
        fetch(url + $event.target.value, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => 
            document.location.reload())
        .catch(error => console.log(error))
   }

}
