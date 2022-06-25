function One(props) {
  return (
    <>
      <div className='container'>
        <div className='one'>
          <p>Step 1/3</p>
          <h2>Sign UP</h2>
          <form>
            <div className='flex'>
              <label>
                First Name
                <input className='flex-48' type='text' />
              </label>
              <label>
                Last Name
                <input className='flex-48' type='text' />
              </label>
            </div>
            <div className='flex'>
              <label>
                Date of Birth
                <input className='flex-48' type='date' />
              </label>
              <label>
                Email Address
                <input className='flex-48' type='email' />
              </label>
            </div>
            <label>
              Address
              <input type='text' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default One;
