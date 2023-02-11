import { Link } from "react-router-dom";
import sample from "../../images/casstekMotoSample.svg";
import pdf from "../../images/pdfIcon.svg";

import Project4 from "../../components/Project4";
import News from "../../components/News";
import Events from "../../components/Events";

import ScrollToTopOnMount from "../../components/scrolltoview";


export default function CasstekMoto4t() {
    return (
        <div className="CasstekPremium4t product mt-5">
        <ScrollToTopOnMount />    
            <div className="section1 d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-bold display-3">Automotive Lubricants</h1>
            </div>
            <div className="section2 px-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link  to="/"><span>HOME</span></Link></li>
                        <li class="breadcrumb-item"><Link  to="/Lubricants"><span>LUBRICANTS</span></Link></li>
                        <li class="breadcrumb-item active" aria-current="page">CASSTEK MOTO 4T 20W-40 API SF/CF</li>
                    </ol>
                </nav>
                <img loading="lazy" src={sample} className="sample" alt="" />
                <div className="details">
                    <div className="description">
                        <h4>DESCRIPTION</h4>    
                        <p>CASSSTEK MOTO 4T 20W-40 API SF/CF is a high-performance multigrade engine oil, designed for wide range of application from 4 stroke Motorbikes, 3 Wheelers, light commercial vehicles, gensets etc. CASSTEK MOTO 4T 20W-40 API SF/CF is blended using superior quality high viscosity index base oil and best in class additive molecule technology. CASSTEK MOTO 4T 20W-40 API SF/CF provides high level of protection to your engines in wide operating conditions.</p>
                    </div>
                    <div className="performance mt-5">
                        <h4>PERFORMANCE</h4>    
                        <p>Meets the requirements of SAE 20W-40, API SF/CF, JASO</p>
                    </div>
                    <div className="application mt-5">
                        <h4>APPLICATION</h4>    
                        <p>CASSTEK MOTO 4T 20W-40 API SF/CF can be used in all 4-stroke motorbike engines manufactured by leading global OEMs. It can also be used in light commercial vehicles and 3 Wheelers under OEM’s recommended oil drain intervals.</p>
                    </div>
                    <div className="benefits mt-5">
                        <h4>PRODUCT BENEFITS</h4>
                        <ul>
                            <li>Resistance to oil oxidation and thermal degradation thereby increasing oil life.</li>
                            <li>Enhanced engine life and protects engine parts at the point of engine start up.</li>
                            <li>Increased engine cleanliness by using advanced detergent- dispersant additive technology.</li>
                            <li>Multigrade performance advantage which allows excellent oil performance in wide operating temperature.</li>
                            <li>Excellent corrosion protection, even when engine is off.</li>
                            <li>Provides excellent protection in prolonged city stop-and-go driving conditions.</li>
                        </ul>
                    </div>

                    <table className="table table-bordered table-striped table-hover w-75 mt-5">
                        <thead>
                            <tr>
                                <th>Test Parameters</th>
                                <th>Test Methods</th>
                                <th>Typical Values</th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>Appearance</td>
                                <td>Visual</td>
                                <td>Clear</td>
                            </tr>
                            <tr>
                                <td>Colour</td>
                                <td>Visual</td>
                                <td>Brown</td>
                            </tr>
                            <tr>
                                <td>Density at 300C (g/ml)</td>
                                <td>ASTM D 1298</td>
                                <td>858</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 400C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>130</td>
                            </tr>
                            <tr>
                                <td>Kinematic Viscosity at 1000C (cSt)</td>
                                <td>ASTM D445</td>
                                <td>14.8</td>
                            </tr>
                            <tr>
                                <td>Viscosity Index</td>
                                <td>ASTM D 2270</td>
                                <td>115</td>
                            </tr>
                            <tr>
                                <td>Pour Point (0C)</td>
                                <td>ASTM D 97</td>
                                <td>-21</td>
                            </tr>
                            <tr>
                                <td>Flash Point (COC) (0C)</td>
                                <td>ASTM D 93</td>
                                <td>240</td>
                            </tr>
                            <tr>
                                <td>TBN (mg KOH/g)</td>
                                <td>ASTM D 2896B</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="storage mt-5">
                        <h4>STORAGE</h4>    
                        <p>All packages should be stored under cover and should not be stored where ambient temperature exceeds 600C or freezing conditions. To avoid ingress of water and damage, drums should be stored horizontally if they are stored outside.  Follow MSDS for further instructions on storage, safe handling, and disposal of the product.</p>
                    </div>

                    <div className="d-flex align-items-center mt-5 download">
                        <img src={pdf} alt="pdf icon" width="30px" />    
                        <span className="ms-3">Click here to download PDF </span>
                    </div>                    
                </div>        

            </div>
        </div>
    )
}