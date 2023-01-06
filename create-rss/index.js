import { parse } from 'node-html-parser';
import RSS from 'rss';

var feed = new RSS({
    title: "YummyOreo's blog posts",
    site_url: "https://oreo.is-a.dev",
    feed_url: "https://oreo.is-a.dev/rss"
});

import fs from 'fs';
var files = fs.readdirSync('../blogs/');

function make_file() {
    let xml = feed.xml({indent: true})
    xml = xml.replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>", "");

    fs.writeFile("..\\rss.xml", xml, (err) => {console.log(err)})
}

let done_items = 0;
files.forEach((file, index) => {
    fs.readFile("../blogs/" + file, "utf8", (_, data) => {
        const root = parse(data);
        let title = root.querySelector(".title h1").textContent;
        let content = root.querySelector(".content");
        let date = root.querySelectorAll(".date").textContent

        feed.item({
            title,
            description: content.toString(),
            url: "https://oreo.is-a.dev/blogs/" + file,
            date,
        })
        done_items += 1;
        if (done_items == files.length) {
            make_file();
        }
    })
})

