import BrandImage from './components/BrandImage';
import BackgroundToggles from './components/BackgroundToggles';
import TextContainer from './components/TextContainer';
import MainImage from './components/MainImage';
import MockupImages from './components/MockupImage';

/**
 * The main React component that acts as the container for all other components in the application.
 * It renders the brand image, background toggles, text content, main and mockup images.
 */
function App() {
  return (
    <div className='wrapper'>
      <BrandImage />
      <BackgroundToggles />
      <TextContainer />
      <MainImage />
      <MockupImages />
    </div>
  );
}

export default App;
