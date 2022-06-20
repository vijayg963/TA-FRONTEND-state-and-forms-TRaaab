import image from '../image/male.png';
import image2 from '../image/female.png';

function Three() {
  return (
    <>
      <div className='container'>
        <div className='two'>
          <p>Step 3/3</p>
          <h2>Checkbox</h2>
          <div className='flex checkbox'>
            <div className='image img-1'>
              <img src={image} alt='male' />
            </div>
            <div className='image img-2'>
              <img src={image2} alt='female' />
            </div>
          </div>
          <form>
            <div>
              <label>
                <input type='radio' />I want to add this option
              </label>
              <label>
                <input type='radio' />
                Let me click on this Checkbox and choose some cool stuf
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Three;
