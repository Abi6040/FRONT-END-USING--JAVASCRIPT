import { Link, Navigate } from 'react-router-dom';
export default function Home() {
    return (
      <div className="bg-LIGHT">
      <h1 className="text-capitalize text-center text-info at -3 mb-5">  WELCOME TO THE STATIONARY MART</h1>
        <div className="container text-center">
            <div className="row">
              <div className="col">
                <Link to="./zz">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://i.etsystatic.com/13515920/r/il/09e08a/2096561289/il_570xN.2096561289_3hdk.jpg" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "Oxee82ee"}}>
                      <h3 class="card-title">PENS</h3>
                      <p class="nav-link active text-info">MAKE NOTES.</p>
                      <p class="nav-link active text-danger" >price:30.0</p>
                      
                      <a href="./zz" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
                       </Link>
              </div>
              <div className="col">
                <Link to ="./pencil">
                <div class="card " style={{width: "18rem"}}>
                  <img src="https://i0.wp.com/www.wellappointeddesk.com/wp-content/uploads/2020/02/coloredpencils-7.jpg?fit=960%2C939&ssl=1" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "white"}}>
                      <h3 class="card-title">PENCIL</h3>
                      <p class="nav-link active text-info">BEST DRAWER .</p>
                      <p class="nav-link active text-danger" >price:10.0</p>
                     
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
                       </Link>
              </div>
              <div className="col">
              <Link to ="./note">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcVoyhYkenCQzl86Pz-uf2EbS3MnmnaSouw&usqp=CAU" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">NOTEBOOK</h5>
                      <p class="nav-link active text-info">PLACE TO ESTABLISH CREACTIVITY.</p>
                      <p class="nav-link active text-danger" >price:90.0</p>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
                       </Link>
              </div>
              <div className="col">
              <Link to ="./eraser">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxelse3ZE-ZmMJ8tvqHPHJHDTY_fo0n3J4Px3NhvuEo9Im558WotGXzpBnQrbRZsnnYzg&usqp=CAU" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">ERASER-SHAROPNER</h5>
                      <p class="nav-link active text-info">SOMETHINGCAN BE RECREATE.</p>
                      <p class="nav-link active text-danger" >price:20.0</p>
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div></Link>
              </div>
              <div className="col">
              <Link to ="./geo">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://rukminim2.flixcart.com/image/850/1000/k2z1t3k0/geometry-box/z/s/u/stellar-mathematical-instrument-box-faber-castell-original-imafm7jt36evjvkv.jpeg?q=90&crop=false" class="card-img-top" alt="..."height="300px"/>
                  <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">GEOMETRY BOX</h5>
                      <p class="nav-link active text-info">TOOLS TO RECREATE SHAPES.</p>
                      <p class="nav-link active text-danger" >price:100.0</p>
                     
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div></Link>
              </div>
              <div className="col">
              <Link to ="./box">
                <div class="card" style={{width: "18rem"}}>
                  <img src="https://staranddaisy.in/wp-content/uploads/2021/07/pencilbox27fb23_e.jpg" class="card-img-top" alt="..."height="250px"/>
                    <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">PENCIL BOX</h5>
                      <p class="nav-link active text-info">STORAGE FOR WEAPONS.</p>
                      <p class="nav-link active text-danger" >price:125.0</p>
                     
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div></Link>
              </div>
              <div className="col">
              <Link to ="./ink">
              <div class="card" style={{width: "18rem"}}>
                  <img src="https://i.pinimg.com/originals/6d/cf/2c/6dcf2c7f6f6164542fa8d236012264b3.jpg" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">INK BOTTLE</h5>
                      <p class="nav-link active text-info">RELOAD YOUR WEAPONS.</p>
                      <p class="nav-link active text-danger" >price:40.0</p>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div></Link>
              </div>
              <div className="col">
              <Link to ="./paper">
              <div class="card" style={{width: "18rem"}}>
                  <img src="https://helloaugust.in/wp-content/uploads/2020/04/dark-colour-chart-paper-full-size.jpg" class="card-img-top" alt="..."height="300px"/>
                    <div class="card-body"  style={{backgroundColor: "WHITE"}}>
                      <h5 class="card-title">COLOUR PAPER</h5>
                      <p class="nav-link active text-info">FREE UP YOUR HANDS.</p>
                      <p class="nav-link active text-danger" >prie:5.0</p>
                      
                      <a href="#" class="btn btn-info">BUY</a>
                      <button onClick={() => Navigate('./cart')}></button>
                       </div>
                       </div>
              </Link>
              </div>
            </div>
          </div></div>
      );
    }