import { newGallery, importPhoto } from "./gallery.js";

let photos = [
	// protest
	importPhoto("../assets/photos/portfolio/protest/1.jpg", "People march during May Day protest in Chicago on May 1, 2026."),
	importPhoto("../assets/photos/portfolio/protest/2.jpg", "Protest at Federal Plaza, Chicago, against the strikes on Iran the previous day. Feb. 28, 2026."),
	importPhoto("../assets/photos/portfolio/protest/3.jpg", "Thousands march during Chicago May Day protest on May 1, 2026."),
	importPhoto("../assets/photos/portfolio/protest/4.jpg", "Protesters march in Chicago's Loop a day after the killing of Alex Pretti. Jan. 26, 2026."),
	importPhoto("../assets/photos/portfolio/protest/5.jpg", "Students chant at May Day protest at Union Park, Chicago on May 1, 2026."),
	importPhoto("../assets/photos/portfolio/protest/6.jpg", "Protesters gather in Scoville Park, Oak Park, Ill., to protest against ICE. Jan. 30, 2026."),
	importPhoto("../assets/photos/portfolio/protest/7.jpg", "Protest in the Loop of Chicago against the strikes on Iran the previous day. Feb. 28, 2026."),
	importPhoto("../assets/photos/portfolio/protest/8.jpg", "No Kings protesters march to the Minnesota state capitol. March 28, 2026."),

	// event
	importPhoto("../assets/photos/portfolio/event/1.jpg", "Large building fire in Maywood, Ill. on April 4, 2026."),
	importPhoto("../assets/photos/portfolio/event/2.jpg", "Oak Park residents cast their vote on if referendum in opposition to Illinois' anti-BDS law should appear on November ballot at Township meeting on Apirl 28, 2026."),
	importPhoto("../assets/photos/portfolio/event/3.jpg", "Volunteers get ready before Oak Park and River Forest High School's Empty Bowl event in Oak Park, Ill., on Feb. 20, 2026."),
	importPhoto("../assets/photos/portfolio/event/4.jpg", "People choosing bowls during Oak Park and River Forest High School's Empty Bowl event in Oak Park, Ill., on Feb. 20, 2026."),
	importPhoto("../assets/photos/portfolio/event/5.jpg", "Author John Green speaks to tuberculosis advocates, survivors and experts at a training day for a Tuberculosis Hill Day in Washington, D.C. March 2, 2026."),
	importPhoto("../assets/photos/portfolio/event/6.jpg", "Tuberculosis advocates and survivors gather at Union Pub in Washington, D.C. after lobbying Congress for increased tuberculosis funding. March 3, 2026."),
	importPhoto("../assets/photos/portfolio/event/7.jpg", "Bagpipers and revelers at a Saint Patrick's day parade in Montreal, Canada. March 22, 2026."),
	importPhoto("../assets/photos/portfolio/event/8.jpg", "Tuberculosis advocates recieve trained on conducting meetings with their elected representatives in Washington, D.C. on March 2, 2026."),

	// sports
	importPhoto("../assets/photos/portfolio/sports/1.jpg", "Oak Park and River Forest High School's Ulimate Frisbee team hosts tryouts in Oak Park, Ill. March 8, 2026."),
	importPhoto("../assets/photos/portfolio/sports/2.jpg", "Juex Urbains BMX event in Montreal, Canada. March 21, 2026."),

	// other
	importPhoto("../assets/photos/portfolio/msc/1.jpg", "Winter Pearson, TBFighter attending Tuberculosis Hill Day on March 3, 2026."),
	importPhoto("../assets/photos/portfolio/msc/2.jpg", "Memorial of Renee Good in Minneapolis, Minnesota, on March 28, 2026."),
	importPhoto("../assets/photos/portfolio/msc/3.jpg", "Parking lot in Montreal, Canada, on March 20, 2026."),
]

let gallery = newGallery(photos, document.getElementById("photos"))

