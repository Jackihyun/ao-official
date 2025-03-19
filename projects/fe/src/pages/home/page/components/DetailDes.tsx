import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@/pages/home/pageassets/css/DetailDes.css";
import React from 'react';

interface DetailDosProps {
    title: string;
    Ntitle: string[];
    Nimage: string[];
}

const DetailDes: React.FC<DetailDosProps> = React.memo(({ title, Ntitle, Nimage }) => {
    // Carousel 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (Ntitle.length === 1) {
        // 이미지와 Ntitle이 1개일 때
        return (
            <div className="DetailBes-container">
                <div id='Deheader'>
                    <img src='@/common/assets/images/fire.png' alt='firepic' className='firepic'></img>
                    <p id='large-title'>&nbsp;{title}</p>
                </div>
                <div>
                    <p id='small-title'>{Ntitle[0]}</p>

                    <img src={Nimage[0]} alt={`slide-0`} className='carousel-image' />
                </div>
            </div>
        );
    }

    // 이미지와 Ntitle이 여러 개일 때
    return (
        <div className="DetailBes-container">
            <div id='Deheader'>
                <img src='@/common/assets/images/fire.png' alt='firepic' className='firepic'></img>
                <p id='large-title'>&nbsp;{title}</p>
            </div>
            <Slider {...settings}>
                {Ntitle.map((ntitle, index) => (
                    <div key={index}>
                        <p id='small-title'>{ntitle}</p>

                        <img src={Nimage[index]} alt={`slide-${index}`} className='carousel-image' />
                    </div>
                ))}
            </Slider>
        </div>
    );
});

export default DetailDes;
