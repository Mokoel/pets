import { useEffect, useRef } from "react";
import "./search.css"
function Search({onSearch}) {
    const bgnde = useRef();
    const endde = useRef();
    const upr_cd = useRef();
    const up_kind_cd = useRef();
    useEffect( ()=>{
        const today =new Date().toISOString().slice(0, 10);
        endde.current.value = today;
    }, [])


    const searchHandle = (event)=>{
        event.preventDefault();
        onSearch(
            bgnde.current.value.replaceAll("-",""),
            endde.current.value.replaceAll("-",""),
            upr_cd.current.value,
            up_kind_cd.current.value,
            )
        }
        //console.log(upr_cd.current.value)

    return ( 
        <div>
            <form onSubmit={searchHandle} className="search">
                <input type="date" ref={bgnde}></input>
                <span>~</span>
                <input type="date" ref={endde}></input><span> </span>
                <select name="upr_cd" ref={upr_cd}>
                    <option value="">지역</option>
                    <option value="6110000">서울특별시</option>
                    <option value="6260000">부산광역시</option>
                    <option value="6270000">대구광역시</option>
                    <option value="6280000">인천광역시</option>
                    <option value="6290000">광주광역시</option>
                    <option value="5690000">세종특별자치시</option>
                    <option value="6300000">대전광역시</option>
                    <option value="6310000">울산광역시</option>
                    <option value="6410000">경기도</option>
                    <option value="6420000">강원도</option>
                    <option value="6430000">충청북도</option>
                    <option value="6440000">충청남도</option>
                    <option value="6450000">전라북도</option>
                    <option value="6460000">전라남도</option>
                    <option value="6470000">경상북도</option>
                    <option value="6480000">경상남도</option>
                    <option value="6500000">제주특별자치도</option>
                </select><span> </span>
                <select name="up_kind_cd" ref={up_kind_cd}>
                    <option value="">종류</option>
                    <option value="417000">강아지</option>
                    <option value="422400">고양이</option>
                    <option value="429900">기타</option>
                </select>
                <span> </span><button type="submit">검색👁‍🗨</button>
            </form>
        </div>
     );
}

export default Search;