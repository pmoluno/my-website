import ButtonModals from "./ButtonModals";

export default function Hero() {
    return (
        <div className="hero" style={{paddingBottom: "100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="container">
                            <div className="hero-content" style={{ textAlign: "", paddingTop: "100px", textTransform: "uppercase" }}>
                                <h1 className="text-5xl font-bold" style={{ letterSpacing: "-5.5px", fontWeight: "300", fontSize: "60px" }}>Pureheart Moluno</h1>
                                <p className="py-6" style={{ fontWeight: "300", letterSpacing: "10px", fontSize: "18px" }}>Engineer & Software Developer</p>
                                <p className="py-6" style={{ fontWeight: "300", letterSpacing: "-1px", fontSize: "18px" }}>contact@pmoluno.com</p>
                            </div>
                            <ButtonModals />
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

            </div>
        </div>
    );
}   