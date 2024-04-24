import profileImg from '/img/profile.png';
import ordersImg from '/img/orders.png';
import homeImg from '/img/home.png';
import cartImg from '/img/cart.png';
import productImg from '/img/product.png';

function MockupImages() {
  return (
    <div>
      <img src={profileImg} alt='Profile Mockup' className='profile-img' />
      <img src={ordersImg} alt='Orders Mockup' className='orders-img' />
      <img src={homeImg} alt='Home Mockup' className='home-img' />
      <img src={cartImg} alt='Cart Mockup' className='cart-img' />
      <img src={productImg} alt='Product Mockup' className='product-img' />
    </div>
  );
}

export default MockupImages;
