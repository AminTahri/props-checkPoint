import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Main';
import MotoList from './MotoList';
import NavBarree from './NavBarree';
import Footer from './Footer';

function App() {
  const itemArray=[
    {
      imgSrc: `https://media.motoservices.com/media/cache/vehicle_list/media/vehicle/2064/p90327357-highres.jpg`,
      name:`BMW S 1000 RR 2019`,
      Price:  `19200 €`,
    },
    {
      imgSrc: `https://media.motoservices.com/media/cache/vehicle_list/media/vehicle/2459/p90402247-highres.jpg`,
      name:`BMW R 1250 RT 2021 `,
      Price: `22490 €`,
    },
    {
      imgSrc: `https://media.motoservices.com/media/cache/vehicle_list/media/vehicle/2063/p90328661-highres.jpg`,
      name:`BMW R 1250 RS `,
      Price:`15350 €`,
      
    },

    {
      imgSrc: `https://media.motoservices.com/media/cache/vehicle_list/media/vehicle/2515/bmw-r-1250-gs-2021-3.jpg`,
      name:`BMW R 1250 GS 2021`,
      Price:`18100 €`,
    },
    {
      imgSrc:`https://media.motoservices.com/media/cache/vehicle_list/media/vehicle/2715/p90440610-lowres-bmw-k-1600-grand-ame.jpg`,
      name:`BMW K 1600 Grand America 2022 `,
      Price:`27490 €`,
      
    },
  ]
  return (
    <div className="App">
     <NavBarree/>
     <Main/>
     <MotoList data={itemArray} />
     <Footer>
      This is a children props
      </Footer>
    </div>
  );
}

export default App;
