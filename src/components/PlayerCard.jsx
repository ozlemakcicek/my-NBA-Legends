import { useState } from "react";
import { Card } from "react-bootstrap";


const PlayerCard = ({name,img,statistics}) => {
  //const{img,name,statistics}=props
  // console.log(props);

  const [showImage, setShowImage] = useState(true);


  /* 1-projemizde bir condition var.image veya ul gozukuyor.ustune tiklaninca arka ekran yani ul ler gozuksun.tiklanmayinca image gozuksun diyecegiz.bunun icin bir degiskenle, ki bu degisecegi icin useState ile tanimlariz, true ya da false baslangic olarak esitleyelim.baslangicta resimler gozuktugu icin true ya esitleriz flag degerini.condition i react alaninda ternary ile yapacagiz.showImage true ise image leri bastir degil ise ul leri getir diyecegiz */

  // 2-initial degerimiz,baslngc degerimiz true dedik.resimler gozuksun demek.degiskeni update eden setShowImage ile state leri degistirebilyrz.simdi card a onClick yapinca setShowImage i tersine cevir diyecegiz.!showImage yapacgz yani.image e onclick yapilinca fonksiyonun tamircisini getirmeliyiz ve icine de degisken ne gelirse tersini yap demeliyiz.Ama basina muhakkak fonksiyon oldugunu hatirlatmaliyiz yoksa sonsuz donguye girer.Ve aslinda bunu daha da kisaltiriz.onClick i handleClick diye bir fonksiyona esitleriz.onu da yukarida ayni sekilde setShowImage(!showImage) e esitleriz.

const handleClick=()=>setShowImage(!showImage);


  return (
    <Card
      className="rounded-2 m-auto player-card"
      role="button"
      // onClick={() => {setShowImage(!showImage);}}
      onClick={handleClick}
    >
     {showImage ? <Card.Img variant="top" src={img} className="player-logo" />:

      <ul className="m-auto">
        {statistics.map((item, i) => {
          return <li className="h5 text-start list-unstyled" key={i}>🏀{item}</li>;
          
        })}
      </ul>}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default PlayerCard

//margin auto bir block elementin tamamini ortalar.icindeki elementleri ortalamak istersen text-center.
// li lere verileblck bazi css ler. list-unstyled :bastaki noktalari kaldirir.  text-start: text leri basa alir.duzenli bir gorunum olur.
// emogi cikmasi icin:windows tusu + noktaya bas.

// flag degerli useState i mumkun oldugu surece local de tut.mesela burda karta tiklaninca sadece o degissin diye playerCard da tanimladik.Eger parenta verseydik, CardContainerda yazsaydik butun kartlar ayni anda acilir ayni anda kapanirdi.



