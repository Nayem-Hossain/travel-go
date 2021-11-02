import React from "react";

const Blog = () => {
  return (
    <div className="row text-center">
      <div className="col-md-8">
          
        <iframe
         width="960"
         height="540"
          src="https://www.youtube.com/embed/LrkvTVt-wHk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        
      </div>
      <div className="col-md-4 d-grid align-items-center">
        <h1 className="text-center fw-bold"> Nadir On The Go</h1>
      </div>
    </div>
  );
};

export default Blog;
