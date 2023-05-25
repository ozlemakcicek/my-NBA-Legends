import { Col, Container, Row, Form } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  console.log(data);



  // input butonu icin react-bootstr. de <Form.Control etiketi kullanilir.Bu input demek.import etmek lazim Form diye.CardContainer componentinde Container ile beraber kapsayici bir bos tag arasinda olmali.


  // inputa girilen verileri yakalayip bir yerde depolamamiz lazim ki sonra filter islemi icin lazim olacak.bunun icin onChange yapacagiz input icine.ve bunu da yine yukarida usestate ile "" lara esitleyecegiz.ordaki tamirciyi onChangee esitleyip.e.target.value ile girilen value yu yakalariz.useState i import etmek lazim.


const [search, setSearch] = useState("")
console.log(search);
// useState in icinin "" olmasi onemli.ilk basta hicbirsey girmesek bile bos string hep true doner ve asgida control yapar.ama () biraksak.baslangicta search null o.i. control yapamayacakti ve hata verecekti

//*asagidaki filterin alternatif yontemi.mapler iken ise filteredData.map yazardik:
// const filteredData=data.filter((player) =>player.name.toLowerCase()
// .includes(search.trim().toLowerCase()))


  return (
    <>
    <Form.Control className="w-50 m-auto" 
    placeholder="Search Player..." 
    type="search"
      onChange={(e)=>setSearch(e.target.value)}
    />

    <Container className="rounded-4 my-4 p-3 card-container">
      <Row className="g-3 justify-content-center">
{/* datayi playerin name ine gore filter layip herbir playeri al ve , includes ile benim girdigim search i iceriyormu diye control edip sonra onlari map ile listeye atariz.trim ile bosluk birakilir ve byk harfle yazilirsa onlari da kabul etsin deriz.ya da yukarida filter yapip asagida o fonksiyonu map leyebiliriz.yukari yoruma bak*/}

        {data.filter(player=>player.name.toLowerCase()
        .includes(search.trim().toLowerCase()))
        .map((player, index) => {
/* {filteredData.map((player,index)=>return.....)} */
          return(

          <Col key={index} md={6} lg={4} xl={3}>

            <PlayerCard 
            // key={index} 
            {...player} />
          </Col>
        );
        })}
      </Row>
    </Container>
    </>
  );
};


//key map den sonraki kapsayici hangisi ise ona verilir.
   /* <p>{e.name}</p> */ 
   /* bu sekilde return icinde yaparsak sadece isimlerini goruruz.ama biz bir card bastiracagiz.bunun icin bir component olusturalim */

export default CardContainer;

//filter ile map arasindaki fark: ikisi de veriler uzerinde dolasir ama map ile her bir elemani yeni bir listeye atar.filter ise sadece kosula uyanlari atar.Önce filter yap sonra map ile o kosula uyanlari yeni bir listeye at.filterdan doneni direkt mapleyebilirsin.