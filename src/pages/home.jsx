import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Lol Jajaja Store!</h1>
      <p>Your one-stop shop for the coolest electronics and gadgets!</p>
      <img className="top-img" src="/images/home.jpg" alt="home image" />
      <div className="home-buttons">
        <button>Shop Now</button>
        <button>View Deals</button>
      </div>
    </div>
  );
}

export default Home;
