import UiPlaySong from '../Ui-Play-Song';
import CarouselSong from './Carousel-Song';
import ListOneHundred from './List-One-Hundred';
import NewSong from './New-Song';
import SliderIntro from './Slider_Intro';
import SongSuggest from './Song_Suggest';

function Main() {
    return (
        <div className="mt-[47px] ml-60 bg-home-bg h-auto px-14 pt-10">
            <CarouselSong />
            <SliderIntro/>
            <SongSuggest/>
            <ListOneHundred/>
            <ListOneHundred/>
            <ListOneHundred/>
            <NewSong/>
            <UiPlaySong/>
        </div>
    );
}

export default Main;
