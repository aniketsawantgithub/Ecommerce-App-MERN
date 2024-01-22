import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>


<h1>
  Latest Product
  <Link to="/search" className="findmore">
    More
  </Link>

</h1>

     <main>
    <ProductCard 
    productId="adasasd" 
    name="Macbook" 
    price={4545}
    stock={435}
    handler={addToCartHandler}
    photo=""
    />
     </main>
    </div>
  );
};

export default Home;