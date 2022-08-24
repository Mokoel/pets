import { useEffect, useState } from 'react';
import './App.css';
import Detail from './component/detail/detail';
import List from './component/list/list';
import Search from './component/search/search';

function App() {
  document.title = "유기동물 조회서비스";

  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    const key = "BK2oUCqx4KZqK8NwE1E%2BmA%2FGKh0yod4Bxe7B67Ijn3BFpO2dldKmdpZuiZs8qwbVXBTrtdly3GCwLPBc34QNXg%3D%3D";
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20220801&endde=20220831&pageNo=1&numOfRows=30&serviceKey=${key}&_type=json`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
      })
      .catch(e => {
        console.log(e);
      });
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?pageNo=1&_type=json&numOfRows=20&serviceKey=${key}`)  
    .then(response => response.json())
    .then(json => {
      setPets(json.response.body.items.item);
    })
    .catch(e => {
      console.log(e);
    });

    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?_type=json&up_kind_cd=417000&serviceKey=${key}`)  
    .then(response => response.json())
    .then(json => {
      setPets(json.response.body.items.item);
    })
    .catch(e => {
      console.log(e);
    });

  }, []);

  const handleSearch = (bgnde,endde,upr_cd,up_kind_cd)=>{
    const key = "BK2oUCqx4KZqK8NwE1E%2BmA%2FGKh0yod4Bxe7B67Ijn3BFpO2dldKmdpZuiZs8qwbVXBTrtdly3GCwLPBc34QNXg%3D%3D";
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?&pageNo=1&numOfRows=30&serviceKey=${key}&_type=json&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}&up_kind_cd=${up_kind_cd}`)
      .then(response => response.json())
      .then(json => {
        //console.log(json.response.body.items.item);
        setPets(json.response.body.items.item);
      })
      .catch(e => {
        console.log(e);
      });

  }


  const handleSelected = (data) =>{
    setSelected(data);
  }


  return (
    <div className="container">
      <Search onSearch={handleSearch}/><hr/>
    <div className="app">
      { selected ? <Detail target={selected} /> : <></> }
      <List pets={pets} onSelected={handleSelected}/>
    </div>
  </div>

  );
}

export default App;



