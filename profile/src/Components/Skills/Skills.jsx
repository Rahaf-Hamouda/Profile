import './Skills.css';
import web1 from '../../assets/web2.png'
import web2 from '../../assets/web5.svg'
import web3 from '../../assets/web6.svg'

const Skills = () => {
    return (
        <>
            <section id="skills">
                <span className="skillTitle">What I Do</span>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={web1} alt="" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Web Design </h2>
                            <p>Skilled front-end developer with proficiency in HTML, CSS, JavaScript, ReactJS and Bootstrap </p>
                        </div>
                    </div>
                        <div className="skillBar">
                            <img src={web2} alt="" className="skillBarImg" />
                            <div className="skillBarText">
                            <h2>WordPress</h2>
                            <p>WordPress designer specializing in E-commerce Businesses</p>
                        </div>
                    </div>
                        <div className="skillBar">
                            <img src={web3} alt="" className="skillBarImg" />
                            <div className="skillBarText">
                                <h2>UI/UX Design</h2>
                                <p>Harvested the power of figma & Adobe XD to bring multiplr projects to life through meticulously crafted designs, paving the way for seamless WordPress integration</p>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Skills;