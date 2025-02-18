import React from "react";

const Card = ({ data }) => {
    console.log(data);

    // const readMore = (url) => {
    //     window.open(url);
    // }

    return (
        <div className="cardContainer">
            {data?.map((curItem, index) => {
                if (!curItem.urlToImage) return null;

                return (
                    <div className="card" key={index}>
                        <img src={curItem.urlToImage} alt="News Thumbnail" />

                        <div className="cardContent">
                            <a className="title" onClick={() => window.open(curItem.url,"_blank")}>{curItem.title}</a>

                            <p>{curItem.description || "No description available"}</p>
                            
                            {/* <button onClick={readMore(curItem.url)}>ReadMore</button> */}
                            <button onClick={() => window.open(curItem.url, "_blank")}>Read More</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
