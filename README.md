<div class="container">
  <h1 id="description">Show English Text</h1>
   <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Language Option
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li onclick="toggleLanguage('English')"><a href="#">English</a></li>
      <li onclick="toggleLanguage('Korean')"><a href="#">Korean</a></li>
    </ul>
  </div>
</div>

</body>
<script>
function toggleLanguage(language) {
  let description = document.getElementById("description");
  if (language === "Korean") {
    description.innerHTML = "Show Korean Text";
  }
  else {
    description.innerHTML = "Show English Text";
  }
}
</script>