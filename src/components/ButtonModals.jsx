'use client';

import { useRef, useEffect } from "react";

export default function ButtonModals() {
    const modalRefs = {
        about: useRef(null),
        skills: useRef(null),
        projects: useRef(null),
        newsletter: useRef(null),
        // blog: useRef(null),
        contact: useRef(null),
    };

    // Hold the modal instances in a ref
    const modalInstances = useRef({});

    useEffect(() => {
        const loadModals = async () => {
            const { Modal } = await import("bootstrap");
            Object.keys(modalRefs).forEach((key) => {
                const el = modalRefs[key].current;
                if (el) {
                    modalInstances.current[key] = new Modal(el);
                }
            });
        };

        loadModals();
    }, []);

    const openModal = (key) => {
        const modal = modalInstances.current[key];
        if (modal) {
            modal.show();
        }
    };


    return (
        <>
            <style>
                {`
                    .main-button {
                        border-radius: 0px; 
                        background-color: #000; 
                        color: #fff; 
                        padding: 10px; 
                        letter-spacing: -1.5px; 
                        text-transform: uppercase; 
                        border: 2px solid #fff;
                        box-shadow: none !important;
                    }
                    .btn-close {
                        box-shadow: none !important;
                    }
                    .modal-content{
                        border-radius: 0px !important;
                    }
                `}
            </style>

            <div className="row" style={{ marginTop: "50px", textTransform: "uppercase" }}>
                {/* {["about", "skills", "projects", "newsletter", "blog", "contact"].map((key) => ( */}
                {["about", "skills", "projects", "newsletter", "contact"].map((key) => (
                    <div className="col-6" key={key}>
                        <button
                            type="button"
                            className="btn mb-3 main-button form-control"
                            style={{borderColor: "#000"}}
                            onClick={() => openModal(key)}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    </div>
                ))}
            </div>

            {/* Modals */}
            {Object.entries(modalRefs).map(([key, ref]) => (
                <div
                    key={key}
                    ref={ref}
                    className="modal fade"
                    id={`${key}-modal`}
                    tabIndex="-1"
                    aria-labelledby={`${key}ModalLabel`}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ letterSpacing: "-1.9px", textTransform: "uppercase" }} id={`${key}ModalLabel`}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {getModalContent(key)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

function getModalContent(key) {
    switch (key) {
        case "about":
            return (
                <div style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.5", letterSpacing: "-1.5px", fontWeight: "300" }}>
                    <p>
                        Hi, I'm Pureheart Moluno, a tech entrepreneur and software developer based in Saskatchewan, CA.
                    </p>
                    <p>
                        I create and grow software-driven products that solve real-world problems.
                    </p>
                    <p>
                        While I have a strong foundation in full-stack development, my work spans beyond just web and mobile, from backend systems and automation tools to product strategy and infrastructure.
                    </p>
                    <p>
                        With a background in engineering and a passion for technology, I approach challenges with both a builder’s mindset and a business perspective.
                    </p>
                    <p>
                        I'm always exploring new ideas, experimenting with tools, and developing solutions that have real impact.
                    </p>
                </div>
            );
        case "skills":
            return (
                <div style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.5", letterSpacing: "-1.5px", fontWeight: "300" }}>
                    <p style={{ fontWeight: "600" }}>Product & Strategy:</p>
                    <p>MVP development, product-market fit, go-to-market planning, lean startup methods.</p>
                    <p style={{ fontWeight: "600" }}>Tech & Execution:</p>
                    <p>Full-stack development, scalable system design, APIs, automation, DevOps, cloud (AWS, GCP, AZURE).</p>
                    <p style={{ fontWeight: "600" }}>Tools & Languages:</p>
                    <p>JavaScript, TypeScript, Python, Go, React, Node.js, Django, PostgreSQL, Docker, GitHub Actions.</p>
                    <p style={{ fontWeight: "600" }}>Startup Focus:</p>
                    <p>Team building, no-code tools, growth analytics, early-stage tech leadership.</p>
                </div>

            );
        case "projects":
            return (
                <>
                    <div style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.5", letterSpacing: "-1.5px", fontWeight: "300" }}>
                        <p style={{ fontWeight: "600" }}>Neural Codex</p>
                        <p style={{ fontStyle: "italic" }}>An AI-native IDE that thinks with you.</p>
                        <p>Embeds your entire codebase in real-time and augments development with local LLMs, smart autocomplete, PR generation, and vulnerability detection.</p>
                        <p style={{ fontWeight: "600" }}>PermaMind</p>
                        <p style={{ fontStyle: "italic" }}>Infinite memory for humans and AI.</p>
                        <p>A personal, AI-accessible memory system that captures everything you read, write, say, and think — and makes it instantly searchable and usable.</p>
                        <p style={{ fontWeight: "600" }}>Velorisce</p>
                        <p style={{ fontStyle: "italic" }}>AI-powered platform connecting local businesses with customers.</p>
                        <p>Velorisce uses AI-driven recommendations, real-time reviews, and seamless booking to boost engagement and growth for local businesses.</p>

                    </div>
                </>
            );
        case "newsletter":
            return (
                <div style={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.5", letterSpacing: "-1.5px", fontWeight: "300" }}>
                    <p>Join the Conversation!</p>
                    <input type="email" className="form-control mb-2" placeholder="Enter your email" style={{border: "2px solid #000", borderRadius: "0px", boxShadow: "none" }} />
                    <button className="btn btn-primary form-control" style={{borderRadius: "0px", backgroundColor: "#000", color: "#fff", border: "0px"}}>Subscribe</button>
                </div>
            );
        // case "blog":
        //     return (
        //         <ul>
        //             <li><strong>Top React Libraries in 2025</strong></li>
        //             <li><strong>How to Deploy with Vercel</strong></li>
        //             <li><strong>Building a Design System</strong></li>
        //         </ul>
        //     );
        case "contact":
            return (
                <div className="d-flex" style={{justifyContent: "space-around"}}>
                    <a href="https://github.com/pmoluno" target="_blank"><i className="bi bi-github" style={{fontSize: "50px", color: "#000"}}></i></a>
                    <a href="www.linkedin.com/in/pureheart-moluno" target="_blank"><i className="bi bi-linkedin" style={{fontSize: "50px", color: "#000"}}></i></a>
                    <a href="mailto:contact@pmoluno.com"><i className="bi bi-envelope" style={{fontSize: "50px", color: "#000"}}></i></a>
                </div>
            );
        default:
            return null;
    }
}
