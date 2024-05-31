export default function Nav()
{
    return (
        <nav className="navbar navbar-expand-lg bg-success shadow ">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./buy">BUY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./TermsAndConditions"> Terms</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about"> About</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}