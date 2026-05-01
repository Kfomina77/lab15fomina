import { Routes, Route } from 'react-router-dom';

function News() {
    return (
        <>
            <h1>Новости</h1>
            <p>Текст новостей</p>
        </>
    );
}

function About() {
    return <h1>Южный федеральный университет</h1>;
}

function Contacts() {
    return <p>Номер телефона: +79*****1102 (я скрыла звездочками, так как считаю это конфиденциальной информацией)</p>;
}

function NotFound() {
    return <h1>404 - Страница не найдена</h1>;
}

function Article() {
    return (
        <article className="article">
            <Routes>
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </article>
    );
}

export default Article;