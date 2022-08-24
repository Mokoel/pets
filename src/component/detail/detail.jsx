import "./detail.css"

function Detail({target}) {
    return ( 
        <div className="detail">
            <img className="imgdetail" src={target.popfile}/>
        <h2>{target.kindCd} - {target.colorCd} <small>{target.age}</small></h2>
            <p>체중 : {target.weight}</p>
            <p>성별 : {target.sexCd}</p>
            <p>중성화 여부 : {target.neuterYn}</p>
            <p>특징 : {target.specialMark}</p>
            
            <p>발견장소 : {target.happenPlace}</p>
            <p>상태 : {target.processState}</p>
            
            <p>보호소 : {target.careNm} ({target.careTel})</p>
            <p>관할기관 : {target.orgNm}</p>
        </div>
     );
}

export default Detail;

// <span className="jb-bold">체중 : </span>