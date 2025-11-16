import { memo } from "react";
import { Container } from "../utility/Container";
import { TitleHeader } from "../utility/TitleHeader";
import { ImgSrc, Name } from "@/types";

interface Team extends ImgSrc, Name {
    designation: string;
    social: {
        facebookLink: string;
        twitterLink: string;
        linkedinLink: string;
    }
}

const TEAM: Team[] = [
    {
        imgSrc: "/images/team/team-1.jpg",
        name: "Full Name",
        designation: "Designation",
        social: {
            facebookLink: "#",
            twitterLink: "#",
            linkedinLink: "#"
        },
    },
    {
        imgSrc: "/images/team/team-2.jpg",
        name: "Full Name",
        designation: "Designation",
        social: {
            facebookLink: "#",
            twitterLink: "#",
            linkedinLink: "#"
        },
    },
    {
        imgSrc: "/images/team/team-3.jpg",
        name: "Full Name",
        designation: "Designation",
        social: {
            facebookLink: "#",
            twitterLink: "#",
            linkedinLink: "#"
        },
    },
    {
        imgSrc: "/images/team/team-4.jpg",
        name: "Full Name",
        designation: "Designation",
        social: {
            facebookLink: "#",
            twitterLink: "#",
            linkedinLink: "#"
        },
    },
    {
        imgSrc: "/images/team/team-5.jpg",
        name: "Full Name",
        designation: "Designation",
        social: {
            facebookLink: "#",
            twitterLink: "#",
            linkedinLink: "#"
        },
    },
];

export const Team = memo(() => (
    <Container>

        <TitleHeader
            title="Team Members"
            subTitle="Qualified Pets Care Professionals"
            style={{ maxWidth: "600px" }}
        />

        <div
            className="owl-carousel team-carousel position-relative"
            style={{ paddingRight: "25px" }}
        >
            {/* <div className="team-item">
                <div className="position-relative overflow-hidden">
                    <img
                        className="img-fluid w-100"
                        src="img/team-1.jpg"
                        alt=""
                    />
                    <div className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="bg-light text-center p-4">
                    <h5 className="text-uppercase">Full Name</h5>
                    <p className="m-0">Designation</p>
                </div>
            </div>
            <div className="team-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                    <div className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="bg-light text-center p-4">
                    <h5 className="text-uppercase">Full Name</h5>
                    <p className="m-0">Designation</p>
                </div>
            </div>
            <div className="team-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                    <div className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="bg-light text-center p-4">
                    <h5 className="text-uppercase">Full Name</h5>
                    <p className="m-0">Designation</p>
                </div>
            </div>
            <div className="team-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                    <div className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="bg-light text-center p-4">
                    <h5 className="text-uppercase">Full Name</h5>
                    <p className="m-0">Designation</p>
                </div>
            </div>
            <div className="team-item">
                <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-5.jpg" alt="" />
                    <div className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="bg-light text-center p-4">
                    <h5 className="text-uppercase">Full Name</h5>
                    <p className="m-0">Designation</p>
                </div>
            </div> */}
            {TEAM.map((member, index) => (
                <div
                    key={index}
                    className="team-item"
                >
                    <div className="position-relative overflow-hidden">
                        <img
                            className="img-fluid w-100"
                            src={member.imgSrc}
                            alt=""
                        />
                        <div className="team-overlay">
                            <div className="d-flex align-items-center justify-content-start">
                                {/* <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                                <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                                <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a> */}
                                {[
                                    {
                                        icon: "bi-facebook",
                                        link: member.social.facebookLink,
                                    },
                                    {
                                        icon: "bi-facebook",
                                        link: member.social.twitterLink,
                                    },
                                    {
                                        icon: "bi-facebook",
                                        link: member.social.linkedinLink,
                                    },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        className="btn btn-light btn-square mx-1"
                                        href={social.icon}
                                    >
                                        <i className={`bi ${social.icon}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="bg-light text-center p-4">
                        <h5 className="text-uppercase">{member.name}</h5>
                        <p className="m-0">{member.designation}</p>
                    </div>
                </div>
            ))}
        </div>

    </Container>
));

Team.displayName = "Team";