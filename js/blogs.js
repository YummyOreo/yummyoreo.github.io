let blogs = ["test"]

function load_blogs() {
    let blogs_list = document.getElementById("blogs");

    let done_items = 0;

    blogs.forEach((blog, _) => {
        let iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        iframe.src = './blogs/' + blog + ".html";
        setTimeout(function() {
            var text = document.getElementsByTagName('iframe')[0].contentDocument.getElementById("desc").textContent;
            iframe.remove()

            let li = document.createElement('li');
            li.classList.add("blog")

            let a = document.createElement("a");
            a.setAttribute("href", iframe.src);
            li.appendChild(a);

            let title = document.createElement('h2');
            title.textContent = blog;
            title.classList.add("text-4xl", "pt-4", "font-bold")
            a.appendChild(title);

            let p = document.createElement('h2');
            p.textContent = text.split(" ").slice(0, 20).join(" ");
            p.classList.add("text-1xl", "description")
            a.appendChild(p);

            blogs_list.appendChild(li);

            done_items += 1;
            if (done_items == blogs.length) {
                document.getElementById("loading").remove()
            }
        }, 500);
    })
}

load_blogs()
