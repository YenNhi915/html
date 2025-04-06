async function handleClick() {
  const loading = document.querySelector(".loading ");
  loading.classList.add("active");

  const data = await (await fetch("https://fakestoreapi.com/products")).json();

  loading.classList.remove("active");

  const ulEl = document.querySelector(".products");

  const productItem = data.forEach((item) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    const img = document.createElement("img");
    img.setAttribute("src", item.image);
    link.setAttribute("href", item.image);
    link.setAttribute("target", "_blank");
    link.innerHTML = "click me";

    li.innerHTML = item.title + item.description;
    li.appendChild(img);
    li.appendChild(link);

    ulEl.appendChild(li);
  });
}
