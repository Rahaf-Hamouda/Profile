import './Intro.css';
import cute from '../../assets/cute.png'
import hire from '../../assets/here.svg'

const pdf_file_url = 'http://localhost:5173/MY_CV.pdf'
const downloadFile = (url) => {
    fetch(url).then(response => response.blob()).then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const filename = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    })
}
const Intro = () => {

    return (
        <>
            <section id="intro">
                <div className="introConent" >
                    <span className="hello">Hello! </span>
                    <span className="introText">I'm<span className="introName"> Rahaf</span> <br />Website Designer </span>
                    <p className="introPara">I am Skilled Web Designer With experience in creating<br /> visually appealing and user friendly website</p>
                    <button className="btn" onClick={() => { downloadFile(pdf_file_url) }} ><img src={hire} alt="" className="hire" />Download CV</button>
                </div>
                <img src={cute} alt="Profile" className="bg" />
            </section>
        </>
    )
}
export default Intro;