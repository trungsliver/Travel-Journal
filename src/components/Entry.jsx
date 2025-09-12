import marker from "../assets/marker.png";

// use pass object as props
// export default function Entry(props) {
//     console.log(props);
//     return (
//         <article className="journal-entry">
//             <div className="main-img-container">
//                 <img className="main-img" src={props.entry.img.src} alt={props.entry.img.alt} />
//             </div>

//             <div className="info">
//                 <img className="marker" src={marker} alt="Marker" />
//                 <span className="country">{props.entry.country}</span>
//                 <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>

//                 <h2 className="title">{props.entry.title}</h2>
//                 <p className="date">{props.entry.date}</p>
//                 <p className="text">{props.entry.text}</p>
//             </div>
//         </article>
//     )
// }

// use spread object as props
export default function Entry(props) {
    console.log(props);
    return (
        <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="info">
                <img className="marker" src={marker} alt="Marker" />
                <span className="country">{props.country}</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>

                <h2 className="title">{props.title}</h2>
                <p className="date">{props.date}</p>
                <p className="text">{props.text}</p>
            </div>
        </article>
    )
}