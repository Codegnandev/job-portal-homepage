import StatsChart from './StatsChart'; 
import bannerGirl from '../images/banner-girl.png';
import Youtube from '../images/youtube.png'
import ReactPlayer from 'react-player';
import './BannerPage.css'


const BannerPage =()=>{
    // const videoUrl = 'https://youtu.be/RlKgCehjw0M?si=j1qCaE-fQYGqfON-'

return(
        
<div className='coverpage-container'>
<div className='home-cover-text-container'>
  <div className='home-text-container'>
    <div className='home-titles'>
    <p className='home-title'>
      It's <span className='span-home-title'>Not Just</span> A Numbers
    </p>
    <p className='tag-line'>
      See Successful Students <span className='span-home-title'>Placements</span> Journey
    </p>
    </div>
    
  <div className="placement-card">
  <h1 className="student-count">
    3407<span className="plus-sign ">+</span> 
    <p className="students-placed">Students Placed</p>

  </h1>
  <p className="counting"><span className='blinking'>&gt;&gt;&gt; Still Counting...!</span></p>   
    </div>
      
  </div>
  <div className='stats-studentplaced-container'>
    <StatsChart />
    

   <img src={Youtube} alt='youtube' className='custom-player'/>

  </div>
</div>

<div className='image-container'>
<img src={bannerGirl} 

   
    alt="Banner Girl" 
    class="banner-girl" 
    loading="lazy" />
</div>
</div>
    )
}

export default BannerPage

