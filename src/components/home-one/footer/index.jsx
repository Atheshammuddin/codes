import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";
import FooterBg from "../../../assets/images/v2/footer-bg.png";
import LogoDarkImg from "../../../assets/images/logo/logo-dark.svg";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="aximo-footer-section2" style={{ backgroundImage: `url(${FooterBg})` }}>
			<div className="container">
				<div className="aximo-footer-top aximo-section-padding">
					<div className="row">
						<div className="col-lg-7">
							<FooterContent />
						</div>
						<div className="col-lg-5">
							<div className="aximo-form-wrap aximo-footer-title">
								<h4>Send us a message</h4>
								<MessageForm />
							</div>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
