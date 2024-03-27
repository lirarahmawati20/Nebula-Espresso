export default function Home_admin(){
return (
     <div className="app">
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bx-bowl-hot'></i>
          <span className="logo_name">Restaurant</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="index.html" className="active">
              <i className='bx bxs-grid' ></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="./product/">
              <i className='bx bxs-component'></i>
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="./data-kasir/">
              <i className='bx bxs-user-plus'></i>
              <span className="links_name">Data kasir</span>
            </a>
          </li>
          <li>
            <a href="./history/">
              <i className='bx bx-history'></i>
              <span className="links_name">history</span>
            </a>
          </li>
          <li>
            <a href="/login">
              <i className='bx bx-log-out'></i>
              <span className="links_name" id="logout">logout</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button sidebarBtn">
            <i className='bx bxs-grid' ></i>
            <span className="dashboard">Dashboard</span>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box-1">
              <div className="right-side">
                <div className="number">90%</div>
                <div className="box-topic">product</div>
                <div className="indicator">
                  <span className="text">more info</span>
                  <a href="../kasir/"><i className='bx bxs-right-arrow-circle bx-tada bx-flip-vertical' ></i></a>
                </div>
              </div>
              <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="box-2">
              <div className="right-side">
                <div className="number">about</div>
                <div className="box-topic">about</div>
                <div className="indicator">
                  <span className="text">more info</span>
                  <a href="../about/"> <i className='bx bxs-right-arrow-circle bx-tada bx-flip-vertical' ></i></a>
                </div>
              </div>
              <i className='bx bx-notepad' ></i>
            </div>
            <div className="box-3">
              <div className="right-side">
                <div className="number">add kasir</div>
                <div className="indicator">
                  <span className="text">more info</span>
                  <a href="./data-kasir/add-kasir/index.html"><i className='bx bxs-right-arrow-circle bx-tada bx-flip-vertical' ></i></a>
                </div>
              </div>
              <i className='bx bx-male-female'></i>
            </div>
            <div className="box-4">
              <div className="right-side">
                <div className="number">65%</div>
                <div className="box-topic">unique visitors</div>
                <div className="indicator">
                  <span className="text">more info</span>
                  <a href=""> <i className='bx bxs-right-arrow-circle bx-tada bx-flip-vertical' ></i></a>
                </div>
              </div>
              <i className='bx bxs-circle-three-quarter'></i>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 lira rahmawati</p>
      </footer>
    </div>
  );
}

