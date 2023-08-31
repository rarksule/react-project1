import './style.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';

function Gallery()
{
    return (
        <div>
            <hr/>
            <div className="gallery" id="gallery">
              <div className="image-galery">
                <h1>Here's Our Image Gallery</h1>
                <div className="image-grid">
                  <img src={image1} alt="Image 1"/>
                  <img src={image2} alt="Image 2"/>
                  <img src={image3} alt="Image 3"/>
                </div>
                <div className="image-grid">
                  <img src={image4} alt="Image 4"/>
                  <img src={image5} alt="Image 5"/>
                  <img src={image4} alt="Image 5"/>
                </div>
                <div className="image-grid">
                  <img src={image6} alt="Image 6"/>
                  <img src={image7} alt="Image 7"/>
                  <img src={image1} alt="Image 8"/>
                </div>
                
              </div>
              
            </div>
            <hr/>
        </div>
    )
}
export default Gallery;