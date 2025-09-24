import { useState } from "react";
import "./gallery.css";

function Gallery() {

  const defaultImages = [
    "/images/charizard.jpg",
    "/images/gengar.jpg",
    "/images/mew.jpg"
  ];

  const [userImages, setUserImages] = useState([]);
  const [url, setUrl] = useState("");

  const handleInput = (e) => {
    setUrl(e.target.value);
  };

  const addImage = () => {
    if (url.trim() !== "") {
      setUserImages([...userImages, url.trim()]);
      setUrl("");
    }
  };

  return (
    <div className="gallery-page" style={{ padding: "20px" }}>
      <h1>Gallery</h1>

      
      <div className="gallery-input">
        <input
  type="text"
  placeholder="Enter image URL"
  value={url}
  onChange={handleInput}
  className="form-input"
  style={{ width: "400px", padding: "10px", fontSize: "16px" }}
/>

        <button onClick={addImage} className="button-43">
          Add Image
        </button>
      </div>

      
      <h2>Default Images</h2>
      <div className="gallery-grid" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {defaultImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Default ${index}`} className="gallery-img" />
          </div>
        ))}
      </div>

      
      {userImages.length > 0 && (
        <>
          <h2>User Added Images</h2>
          <div className="gallery-grid" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
            {userImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`User ${index}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Gallery;
