import { blogs } from "./blogs.js";

function load_blogs() {
    let blogs_list = document.getElementById("blogs");

    let done_items = 0;

    blogs.forEach((blog, _) => {
        let path = window.location.pathname;
        const page = path.split("/").pop().replace(".html", "");
        if (blog == page) {
            done_items += 1;
            if (done_items == blogs.length) {

                if (blogs_list.children.length == 0) {
                    document.getElementById("loading").textContent = "No other blogs!"
                } else {
                    document.getElementById("loading").remove()
                }
            }
            return;
        }

        let iframe = document.createElement('iframe');
        iframe.id = blog;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        iframe.src = './' + blog + ".html";
        iframe.onload = (_) => {
            let blog_html = document.getElementById(blog).contentDocument;
            console.log(blog_html)
            var text = blog_html.getElementById("desc").textContent;
            iframe.remove()

            let li = document.createElement('li');
            li.classList.add("blog")

            let a = document.createElement("a");
            a.setAttribute("href", iframe.src);
            li.appendChild(a);

            let title = document.createElement('h2');
            title.textContent = blog;
            title.classList.add("text-4xl","font-bold", "title")
            a.appendChild(title);

            let date = document.createElement("span");
            date.textContent = blog_html.getElementById("date").textContent;
            date.classList.add("text-1xl", "font-bold")
            a.appendChild(date);


            let p = document.createElement('h2');
            p.textContent = text.split(" ").slice(0, 10).join(" ");
            p.classList.add("text-1xl", "description")
            a.appendChild(p);

            blogs_list.appendChild(li);

            done_items += 1;
            if (done_items == blogs.length) {
                document.getElementById("loading").remove()
            }
        }
    })
}

load_blogs()
