import CarouselSong from './Carousel-Song';
import SliderIntro from './Slider_Intro';
import SongSuggest from './Song_Suggest';

function Main() {
    return (
        <div className="mt-[47px] ml-60 bg-home-bg h-[1000px] px-14 pt-10">
            <CarouselSong />
            <SliderIntro/>
            <SongSuggest/>
        </div>
    );
}

export default Main;
