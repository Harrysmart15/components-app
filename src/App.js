import { Badge, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Cards } from './components/Cards';
import Stateless from './components/stateless';
import Button from './components/Button';

function App() {
    const data = [{
        productImage: "https://media6.ppl-media.com/mediafiles/blogs/airbrush_makeup_weddingplz_1_c1e458ebd8.jpg",
        productName: "Normal Make up ",
        price: 5000,
        rating: "⭐⭐⭐⭐",
    },
    {
        productImage: "https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/1280/jpg/articulos-india/2019/non-troncales/bridal-makeup-step-by-step/bridal-makeup-step-by-step-thewedcapture.webp",
        productName: "Bridal Make up",
        price: 45000,
        rating: "⭐⭐⭐",
    },
    {
        productImage: "https://i.etsystatic.com/25994525/r/il/c79184/3852691604/il_fullxfull.3852691604_q2i4.jpg ",
        productName: "saree droping",
        price: 2000,
        rating: "⭐⭐⭐⭐",
    },
    {

        productImage: "https://cdn-fpjnk.nitrocdn.com/vVKtIfSlUsfxaPluxGDJIBsqXIZVzyZJ/assets/images/optimized/rev-7901add/wp-content/uploads/2021/03/makeup-artist-in-delhi-party-768x1024.jpg ",
        productName: "party make up",
        price: 3000,
        rating: "⭐⭐⭐⭐",
    }

    ]

    const [count, setcount] = useState(0)
    return (
        <div className="App">

          <Button
         name = "Mybutton"
          />
            <h1>Sowmya Makeup Artistry</h1>
            
            <div className="cart-value">
                <Badge bg="sucess">
                    cart{count}
                </Badge>
            </div>

            <div className="card-cointainer">
                {data.map((prod, idx) => <Cards
                    idx={idx}
                    prod={prod}
                    setcount={setcount}
                    count={count}

                />)}


            </div>
          <Stateless/>
        </div>

    );
}

export default App;
