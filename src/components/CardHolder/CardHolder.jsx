import React from 'react';
//styles
import "./CardHolder.css"
//components
import OfferCard from '../OfferCard/OfferCard';
import RadioButtons from '../RadioButtons/RadioButtons';
import PersonCard from '../PersonCard/PersonCard';
import CommonHeader from '../CommonHeader/CommonHeader';
//variables
import { doctorsData } from '../../allVariables';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CardHolder = ({type, headlibe, classForMargin}) => {
    //functions
    const displayCards = () => {
        if(type === "offers"){
            return (
                <>
                    {/* <OfferCard cardNo={1}/>
                    <OfferCard cardNo={2}/>
                    <OfferCard cardNo={1}/> */}
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                </>
            )
        }else{return (
            doctorsData.map((item, idx) => {
                const {name, specialization, image} = item
                return (
                    <SwiperSlide className='doctorsSlide'>
                        <PersonCard cardNo={idx+1} key={`${name}Image`} name={name} specialization={specialization} image={image} />
                    </SwiperSlide>
                )
            })
        )
        }
    }
    //CardHolder-offers
    return (
        <div className={`CardHolder ${classForMargin}`}>
            {type === "persons" ? <CommonHeader text={"Our Medical Specialist"} /> : null}
            <div className='cardHolderWrapper commonContainer'>
                        {/* {displayCards()} */}
                {/* <div class="swiper">
                    <div class="swiper-wrapper">
                    </div>
                </div> */}
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={type === "offers" ? 393 : null}
                    // pagination={{
                    // clickable: true,
                    // }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {displayCards()}
                </Swiper>
            </div>
            {/* <div className='radioButtonsWrapper'>
                <RadioButtons />
            </div> */} 
        </div>
    );
};

export default CardHolder;