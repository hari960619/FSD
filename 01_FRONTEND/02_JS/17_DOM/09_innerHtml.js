const html = `
    <ul id="parent">
      <li class="parent">child 1</li>
      <li class="parent">child 2</li>
      <li class="parent">child 3</li>
    </ul>`;

document.querySelector(".textContent").textContent = html;

document.querySelector(".innerHtml").innerHTML = html;

document.querySelector(".innerHtmlText").innerHTML =
  "<h1>you can add anything</h1>";
