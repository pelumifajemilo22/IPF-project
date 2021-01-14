import React, { Component } from 'react';
import { Data } from './IPfData';
import {Link} from 'react-router-dom';
import {ListStyle,UlStyle, Input, DivWrapper,Span} from './HeaderElement'

export default class Header extends Component {
  state = {
    search: '',
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value, 
    });
  };
 
  render() {
    let resData = [];
    const searchKey = this.state.search.trim().toLowerCase();
    if (searchKey && searchKey.length > 0) {
      resData = Data.filter((i) => {
        return i.name.toLowerCase().match(searchKey);
      });
    }
    return (
      <DivWrapper className='container-fluid '>
        <div className='row'>
          <div className='col display-4'>IPF</div>
          <div className='col-8 mt-3'>
            <div>
                <Span className="mr-2">Find Club</Span>
              <Input
              
                type='text'
                value={this.state.search}
                onChange={(e) => this.handleChange(e)}
                placeholder='search...'
              />
               <UlStyle >
            {resData.map((i) => {
              return (
                <ListStyle key={i.id}>
                  <Link to={i.path}>
                    {i.name}
                  </Link>
                </ListStyle>

              );
            })}
          </UlStyle>
            </div>
          </div>
        </div>
      </DivWrapper>
    );
  }
}
