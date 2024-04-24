import mainImage from '/img/main-image.png';

/**
 * Displays the main image typically used for the landing page of the application.
 * It provides a visual focus that complements the application's primary content.
 */
function MainImage() {
  return (
    <div className='main-image-container'>
      <img src={mainImage} alt='Landing Page Mockup' />
    </div>
  );
}

export default MainImage;
