let blogs = ["test"]

function load_blogs() {
    let blogs_list = document.getElementById("blogs");

    let done_items = 0;

    blogs.forEach((blog, _) => {
        let iframe = document.createElement('iframe');
        iframe.id = blog;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        iframe.src = './blogs/' + blog + ".html";
        iframe.onload = (_) => {
            let blog_html = document.getElementById(blog).contentDocument;
            console.log(blog_html)
            var text = blog_html.getElementById("intro").textContent;
            iframe.remove()

            let li = document.createElement('li');
            li.classList.add("blog")


            let title = document.createElement('h2');
            title.textContent = blog;
            title.classList.add("text-4xl", "font-bold", "title")
            li.appendChild(title);

            let date = document.createElement("span");
            date.textContent = blog_html.getElementById("date").textContent;
            date.classList.add("text-1xl", "font-bold")
            li.appendChild(date);

            let p = document.createElement('p');
            p.textContent = text.split(" ").slice(0, 100).join(" ");
            p.classList.add("text-1xl", "description")
            li.appendChild(p);

            let a = document.createElement("a");
            a.setAttribute("href", iframe.src);
            li.appendChild(a);

            let button = document.createElement("button")
            button.textContent = "Read more"
            button.classList.add("mt-3")
            a.appendChild(button)

            blogs_list.appendChild(li);

            done_items += 1;
            if (done_items == blogs.length) {
                document.getElementById("loading").remove()
            }
        }
    })
}

export { blogs, load_blogs };
