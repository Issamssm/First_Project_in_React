import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Card from './component/card';
import data from './component/data';

const card = data.map(ele => {
  return (
    < Card
      // first way

      // img={ele.img}
      // rating={ele.rating}
      // reviewCount={ele.reviewCount}
      // country={ele.country}
      // title={ele.title}
      // price={ele.price}
      // openspot={ele.openspot}
      // location={ele.location}

      // second way
      // item={ele}

      // other way
      {...ele }
    />
  )
})



function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <div className='card_parent'>
      {card}
      </div>
      

    </div>
  );
}

export default App;
