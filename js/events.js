const addArticleBtn = document.querySelector('#addArticleBtn');
const addArticleForm = document.querySelector('.add-article-form');
const articles = document.querySelector('.articles');
const discardArticle = document.querySelector('#discardArticle');

export default function event(){
    addArticleBtn.addEventListener('click', () => {
        addArticleForm.style.display = 'block';
        articles.style.display = 'none';
    })
    
    discardArticle.addEventListener('click', () => {
        addArticleForm.style.display = 'none';
        articles.style.display = 'block';
    })
}
