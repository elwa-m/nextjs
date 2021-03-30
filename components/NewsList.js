/*
NewsList:
Die h2 soll nur angezeigt werden, wenn eine Überschrift
mit dem prop title übergeben wird. Der Array mit den
Meldungen soll im prop news übergeben werden.*/
import NewsItem from "../components/NewsItem";



export default function NewsList({ news, title = "" }) {
  return (
    <section className="news-list">
      {title && <h2 className="news-list__title">{title}</h2>}
      {news.map((item) => (
        <NewsItem key={item.url} {...item} />
      ))}
    </section>
  );
}
//in loc de item se pot scrie componentele{url,title,urlToImage} si apoi in loc de {...item} url={url}

