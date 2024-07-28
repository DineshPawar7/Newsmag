import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]); // Ensure to include 'category' in the dependency array

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {articles.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage || "https://via.placeholder.com/360x200.png?text=Image+Not+Available"} // Default image
                    url={news.url}
                />
            ))}
        </div>
    );
};

export default NewsBoard;
