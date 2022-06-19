import React from 'react';
const initialState = {
  address: '',
  zip: '',
  city: '',
  country: '',
};
class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: initialState,
      billing: initialState,
      isSame: false,
    };
  }
  handleInput = (event, key) => {
    let { name, value } = event.target;
    this.setState({
      ...this.state,
      [key]: { ...this.state[key], [name]: value },
    });
  };
  // handleShip = (target) => {
  //   let { name, value } = target;
  //   this.setState({
  //     shipping: { ...this.state.billing, [name]: value }
  //   }
  // };
  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `this is address${this.state.address}``this is zip ${this.state.zip}`,
      `this is City ${this.state.city}`,
      `this is  country ${this.state.country}`
    );
  };

  render() {
    const shippingData = this.state.shipping;
    const billingData = this.state.billing;
    // console.log(shippingData.address);
    // console.log(billingData);
    console.log(this.state);
    return (
      <>
        <h2>Controlled Component</h2>
        <div className='flex'>
          <form onSubmit={this.handleSubmit}>
            <h3>Shipping address</h3>
            <label>
              address
              <input
                value={shippingData.address}
                onChange={(event) => {
                  this.handleInput(event, 'shipping');
                }}
                name='address'
                type='text'
                placeholder='e.g Himachal, Dharamshala'
              />
            </label>
            <span>{}</span>
            <label>
              ZIP/ Postal Code
              <input
                value={shippingData.zip}
                onChange={(event) => {
                  this.handleInput(event, 'shipping');
                }}
                name='zip'
                type='text'
                placeholder='e.g 176057'
              />
            </label>
            <span>{}</span>
            <label>
              City
              <input
                value={shippingData.city}
                onChange={(event) => {
                  this.handleInput(event, 'shipping');
                }}
                name='city'
                type='text'
                placeholder='e.g Himachal Pardesh'
              />
            </label>
            <span>{}</span>
            <label>
              Country
              <input
                value={shippingData.country}
                onChange={(event) => {
                  this.handleInput(event, 'shipping');
                }}
                name='country'
                type='text'
                placeholder='e.g India'
              />
            </label>
            <span>{}</span>
          </form>
          <form onSubmit={this.handleSubmit}>
            <h3>Billing address</h3>
            <div className='flex-align'>
              <input
                id='checkbox'
                type='checkbox'
                onClick={(event) => {
                  this.setState({
                    ...this.state,
                    isSame: !this.state.isSame,
                    billing: !this.state.isSame
                      ? { ...this.state.shipping }
                      : { ...initialState },
                  });
                }}
                checked={this.state.isSame}
              />
              <label htmlFor='checkbox'>Same as the Shipping address?</label>
            </div>
            <label>
              address
              <input
                value={billingData.address}
                onChange={(event) => {
                  this.handleInput(event, 'billing');
                }}
                name='address'
                type='text'
                placeholder='e.g Himachal, Dharamshala'
              />
            </label>
            <span>{}</span>
            <label>
              ZIP/ Postal Code
              <input
                value={billingData.zip}
                onChange={(event) => {
                  this.handleInput(event, 'billing');
                }}
                name='zip'
                type='text'
                placeholder='e.g 176057'
              />
            </label>
            <span>{}</span>
            <label>
              City
              <input
                value={billingData.city}
                onChange={(event) => {
                  this.handleInput(event, 'billing');
                }}
                name='city'
                type='text'
                placeholder='e.g Himachal Pardesh'
              />
            </label>
            <span>{}</span>
            <label>
              Country
              <input
                value={billingData.country}
                onChange={(event) => {
                  this.handleInput(event, 'billing');
                }}
                name='country'
                type='text'
                placeholder='e.g India'
              />
            </label>
            <span>{}</span>
          </form>
        </div>
      </>
    );
  }
}

export default Bill;
