function Two() {
  return (
    <>
      <div className='container'>
        <div className='two'>
          <p>Step 2/3</p>
          <h2>Message</h2>
          <form>
            <label>
              Message
              <textarea
                rows='7'
                placeholder='Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available'
              ></textarea>
            </label>
            <div className='left'>
              <label>
                <input type='radio' />
                The number one choice
              </label>
              <label>
                <input type='radio' />
                The number two choice
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Two;
