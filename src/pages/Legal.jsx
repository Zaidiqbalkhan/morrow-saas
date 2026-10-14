import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Legal() {
 const { kind } = useParams();
 const privacy = kind === 'privacy';
 return <><Navbar/><main className="legal-page container-wide"><span className="section-kicker">DEMONSTRATION DOCUMENT / NOT LEGAL ADVICE</span><h1>{privacy ? 'Privacy' : 'Terms'} <em>(sample)</em></h1><p className="legal-intro">Morrow is a fictional software product created as a frontend portfolio project. This page is sample copy and is not a legal policy for a real service.</p>{privacy ? <><h2>What this demo collects</h2><p>Nothing is transmitted to a backend by this application. Forms and projects are handled in temporary React state. Reloading the page resets them. No authentication, analytics integration, or payment processing has been implemented.</p><h2>External links</h2><p>The social icons in the footer link to external platform homepages as labeled placeholders. The optional Google Fonts stylesheet may be requested by the browser.</p></> : <><h2>Demo use</h2><p>All plans, projects, client names, dashboard metrics, and illustrative testimonials are fictional. Actions in the demo provide local visual feedback only. No real service, account, purchase, or subscription is offered.</p><h2>Availability</h2><p>The interface is provided as a static demonstration without guarantees of ongoing availability or persistent storage.</p></>}<Link to="/" className="btn btn-dark"><ArrowLeft size={18}/> Back to Morrow</Link></main><Footer/></>;
}
