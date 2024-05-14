import './WordPress.css';
import de5 from '../../assets/de5.png';
import de7 from '../../assets/de7.png';
import de8 from '../../assets/de8.png';
import de6 from '../../assets/de6.png';
import de4 from '../../assets/de4.png';
import de1 from '../../assets/de1.png';
import de3 from '../../assets/de3.png';
import de2 from '../../assets/de2.png';



const WordPress = () => {
    return (
        <section id="WordPressPage">
            <div className="container">

                <a href={de7} target="_blank"><img src={de7} alt="" className="Img" /></a>
                <a href={de8} target="_blank"><img src={de8} alt="" className="Img" /></a>
                <a href={de6} target="_blank"><img src={de6} alt="" className="Img" /></a>
                <a href={de5} target="_blank"><img src={de5} alt="" className="Img" /></a>
                <a href={de4} target="_blank"><img src={de4} alt="" className="Img" /></a>
                <a href={de1} target="_blank"><img src={de1} alt="" className="Img" /></a>
                <a href={de3} target="_blank"><img src={de3} alt="" className="Img" /></a>
                <a href={de2} target="_blank"><img src={de2} alt="" className="Img" /></a>
            </div>
            </section>
    );
}

export default WordPress;