import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Show a breadcrumb trail that reflects the current simulated navigation depth.";

const requirements = [
  "Breadcrumb updates as the user navigates deeper",
  "Clicking a breadcrumb segment jumps back to that level",
  "Home is always the first breadcrumb"
];
import { useState } from 'react';

export default function BreadcrumbNavigation() {

  const [page, setPage] = useState('home');
  let breadcrumb = ['home'];
  let display;

  if(page === 'home') {
    display = <div>
      <h1>Amazon Home Page</h1>
      <button onClick={()=>setPage('products')}>Products</button> 
      <span> </span>
      <button onClick={()=>setPage('profile')}>Profile</button>
    </div>
  }
  else if(page === 'products') {
    breadcrumb.push('products');
    display = <div>
      <h2>Products</h2>
      <button onClick={()=>setPage('shirts')}>Shirts</button>
      <button onClick={()=>setPage('pants')}>Pants</button>
      <button onClick={()=>setPage('shoes')}>Shoe</button>
    </div>
  }
  else if(page === 'profile') {
    breadcrumb.push('profile');
    display = <div>
      <h2>Profile</h2>
      <p>Name = Gagan</p>
    </div>
  }
  else if(page === 'shirts') {
    breadcrumb.push('products');
    breadcrumb.push('shirts');
    display = <div>
      <h3>Shirts</h3>
      <img src='https://www.falconsuits.in/cdn/shop/files/ChatGPTImageJun4_2025_02_24_54PM.png?v=1750337376' height={300} width={300}></img>
      <img src='https://cottonfolk.in/cdn/shop/files/Men_sBrownPinstripeShort-SleeveShirt.jpg?v=1732268509&width=2048' height={300} width={300}></img>
      <img src='https://chriscross.in/cdn/shop/files/ChrisCrossRoyalblueCottontshirtmen.jpg?v=1740994595&width=2048' height={300} width={300}></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ycVaLp7DwamqQtiWMnyEFAJdGRFLdpt5im4qSRtNGeHO6SjsoHbtB38&s=10' height={300} width={300}></img>
    </div>
  }
  else if(page === 'pants') {
    breadcrumb.push('products');
    breadcrumb.push('pants');
    display = <div>
      <h3>Pants</h3>
      <img src='https://www.jackjones.in/cdn/shop/files/902171901_g0_cd513186-a638-4c60-8241-9b7181875667.jpg?v=1753200105&width=2048' height={300} width={300}></img>
      <img src='https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/34161259/2025/5/26/8feb1066-5639-4e6c-a8f5-b0871ae57d681748266679858-Maniac-Mens-Striped-Cotton-Baggy-Fit-Track-Pants-25617482666-1.jpg' height={300} width={300}></img>
      <img src='https://www.andamen.com/cdn/shop/files/01_19e774f0-e451-48b3-be76-83b4855dc0c0.jpg?v=1743150233' height={300} width={300}></img>
      <img src='https://www.jackjones.in/cdn/shop/files/901034401_g0.jpg?v=1745346103&width=2048' height={300} width={300}></img>
    </div>
  }
  else if(page === 'shoes') {
    breadcrumb.push('products');
    breadcrumb.push('shoes');
    display = <div>
      <h3>Shoes</h3>
      <img src='https://png.pngtree.com/png-vector/20241018/ourmid/pngtree-running-shoes-or-sneakers-on-a-transparent-background-png-image_14112954.png' height={300} width={300}></img>
      <img src='https://img.magnific.com/premium-psd/free-psd-green-shoes-png-isolated-transparent-background_1049834-3612.jpg?semt=ais_test_b&w=740&q=80' height={300} width={300}></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53apK9xAQz1ANMAB0_7G5cygPN4EQhckYMsOx71enR0I9CdhEo2Hka9U&s=10' height={300} width={300}></img>
      <img src='https://img.magnific.com/premium-photo/running-shoes-sneakers-transparent-background_84443-2173.jpg?semt=ais_test_b&w=740&q=80' height={300} width={300}></img>
    </div>
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Breadcrumb Navigation"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/routing/breadcrumb-navigation.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div style={{ display: "flex", gap: "10px" }}>
            {breadcrumb.map((item, index) => (
              <div
                key={index}
                onClick={() => setPage(item)}
                style={{ border: "1px solid white", padding: "5px" }}
              >
                {item}
              </div>
            ))}
          </div>
          {display}
        </div>
      </div>
    </div>
  );
}
