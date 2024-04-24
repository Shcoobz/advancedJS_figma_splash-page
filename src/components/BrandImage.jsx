import brandLogo from '/img/habitual-branding.png';

/**
 * Displays the brand image for the application.
 * Utilizes a specific image file imported as a module.
 */
function BrandImage() {
  return <img src={brandLogo} alt='Habitual Logo' className='brand-img' />;
}

export default BrandImage;
