import React from 'react';

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='text-4xl font-semibold text-center mt-20 mb-10'>My Projects </h1>
            <div className='md:grid md:grid-cols-3 gap-4 mx-40'>
          <div>
          <div className="card w-auto glass">
  <figure><img src="../../../public/pojects/summer school s.png" alt="car!"/></figure>
  <div className="card-body">
  <h1 className='text-center text-orange-600 font-bold'>Full Stack</h1>
    <h2 className="card-title">Summer School Camp</h2>
    <div className="" >
    <a href="https://summer-school-sport-camp.web.app/"> <button className="btn btn-primary text-center">Live side link</button></a>
       
        <br />
        <div className='flex items-center justify-around'>
        <a href="https://github.com/najmul905/summer-school-camp-client"><button className="btn btn-primary my-2">clint Side</button></a>
        
        <br />
        <a href="https://github.com/najmul905/summer-school-camp-server">  <button className="btn btn-primary">Server Side</button></a>
      
        </div>
        
    </div>
  </div>
</div>
          </div>
          <div className=''>
          <div className="card w-auto glass">
  <figure><img src="../../../public/pojects/toy house s.png" alt="car!"/></figure>
  <div className="card-body">
    <h1 className='text-center text-orange-600 font-bold'>Full Stack</h1>
    <h2 className="card-title">Toy HOuse BD</h2>
    <div className="" >
    <a href="https://toy-house-bd-8f792.web.app/"> <button className="btn btn-primary text-center">Live side link</button></a>
       
        <br />
        <div className='flex items-center justify-around'>
        <a href="https://github.com/najmul905/toy-house-bd"><button className="btn btn-primary my-2">clint Side</button></a>
        
        <br />
        <a href="https://github.com/najmul905/toy-house-bd-server">        <button className="btn btn-primary">Server Side</button>
</a>
        </div>
        
    </div>
  </div>
</div>
          </div>
          <div>
          <div className="card w-auto glass">
  <figure><img src="../../../public/pojects/famous chef s.png" alt="car!"/></figure>
  <div className="card-body">
  <h1 className='text-center text-orange-600 font-bold'>Front-end</h1>
    <h2 className="card-title">Famous Chef Dish</h2>
    <div className="" >
    <a href="https://famous-chef-dish.web.app/"> <button className="btn btn-primary text-center">Live side link</button></a>
       
        <br />
        <div className='flex items-center justify-around'>
        <a href="https://github.com/najmul905/famouse-chefs-dish-client">  <button className="btn btn-primary my-2">clint Side</button></a>
      
        <br />
        <a href="https://github.com/najmul905/famouse-chefs-dish-server">  <button className="btn btn-primary">Server Side</button></a>
      
        </div>
        
    </div>
  </div>
</div>
          </div>
      </div>
        </div>
    );
};

export default Projects;