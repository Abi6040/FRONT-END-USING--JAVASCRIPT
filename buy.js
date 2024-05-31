import { Link, Navigate } from 'react-router-dom';
export default function Buy() {
    return (
      <div className="bg-dark">
      <h1 className="text-capitalize text-center text-info at -3 mb-5">WEAPON ARE AVAILABLE....</h1>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6546-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h3 class="card-title">PEN</h3>
                      <p class="nav-link active text-info">FOR NON-STOP WRITTING</p>
                      <p class="nav-link active text-danger" >Price:60.</p>
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              </div>
              <div className="col">
              <Link to="./pencil">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://luxor.in/media/catalog/product/cache/1d33a401d7d4f49c41930c20a2e836a7/9/0/9000005334_0_1.jpg" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">INK BOTTLE</h5>
                      <p class="nav-link active text-info">REFILL YOUR WEAPON.</p>
                      <p class="nav-link active text-danger" >price:40.0</p>
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
                       </Link>
              </div>
              <div className="col">
              <Link to="./pencil">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://www.tinyminymo.com/cdn/shop/products/Kawaii-Animal-Mechanical-Pencil-1_1200x1200.jpg?v=1667483741" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">PENCIL</h5>
                      <p class="nav-link active text-info">BRING YOUR OWN CREACTIVITYT.</p>
                      <p class="nav-link active text-danger" >price:10.0</p>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
                       </Link>
              </div>
              <div className="col">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://m.media-amazon.com/images/I/41faFUUNlzL._AC_UF1000,1000_QL80_.jpg" class="card-img-top" alt="..."height="300px"/> 
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">GEOMETRY BOX</h5>
                      <p class="nav-link active text-info">DRAW WITH TOOLS.</p>
                      <p class="nav-link active text-danger" >price:150.0</p>
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              </div>
              <div className="col">
                <div class="card" style={{width: "18rem"}}>
                  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">ERASER-SHAREPNER</h5>
                      <h4 class="nav-link active text-info">SOMETHING CAN BE MODIFY</h4>
                      <h1 class="nav-link active text-danger" >Price:15.0</h1>
                     
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              </div>
              <div className="col">
                <div class="card" style={{width: "18rem"}}>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/354790305/ZW/UW/OM/201305251/calculator-geometry-box.png" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">PENCIL BOX</h5>
                      <p class="nav-link active text-info">PLACE TO KEEP STATIONARY</p>
                      <p class="nav-link active text-danger" >price:150.0</p>
                     
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              </div>
              <div className="col">
              <div class="card" style={{width: "18rem"}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjuR4yu2qn-6E8JJbR9PDcEJXbO6xpkYSeg&usqp=CAU" class="card-img-top" alt="..."height="300px"/>   
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h5 class="card-title">COLOUR PAPER</h5>
                      <p class="nav-link active text-info">CREACTIVITY ARE WELCOME</p>
                      <p class="nav-link active text-danger" >price:5.0</p>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              </div>
              <div className="col">
              <div class="card" style={{width: "18rem"}}>
              <img src="https://m.media-amazon.com/images/I/51h6eqwfePS._SX300_SY300_QL70_FMwebp_.jpg" class="card-img-top" alt="..."height="300px"/> 
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h3 class="card-title">NOTEBOOK</h3>
                      <h5 class="nav-link active text-info">PRATICE MAKE MAN PERFECT</h5>
                      <h4 class="nav-link active text-danger" >Price:80.0</h4>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                       </div>
                       </div>
              
              </div>
            </div>
          </div></div>
      );
    }